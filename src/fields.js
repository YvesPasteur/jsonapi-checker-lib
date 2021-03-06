'use strict';

module.exports = function (_, ruleValidator, expect) {
  return {
    FieldName: function (obj) {
      ruleValidator(
        'fields.commonNamespace',
        () => expect(obj).to.not.be.oneOf(['type', 'id'])
      );
    },
    MemberName: function (value) {
      ruleValidator(
        'fields.restrictMemberName',
        () => {
          expect(value).to.be.a('string');
          expect(value).to.not.be.empty;// eslint-disable-line no-unused-expressions
          expect(value).to.match(/^[a-zA-Z0-9-_ ]+$/);
          expect(value).to.not.match(/^[-_ ]/);
          expect(value).to.not.match(/[-_ ]$/);
        }
      );
    },
    Fields: function (value, otherFields) {
      const ownFieldKeys = _.keys(value);
      const otherFieldKeys = _.keys(otherFields);
      const intersectionFieldKeys = _.intersection(ownFieldKeys, otherFieldKeys);

      ruleValidator.forEach(
        value,
        (v, key) => expect(key).be.FieldName()
      );

      ruleValidator(
        'fields.commonNamespace',
        () => expect(intersectionFieldKeys).to.be.empty,
        intersectionFieldKeys[0]
      );
    }
  };
};
