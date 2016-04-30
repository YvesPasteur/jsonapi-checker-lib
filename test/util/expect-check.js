'use strict';

module.exports = function(_) {
  return function(chai) {
    const expect = chai.expect;
    var Assertion = chai.Assertion;

    Assertion.addMethod('throwError', function (validator) {
      // jscs:disable disallowDanglingUnderscores
      const obj = this._obj;// eslint-disable-line no-underscore-dangle
      // jscs:enable disallowDanglingUnderscores
      try {
        obj();
        throw new Error('An error should be thrown');
      } catch (error) {
        validator(error);
      }
    });

    Assertion.addMethod('TestError', function (message, path, rules) {
      // jscs:disable disallowDanglingUnderscores
      const obj = this._obj;// eslint-disable-line no-underscore-dangle
      // jscs:enable disallowDanglingUnderscores

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
