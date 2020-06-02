'use strict';
// const supergoose = require('@code-fellows/supergoose');

const category = require('../lib/models/categories/categories.collection');

let testObj = { name: 'test', display_name: 'TEST', description: 'Test object' };

describe('categories collection', () => {
  it('can create() a new category', () => {
    return category.create(testObj)
      .then(record => {
        Object.keys(testObj).forEach(key => {
          expect(record[key]).toEqual(testObj[key]);
        });
      });
  });
});

describe('categories collection', () => {
  it('can read() a category', () => {
    return category.read()
      .then(results => {
        Object.keys(testObj).forEach(key => {
          expect(results[0][key]).toEqual(testObj[key]);
        });
      });
  });
});



