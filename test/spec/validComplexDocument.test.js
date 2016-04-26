'use strict';

describe('The complex document example', function () {
  it('should pass the validation', function (done) {
    const body = require('./example.json');
    validator(body).be.ValidDocument({});

    done();
  });
});
