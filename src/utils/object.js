'use strict';

module.exports = function (_) {
  /**
   * Get an array with all the keys used in the object and its children (recursive search)
   *
   * @param obj
   * @returns {Array}
   */
  var getAllKeys = function (obj) {
    var ownKeys;
    var childrenKeys;

    if (typeof obj !== 'object') {
      return [];
    }

    if (Array.isArray(obj)) {
      return _.uniq(_.flatten(_.map(obj, getAllKeys)));
    }

    ownKeys = _.keys(obj);
    childrenKeys = _.flatten(
      _.map(obj, function (v) {
        return getAllKeys(v);
      })
    );

    return _.union(ownKeys, childrenKeys);
  };

  return {
    getAllKeys: getAllKeys
  };
};
