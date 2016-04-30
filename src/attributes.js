'use strict';

module.exports = function (_, ruleValidator, expect) {

  return {
    Attributes: function () {
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
    }
  };
};
