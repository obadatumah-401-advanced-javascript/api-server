'use strict';

const {server} = require('../lib/server');
const supertest = require('supertest');
const mockRequest = supertest(server);
const loggerMiddleWare = require('../middleware/logger');

describe('logger middleware', () => {

  let consoleSpy;
  let req = {};
  let res = {};
  let next = jest.fn(); 

  beforeEach(()=> {
    consoleSpy = jest.spyOn(console, 'log').mockImplementation();
  });

  afterEach(()=> {
    consoleSpy.mockRestore();
  });

  it ('log some output .. ', ()=> {
    loggerMiddleWare(req, res, next);
    expect(consoleSpy).toHaveBeenCalled();
  });

  it('properly moved to next .. ', ()=> {
    loggerMiddleWare(req, res, next);
    expect(next).toHaveBeenCalled();
  });


});

describe('web server', () => {
  it('should respond with 500', ()=> {
        
    return mockRequest.get('/bad')
      .then(results=> {
        expect(results.status).toBe(500);
      }).catch(console.error);
  });
});

describe('invalid route', () => {
  it('should respond 404 of an invalid route',() => {

    return mockRequest
      .get('/invalidroute')
      .then(results => {
        expect(results.status).toBe(404);
      }).catch(console.log);
  });
});



