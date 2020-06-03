'use strict';

const api = require('../routes/api');


// middlewares files
const time = require('../middleware/timestamp');
const logger = require('../middleware/logger');
const notFound = require('../middleware/404');
const serverError = require('../middleware/500');
// packages required
require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');
const morgan = require('morgan');

// use
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());


app.use(time);
app.use(logger);

app.use('/',api);


app.use('*', notFound);
app.use(serverError);


module.exports = {
  server: app,
  start: (port) => {
    const PORT = port || process.env.PORT || 3000;
    app.listen(PORT, () => { console.log(`Listening on port ${PORT}`); });
  },
};