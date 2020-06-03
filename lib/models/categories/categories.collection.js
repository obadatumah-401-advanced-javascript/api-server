'use strict';
const Model = require('../models');
const categoriesSchema = require('./categories.schema');

class categoriesModel extends Model {
  constructor(schema) {
    super(schema);
  }
}



module.exports = new categoriesModel(categoriesSchema);