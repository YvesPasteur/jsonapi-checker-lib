'use strict';

module.exports = function (_) {
  const MINIMUM_HTTP_STATUS = 100;
  const MAXIMUM_HTTP_STATUS = 600;

  const ruleValidator = require('./rules/validator')(_);

  return function(chai) {
    const expect = chai.expect;
    var Assertion = chai.Assertion;

    Assertion.addMethod('ErrorPropertyName', function () {
      const allowedProperties = ['id', 'links', 'status', 'code', 'title', 'detail', 'source', 'meta'];
      const obj = this._obj;

      ruleValidator(
        'errors.allowedMembers',
        () => expect(obj).to.be.oneOf(allowedProperties)
      );
    });

    Assertion.addMethod('ErrorId', function () {
      ruleValidator(
        'errors.allowedMembers',
        () => expect(this._obj).to.be.a('string')
      );
    });

    Assertion.addMethod('ErrorLinks', function () {
      ruleValidator(
        'errors.allowedMembers',
        () => {
          expect(this._obj).to.be.an('object');
          expect(this._obj).to.have.property('about');
        }
      );
    });

    Assertion.addMethod('ErrorStatus', function () {
      ruleValidator(
        'errors.allowedMembers',
        () => {
          expect(this._obj).to.be.a('string');
          expect(_.parseInt(this._obj)).to.be.a('number');
          expect(_.parseInt(this._obj)).to.be.within(MINIMUM_HTTP_STATUS, MAXIMUM_HTTP_STATUS);
        }
      );
    });

    Assertion.addMethod('ErrorCode', function () {
      ruleValidator(
        'errors.allowedMembers',
        () => expect(this._obj).to.be.a('string')
      );
    });

    Assertion.addMethod('ErrorTitle', function () {
      ruleValidator(
        'errors.allowedMembers',
        () => expect(this._obj).to.be.a('string')
      );
    });

    Assertion.addMethod('ErrorDetail', function () {
      ruleValidator(
        'errors.allowedMembers',
        () => expect(this._obj).to.be.a('string')
      );
    });

    Assertion.addMethod('ErrorSource', function () {
      ruleValidator(
        'errors.allowedMembers',
        () => {
          const allowedSourceAttributes = ['pointer', 'parameter'];
          expect(this._obj).to.be.an('object');
          expect(_.difference(_.keys(this._obj), allowedSourceAttributes)).to.be.empty;
        }
      );
    });

    Assertion.addMethod('ErrorMeta', function () {
      ruleValidator(
        'errors.allowedMembers',
        () => expect(this._obj).to.be.an('object')
      );
    });

    Assertion.addMethod('Error', function () {
      const obj = this._obj;

      expect(obj).to.be.an('object');

      ruleValidator.forEach(
        obj,
        (v, key) => {
          expect(key).to.be.ErrorPropertyName();
          const assertionName = 'Error' + _.upperFirst(key);
          expect(v).to.be[assertionName]();
        }
      );
    });

    Assertion.addMethod('Errors', function () {
      const obj = this._obj;

      ruleValidator(
        'errors.isArray',
        () => expect(obj).to.be.an('array')
      );

      ruleValidator.forEach(
        obj,
        (v) => expect(v).to.be.Error()
      );
    });
  };
};
