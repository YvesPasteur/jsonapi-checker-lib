'use strict';

var rules = require('../../index').rules;

describe('The rules ', function () {
  it('should returns a list of rules', function (done) {
    var flatRules = rules.flat();
    expect(flatRules).to.be.an('array').and.have.length(167);

    done();
  });
});
