'use strict';

const express = require('express');
const router = express.Router();

const category = require('../lib/models/categories/categories.collection');

router.get('/categories/', (req, res, next) => {
    category.read()
        .then(data => {
            let count = data.length;
            res.status(200).json({ count, data });
        })
        .catch(next);
});

router.get('/categories/:id', (req, res, next) => {
    const { id } = req.params;
    category.read(id)
        .then(data => {
            let count = data.length;
            res.status(200).json({ count, data });
        })
        .catch(next);
});

router.post('/categories/', (req, res, next) => {
    category.create(req.body)
        .then(data => {
            const count = data.length;
            res.status(201).json({ count, data });
        }).catch(next);
});

router.put('/categories/:id', (req, res, next) => {
    const { id } = req.params;
    category.update(id, req.body)
        .then(data => {
            const count = data.length;
            res.status(200).json({ count, data });
        }).catch(next);
});

router.delete('/categories/:id', (req, res, next) => {
    const { id } = req.params;
    category.delete(id)
        .then(data => {
            const count = data.length;
            res.status(200).json({ count, data });
        }).catch(next);
});

module.exports = router;