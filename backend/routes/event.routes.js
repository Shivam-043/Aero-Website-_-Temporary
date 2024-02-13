const { Router } = require("express");
const { createEvent, updateEvent, readAllEvents, readOneEvent } = require("../controllers/event.controller");


const router =Router();

router.route("/create").post(createEvent);
router.route("/update").post(updateEvent);
router.route("/readAll").post(readAllEvents);
router.route("/readOne").post(readOneEvent);

module.exports=router; 