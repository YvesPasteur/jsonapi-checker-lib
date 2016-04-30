'use strict';

module.exports = function (_) {
  const ruleValidator = require('./rules/validator')(_);

  return function(chai) {
    const expect = chai.expect;
    var Assertion = chai.Assertion;

    Assertion.addMethod('Link', function () {
      const obj = this._obj;

      if (typeof obj === 'string') {
        return;
      }

      ruleValidator(
        'links.linkIsStringOrObject',
        () => {
          expect(obj).to.be.an('object');
          expect(obj).to.not.be.an('array');
        }
      );
    });

    Assertion.addMethod('Links', function () {
      const obj = this._obj;

      ruleValidator(
        'links.linksIsObject',
        () => expect(obj).to.be.an('object')
      );

      ruleValidator.forEach(
        obj,
        (value) => expect(value).to.be.Link()
      );
    });
  };
};
