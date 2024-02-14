const { Router } = require("express");
const { createTeam, joinTeam, verifyMember, sendJoinRequest, acceptJoinRequest } = require("../controllers/team.controller");
const { verifyJWT } = require("../middlewares/auth.middleware");

const router =Router();

// secured route 
router.route("/create").post(verifyJWT,createTeam);
router.route("/join").post(verifyJWT,joinTeam);
router.route("/verifyMember").post(verifyJWT,verifyMember);
router.route("/sendJoinRequest").post(verifyJWT,sendJoinRequest);
router.route("/acceptJoinRequest").post(verifyJWT,acceptJoinRequest);

module.exports=router;