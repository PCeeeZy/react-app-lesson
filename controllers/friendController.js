const db = require('../models');

module.exports = {
    findAll: function (req, res) {
        db.Friends.find()
            .then(function (friends) {
                res.json(friends);
            });
    },

    createFriend: function (req, res) {
        db.Friends.insertOne()
            .then(function (friend) {

            })
    }

}