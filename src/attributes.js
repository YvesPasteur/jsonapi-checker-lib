'use strict';

module.exports = function (_) {
  const ruleValidator = require('./rules/validator')(_);

  return function(chai) {
    const expect = chai.expect;
    var Assertion = chai.Assertion;

    Assertion.addMethod('Attributes', function () {
      const objectUtil = require('./utils/object.js')(_);
      const obj = this._obj;
      const allKeys = objectUtil.getAllKeys(obj);

      ruleValidator(
        'attributes.isObject',
        () => expect(obj).to.be.an('object')
      );

      ruleValidator(
        'attributes.restrictMemberName',
        () => {
          expect(allKeys).to.not.include('relationships');
          expect(allKeys).to.not.include('links');
        }
      );
    });
  };
};
