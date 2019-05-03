//dependencies
const mongoose = require('mongoose');
const db = require('../models');

//mongoose connection--production or local
mongoose.connect(
    process.env.MONGODB_URI ||
    'mongodb://localhost/reactlessonfriends'
);

const friendSeed = [
  {
    name: 'Jordyn',
    active: true,
  },
  {
    name: 'Mikenzi',
    active: true,
  },
  {
    name: 'Jake',
    active: false
  }
];

  db.Friend
    .remove({})
    .then(() => db.Friend.collection.insertMany(friendSeed))
    .then(data => {
        console.log(`${data.result.n} records inserted!`);
        process.exit(0);
    })
    .catch(err => {
        console.log(err);
        process.exit(1);
    });