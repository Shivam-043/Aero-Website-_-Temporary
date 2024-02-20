const { Schema, model } = require("mongoose");
const Counter = require("./counter.models");

const eventSchema = new Schema({
    eventId: {
        type: String,
        unique: true
    },
    eventName: {
        type: String,
        required: true
    },
    briefDescription: {
        type: String,
        maxlength: 1024,
        default: ''
    },
    fullDescription: {
        type: String,
        default: '',
    },
    startTime: {
        type: Date,
        required: true
    },
    registrationFee: {
        type: Number,
        default: 0
    },
    isActive:{
        type : Boolean ,
        default : true
    },
    mainImageUrl: {
        type: String,
        default: ''
    },
    subImageUrls: [{
        type: String
    }],
}, { timestamps: true });

eventSchema.pre('save', async function (next) {
    if (this.isModified("eventName")) {
        const counter = await Counter.findOneAndUpdate(
            { _id: "eventIdCounter" },
            { $inc: { sequence_value: 1 } },
            { new: true, upsert: true }
        );
        this.eventId = counter.sequence_value;
    }
    next();
});

const Event = model('Event', eventSchema);
module.exports = Event;
