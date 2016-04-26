'use strict';

module.exports = function (_) {
  /**
   *
   * @param obj
   * @returns {null|object}
   */
  var getIdentifier = function (obj) {
    if (obj && !_.isUndefined(obj.type) && !_.isUndefined(obj.id)) {
      return {type: obj.type, id: obj.id};
    }

    return null;
  };

  /**
   * Indicate if the element pointed by the path is under a relationship element
   *
   * @param path
   * @returns {boolean}
   */
  var isInRelationship = function (path) {
    return path.length > 3 && path[path.length - 3] === 'relationships';
  };

  /**
   * Search and return all the resource identifiers which are referenced in the document
   *
   * @param obj
   * @param path
   * @returns {Array}
   */
  var getAllReferencesResourceIdentifiers = function (obj, path) {
    if (typeof obj !== 'object') {
      return [];
    }

    if (Array.isArray(obj)) {
      return _.uniq(
        _.flatten(
          _.map(
            obj,
            function (v) {
              return getAllReferencesResourceIdentifiers(v, path);
            }
          )
        )
      );
    }

    return _.filter(
      _.union(
        (isInRelationship(path) ? [getIdentifier(obj)] : []),
        _.flatten(_.map(obj, function (v, key) {
          var localPath = path.slice(0);
          localPath.push(key);
          return getAllReferencesResourceIdentifiers(v, localPath);
        }))
      ),
      function (n) {
        return (n !== null);
      }
    );
  };

  /**
   * Search and return all the resource identifiers defined in the document (directly as resource identifier object or
   * in a resource object)
   *
   * @param obj
   * @param path
   * @returns {Array}
   */
  var getAllDefinedResourceIdentifiers = function (obj, path) {
    if (typeof obj !== 'object') {
      return [];
    }

    if (Array.isArray(obj)) {
      return _.uniq(
        _.flatten(
          _.map(
            obj,
            function (v) {
              return getAllDefinedResourceIdentifiers(v, path);
            }
          )
        )
      );
    }

    return _.filter(
      _.union(
        (!isInRelationship(path) ? [getIdentifier(obj)] : []),
        _.flatten(_.map(obj, function (v, key) {
          var localPath = path.slice(0);
          localPath.push(key);
          return getAllDefinedResourceIdentifiers(v, localPath);
        }))
      ),
      function (n) {
        return (n !== null);
      }
    );
  };

  return {
    getAllReferencesResourceIdentifiers: getAllReferencesResourceIdentifiers,
    getAllDefinedResourceIdentifiers: getAllDefinedResourceIdentifiers
  };
};
