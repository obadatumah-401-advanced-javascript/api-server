'use strict';

const express = require('express');
const router = express.Router();

const category = require('../lib/models/categories/categories.collection');
const product = require('../lib/models/products/products.collection');

function getModel(req, res, next) {
  let model = req.params.model; 
  switch(model) {
  case 'categories':
    req.model = category;
    next();
    return;
  case 'products':
    req.model = product;
    next();
    return;
  default:
    next('Invalid Model');
    return;
  }
}

router.param('model', getModel);

router.get('/:model', handleGetAll);
router.get('/:model/:id', handleGetOne);
router.post('/:model', handlePost);
router.put('/:model/:id', handlePut);
router.delete('/:model/:id', handleDelete);

function handleGetAll(req, res, next) {
  req.model.read()
    .then(result => {
      let count = result.length;
      res.json({count, result}); 
    }).catch(next);
}

function handleGetOne(req, res, next){
  let id = req.params.id;
  req.model.read(id)
    .then(result => res.json(result))
    .catch(next);  
}

function handlePost(req,res,next){
  req.model.create(req.body)
    .then(result => res.json(result))
    .catch(next);
}

function handlePut(req,res,next){
  let id = req.params.id;
  req.model.update(id,req.body)
    .then(result => res.json(result))
    .catch(next);
}

function handleDelete(req,res,next){
  let id = req.params.id;
  req.model.delete(id)
    .then(result => res.json(result))
    .catch(next);
}
module.exports = router;