'use strict';

module.exports = function (_, ruleValidator, expect) {
  return {
    Link: function () {
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
    },
    Links: function () {
      const obj = this._obj;

      ruleValidator(
        'links.linksIsObject',
        () => expect(obj).to.be.an('object')
      );

      ruleValidator.forEach(
        obj,
        (value) => expect(value).to.be.Link()
      );
    }
  };
};
