'use strict';

const express = require('express');
const router = express.Router();

const product = require('../lib/models/products/products.collection');

router.get('/products/', (req, res, next) => {
  product.read()
    .then(data => {
      let count = data.length;
      res.status(200).json({ count, data });
    })
    .catch(next);
});

router.get('/products/:id', (req, res, next) => {
  const { id } = req.params;
  product.read(id)
    .then(data => {
      let count = data.length;
      res.status(200).json({ count, data });
    })
    .catch(next);
});

router.post('/products/', (req, res, next) => {
  product.create(req.body)
    .then(data => {
      const count = data.length;
      res.status(201).json({ count, data });
    }).catch(next);
});

router.put('/products/:id', (req, res, next) => {
  const { id } = req.params;
  product.update(id, req.body)
    .then(data => {
      const count = data.length;
      res.status(200).json({ count, data });
    }).catch(next);
});

router.delete('/products/:id', (req, res, next) => {
  const { id } = req.params;
  product.delete(id)
    .then(data => {
      const count = data.length;
      res.status(200).json({ count, data });
    }).catch(next);
});

module.exports = router;
