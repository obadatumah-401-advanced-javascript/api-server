'use strict';

module.exports = (req, res, next) => {
    res.status(500);
    res.json({err: err});
}