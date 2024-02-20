const { Router } = require("express");
const { createTeam, joinTeam, verifyMember, sendJoinRequest, acceptJoinRequest, readOne, readAll } = require("../controllers/team.controller");
const { verifyJWT } = require("../middlewares/auth.middleware");
const { verifyAdmin } = require("../middlewares/admin.middleware");

const router =Router();

// secured route 
router.route("/create").post(verifyJWT,createTeam);
router.route("/join").post(verifyJWT,joinTeam);
router.route("/verifyMember").post(verifyJWT,verifyMember);
router.route("/sendJoinRequest").post(verifyJWT,sendJoinRequest);
router.route("/acceptJoinRequest").post(verifyJWT,acceptJoinRequest);
router.route("/readOne").post(verifyJWT,readOne);
router.route("/readAll").post(verifyJWT,verifyAdmin, readAll);

module.exports=router;