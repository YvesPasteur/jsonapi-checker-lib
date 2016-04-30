'use strict';

module.exports = function (_, ruleValidator, expect) {
  const MINIMUM_HTTP_STATUS = 100;
  const MAXIMUM_HTTP_STATUS = 600;

  return {
    ErrorPropertyName: function (obj) {
      const allowedProperties = ['id', 'links', 'status', 'code', 'title', 'detail', 'source', 'meta'];

      ruleValidator(
        'errors.allowedMembers',
        () => expect(obj).to.be.oneOf(allowedProperties)
      );
    },
    ErrorId: function (obj) {
      ruleValidator(
        'errors.allowedMembers',
        () => expect(obj).to.be.a('string')
      );
    },
    ErrorLinks: function (obj) {
      ruleValidator(
        'errors.allowedMembers',
        () => {
          expect(obj).to.be.an('object');
          expect(obj).to.have.property('about');
        }
      );
    },
    ErrorStatus: function (obj) {
      ruleValidator(
        'errors.allowedMembers',
        () => {
          expect(obj).to.be.a('string');
          expect(_.parseInt(obj)).to.be.a('number');
          expect(_.parseInt(obj)).to.be.within(MINIMUM_HTTP_STATUS, MAXIMUM_HTTP_STATUS);
        }
      );
    },
    ErrorCode: function (obj) {
      ruleValidator(
        'errors.allowedMembers',
        () => expect(obj).to.be.a('string')
      );
    },
    ErrorTitle: function (obj) {
      ruleValidator(
        'errors.allowedMembers',
        () => expect(obj).to.be.a('string')
      );
    },
    ErrorDetail: function (obj) {
      ruleValidator(
        'errors.allowedMembers',
        () => expect(obj).to.be.a('string')
      );
    },
    ErrorSource: function (obj) {
      ruleValidator(
        'errors.allowedMembers',
        () => {
          const allowedSourceAttributes = ['pointer', 'parameter'];
          expect(obj).to.be.an('object');
          expect(_.difference(_.keys(obj), allowedSourceAttributes)).to.be.empty;// eslint-disable-line no-unused-expressions
        }
      );
    },
    ErrorMeta: function (obj) {
      ruleValidator(
        'errors.allowedMembers',
        () => expect(obj).to.be.an('object')
      );
    },
    Error: function (obj) {
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
    Errors: function (obj) {
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
