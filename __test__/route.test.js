'use strict';

const supergoose = require('@code-fellows/supergoose');
const { server } = require('../lib/server');
const mockRequest = supergoose(server);
describe('categories API', () => {

  it('can post() a new food ', () => {
    let obj = { name: 'test', display_name: 'TEST', description: 'Test object' };
    return mockRequest
      .post('/categories')
      .send(obj)
      .then(data => {
        expect(data.status).toBe(201);
      });
  });
});

