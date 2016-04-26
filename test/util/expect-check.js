'use strict';

module.exports = function(_) {
  return function(chai) {
    const expect = chai.expect;
    var Assertion = chai.Assertion;

    Assertion.addMethod('throwError', function (validator) {
      const obj = this._obj;

      try {
        obj();
        throw new Error('An error should be thrown');
      } catch (error) {
        validator(error);
      }
    });

    Assertion.addMethod('TestError', function (message, path, rules) {
      const obj = this._obj;

      expect(obj).to.have.property('message')
        .and.to.be.equal(message);

      if (path) {
        expect(obj).to.have.property('path')
          .and.to.be.deep.equal(path);
      }

      if (rules) {
        expect(obj).to.have.property('rules');
        const objRules = obj.rules.map((value) => value.id);
        _.forEach(rules, (value) => expect(objRules).to.include(value));
      }
    });
  };
};
