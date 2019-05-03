const db = require('../models');

module.exports = {
    findAll: function (req, res) {
        db.Friend.find()
            .then(function (friends) {
                res.json(friends);
            });
    },

    createFriend: function (req, res) {
        db.Friend.insertOne()
            .then(function (friend) {
                res.json(friends);
            })
    },

    removeFriend: function (req, res) {
        db.Friend.remove({})
            .then(function (friends) {
                res.json(friends)
            })
    }

}