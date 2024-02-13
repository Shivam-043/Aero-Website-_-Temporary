const mongoose = require("mongoose");
const Counter = require("./counter.models");

const teamSchema = new mongoose.Schema({
    teamId: {
        type: String,
        unique: true,
    },
    name: {
        type: String,
        unique: [true, "Team Name already used"],
        required: true,
        trim: true
    },
    about: {
        type: String,
        trim: true,
    },
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    size: {
        min: 1,
        type: Number,
        default: 1, //default to single member team
        required: true
    },
    members: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }], //Array of user ids that belong to this team
    leader: {
        type: mongoose.Schema.Types.ObjectId, ref: 'User'
    },
    event: {
        type: mongoose.Schema.Types.ObjectId, ref: 'Event',
        required: false
    },
}, { timestamps: true });

teamSchema.pre('save', async function (next) {
    if (this.isModified("name")) {
        const counter = await Counter.findOneAndUpdate(
            { _id: "teamIdCounter" },
            { $inc: { sequence_value: 1 } },
            { new: true, upsert: true }
        );
        this.teamId = counter.sequence_value;
    }
    next();
});

const Team = mongoose.model("Team", teamSchema);
module.exports = { Team };