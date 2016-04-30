'use strict';

module.exports = function (_, ruleValidator, expect) {
  const MINIMUM_HTTP_STATUS = 100;
  const MAXIMUM_HTTP_STATUS = 600;

  return {
    ErrorPropertyName: function () {
      const allowedProperties = ['id', 'links', 'status', 'code', 'title', 'detail', 'source', 'meta'];
      const obj = this._obj;

      ruleValidator(
        'errors.allowedMembers',
        () => expect(obj).to.be.oneOf(allowedProperties)
      );
    },
    ErrorId: function () {
      ruleValidator(
        'errors.allowedMembers',
        () => expect(this._obj).to.be.a('string')
      );
    },
    ErrorLinks: function () {
      ruleValidator(
        'errors.allowedMembers',
        () => {
          expect(this._obj).to.be.an('object');
          expect(this._obj).to.have.property('about');
        }
      );
    },
    ErrorStatus: function () {
      ruleValidator(
        'errors.allowedMembers',
        () => {
          expect(this._obj).to.be.a('string');
          expect(_.parseInt(this._obj)).to.be.a('number');
          expect(_.parseInt(this._obj)).to.be.within(MINIMUM_HTTP_STATUS, MAXIMUM_HTTP_STATUS);
        }
      );
    },
    ErrorCode: function () {
      ruleValidator(
        'errors.allowedMembers',
        () => expect(this._obj).to.be.a('string')
      );
    },
    ErrorTitle: function () {
      ruleValidator(
        'errors.allowedMembers',
        () => expect(this._obj).to.be.a('string')
      );
    },
    ErrorDetail: function () {
      ruleValidator(
        'errors.allowedMembers',
        () => expect(this._obj).to.be.a('string')
      );
    },
    ErrorSource: function () {
      ruleValidator(
        'errors.allowedMembers',
        () => {
          const allowedSourceAttributes = ['pointer', 'parameter'];
          expect(this._obj).to.be.an('object');
          expect(_.difference(_.keys(this._obj), allowedSourceAttributes)).to.be.empty;// eslint-disable-line no-unused-expressions
        }
      );
    },
    ErrorMeta: function () {
      ruleValidator(
        'errors.allowedMembers',
        () => expect(this._obj).to.be.an('object')
      );
    },
    Error: function () {
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
    },
    Errors: function () {
      const obj = this._obj;

      ruleValidator(
        'errors.isArray',
        () => expect(obj).to.be.an('array')
      );

      ruleValidator.forEach(
        obj,
        (v) => expect(v).to.be.Error()
      );
    }
  };
};
