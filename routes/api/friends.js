const router = require("express").Router();

const friendController = require("../../controllers/friendController");
const db = require("../../models");

//Route to see all available projects
//this is api/projects
router.route('/')
    .get(friendController.findAll)
    .post(friendController.createFriend)
    .delete(friendController.removeFriend)

module.exports = router;