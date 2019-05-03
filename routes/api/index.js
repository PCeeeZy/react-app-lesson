//DEPENDENCIES
const router = require("express").Router();

//NECESSARY FILES
const friendRoutes = require('./friends');

//Friend Routes
// this is /api/friends
router.use('/friends', friendRoutes);

module.exports = router;