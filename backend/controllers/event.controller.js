const { default: mongoose } = require("mongoose");
const { Event } = require("../schema");
const { ApiError } = require("../utils/ApiError");
const { ApiResponse } = require("../utils/ApiResponse");
const { asyncHandler } = require("../utils/asyncHandler");


const createEvent = asyncHandler(async (req, res) => {
    const { eventName, briefDescription, fullDescription, startTime, registrationFee, mainImageUrl, subImageUrls } = req.body;

    // Validate required fields
    if (!eventName || !startTime) {
        throw new ApiError(400, "Event name and start time are required");
    }

    // Create a new event
    const newEvent = new Event({
        eventName,
        briefDescription,
        fullDescription,
        startTime,
        registrationFee: registrationFee || 0,
        mainImageUrl: mainImageUrl || '',
        subImageUrls: subImageUrls || [],
    });

    // Save the event to the database
    const savedEvent = await newEvent.save();

    res.status(201).json(new ApiResponse(201, savedEvent, "Event created successfully"));
});

const updateEvent = asyncHandler(async (req, res) => {
    const { eventId } = req.body;
    const { registrationFee, registrationDate, briefDescription, fullDescription } = req.body;

    // Validate if eventId is provided
    if (!eventId) {
        throw new ApiError(400, "Event ID is required for updating");
    }

    // Find the event by eventId
    const eventToUpdate = await Event.findById(eventId);

    // Check if the event exists
    if (!eventToUpdate) {
        throw new ApiError(404, "Event not found");
    }

    // Update the event fields if provided and valid
    if (registrationFee !== undefined) {
        // Check if registrationFee is a valid number
        if (typeof registrationFee !== 'number' || isNaN(registrationFee) || registrationFee < 0) {
            throw new ApiError(400, "Invalid registration fee");
        }
        eventToUpdate.registrationFee = registrationFee;
    }

    if (registrationDate) {
        // Validate registrationDate if necessary
        eventToUpdate.registrationDate = registrationDate;
    }

    if (briefDescription) {
        eventToUpdate.briefDescription = briefDescription;
    }

    if (fullDescription) {
        eventToUpdate.fullDescription = fullDescription;
    }

    // Save the updated event to the database
    const updatedEvent = await eventToUpdate.save();

    res.status(200).json(new ApiResponse(200, updatedEvent, "Event updated successfully"));
});

const readOneEvent = asyncHandler(async (req, res) => {
    const { id } = req.body;

    // Check if the provided id is a valid ObjectId (MongoDB _id)
    if (!id) {
        throw new ApiError(400, "Event ID is required");
    }

    let event;
    if (mongoose.Types.ObjectId.isValid(id)) {
        // If valid ObjectId, search by _id
        event = await Event.findById(id);
    } else {
        // If not a valid ObjectId, search by eventName or eventId
        event = await Event.findOne({
            $or: [
                { eventName: id },
                { eventId: id }
            ]
        });
    }

    if (!event) {
        throw new ApiError(404, "Event not found");
    }

    res.status(200).json(new ApiResponse(200, event, "Event retrieved successfully"));
});

module.exports = readOneEvent;


const readAllEvents = asyncHandler(async (req, res) => {
    // Fetch all events from the database
    const events = await Event.find();

    res.status(200).json(new ApiResponse(200, events, "All events retrieved successfully"));
});


module.exports = { createEvent, updateEvent, readAllEvents, readOneEvent };
