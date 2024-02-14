const { Team, User } = require("../schema");
const { ApiError } = require("../utils/ApiError");
const { ApiResponse } = require("../utils/ApiResponse");
const { asyncHandler } = require("../utils/asyncHandler");

const createTeam = asyncHandler(async (req, res) => {
    const { name, about, size, event } = req.body;

    // Assume user ID is available in req.userId (from authentication middleware)
    const createdBy = req.user._id;

    // Create a new team
    const newTeam = new Team({
        name,
        about,
        size,
        createdBy,
        leader: createdBy, // The creator is the initial leader
        event,
    });

    // Save the team to the database
    const savedTeam = await newTeam.save();

    res.status(201).json(new ApiResponse(201, savedTeam, "Team created successfully"));
});

const joinTeam = asyncHandler(async (req, res) => {
    const { teamId } = req.body;

    // Assume user ID is available in req.user._id (from authentication middleware)
    const userId = req.user._id;

    // Find the team by teamId
    const team = await Team.findById(teamId);

    // Check if the team exists
    if (!team) {
        throw new ApiError(404, "Team not found");
    }

    // Check if the user is already a member of the team
    const isMember = team.members.some(member => member.user.equals(userId));
    if (isMember) {
        throw new ApiError(400, "User is already a member of the team");
    }

    // Check if the user has already sent a join request
    const hasJoinRequest = team.joinRequests.some(request => request.user.equals(userId));
    if (hasJoinRequest) {
        throw new ApiError(400, "User has already sent a join request");
    }

    // Check if the user is the leader of the team
    if (team.leader.equals(userId)) {
        throw new ApiError(400, "Team leader cannot send a join request");
    }

    // Check if adding the user will exceed the team size limit
    const currentTeamSize = team.members.length + 1; // Include the leader
    if (currentTeamSize >= team.size) {
        throw new ApiError(400, "Team size limit reached");
    }

    const userWithPendingStatus = team.members.find(member => member.user.equals(userId) && member.status === 'pending');
    if (userWithPendingStatus) {
        userWithPendingStatus.status = 'accepted';
        await team.save();
        return res.status(200).json(new ApiResponse(200, null, "Join request accepted successfully"));
    }

    // Add the user to the joinRequests array
    team.joinRequests.push({ user: userId });
    await team.save();
    res.status(200).json(new ApiResponse(200, null, "Join request sent successfully"));
});

const verifyMember = asyncHandler(async (req, res) => {
    const { teamId, memberId } = req.body;

    // Check if the user making the request is the leader of the team
    const team = await Team.findById(teamId);
    if (!team) {
        throw new ApiError(404, "Team not found");
    }

    if (!team.leader.equals(req.user._id)) {
        throw new ApiError(403, "Only the team leader can verify members");
    }

    // Check if the member exists in the joinRequests array
    const joinRequestIndex = team.joinRequests.findIndex(request => request.user.equals(memberId));
    if (joinRequestIndex !== -1) {
        // Move the user from joinRequests to members array with 'accepted' status
        team.joinRequests.splice(joinRequestIndex, 1);
        team.members.push({ user: memberId, status: 'accepted' });
    } else {
        // Check if the member exists in the team
        const isMember = team.members.some(member => member.user.equals(memberId));
        if (!isMember) {
            throw new ApiError(404, "Member not found in the team");
        }
        // Update the member's status to 'accepted'
        const memberIndex = team.members.findIndex(member => member.user.equals(memberId));
        team.members[memberIndex].status = 'accepted';
    }

    await team.save();

    res.status(200).json(new ApiResponse(200, null, "Member verified successfully"));
});

const sendJoinRequest = asyncHandler(async (req, res) => {
    const { teamId, userId } = req.body;

    // Assume user ID is available in req.user._id (from authentication middleware)
    const leaderId = req.user._id;

    // Check if the team exists
    const team = await Team.findById(teamId);
    if (!team) {
        throw new ApiError(404, "Team not found");
    }

    // Check if the user making the request is the leader of the team
    if (!team.leader.equals(leaderId)) {
        throw new ApiError(403, "Only the team leader can send join requests");
    }

    // Check if the user exists
    const user = await User.findById(userId);
    if (!user) {
        throw new ApiError(404, "User not found");
    }

    const currentTeamSize = team.members.length + 1; // Include the leader
    if (currentTeamSize >= team.size) {
        throw new ApiError(400, "Team size limit reached");
    }
    // Check if the user has already sent a join request
    const existingJoinRequest = team.joinRequests.find(request => request.user.equals(userId));

    if (existingJoinRequest) {
        // Accept the join request and move the user from joinRequests to members with 'accepted' status
        team.joinRequests = team.joinRequests.filter(request => !request.user.equals(userId));
        team.members.push({ user: userId, status: 'accepted' });
        await team.save();

        return res.status(200).json(new ApiResponse(200, null, "Join request accepted successfully"));
    }
    const userWithOldRequest = team.members.find(member => member.user.equals(userId));
    if (userWithOldRequest) {
        throw new ApiError(403, "Request already sent");
    }
    // If the user has not sent a join request, add them to members with 'pending' status
    team.members.push({ user: userId, status: 'pending' });
    await team.save();

    res.status(200).json(new ApiResponse(200, null, "Join request sent successfully"));
});

const acceptJoinRequest = asyncHandler(async (req, res) => {
    const { teamId } = req.body;

    // Assume user ID is available in req.user._id (from authentication middleware)
    const userId = req.user._id;

    // Check if the team exists
    const team = await Team.findById(teamId);
    if (!team) {
        throw new ApiError(404, "Team not found");
    }

    // Check if the user is a member of the team with 'pending' status
    const userWithPendingStatus = team.members.find(member => member.user.equals(userId) && member.status === 'pending');
    if (!userWithPendingStatus) {
        throw new ApiError(403, "No pending join request for the user");
    }

    // Update the user's status to 'accepted'
    userWithPendingStatus.status = 'accepted';
    await team.save();

    res.status(200).json(new ApiResponse(200, null, "Join request accepted successfully"));
});


module.exports = {
    createTeam,
    joinTeam,
    verifyMember,
    sendJoinRequest,
    acceptJoinRequest
};
