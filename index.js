'use strict';
const mongoose = require('mongoose');
const server = require('./lib/server');

const MONGODB_URI = process.env.MONGODB_URI;

console.log('hi')
server.start(3030);

const mongooseOptions = {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false
};

mongoose.connect(MONGODB_URI, mongooseOptions);