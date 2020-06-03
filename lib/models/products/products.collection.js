'use strict';
const Model = require('../models');
const productsSchema = require('./products.schema');

class productsModel extends Model {
  constructor(schema) {
    super(schema);
  }
}



module.exports = new productsModel(productsSchema);