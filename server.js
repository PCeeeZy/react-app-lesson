// dependencies
const express = require('express');
const app = express();

const mongoose = require('mongoose');
const routes = require('./routes');

// we use env port or 3001 if local
const PORT = process.env.PORT || 3001;

// middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//use build file if we are in production environment
if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));
};

// app routes
app.use(routes);

console.log(`hey this is the server.js`);

// mongoDB connection
//*******UPDATE COLLECTION NAME
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/reactlessonfriends');

// Listener
app.listen(PORT, () => {
    console.log(`API Server now listening on PORT: ${PORT}!  Welcome and play nice `)
});