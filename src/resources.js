'use strict';

module.exports = function (_, ruleValidator, expect) {

  return {
    ResourceObject: function (options) {
      const obj = this._obj;

      const testIdAndType = function () {
        const fromClient = (options && options.fromClient) || false;
        const method = (options && options.method ? options.method : null);
        const isClientCreation = (fromClient && method === 'POST');

        if (!isClientCreation) {
          ruleValidator(
            'resourceObject.hasIdAndType',
            () => expect(obj).to.have.property('id')
          );

          ruleValidator(
            'resourceObject.idAndTypeTypes',
            () => expect(obj.id).to.be.a('string'),
            'id'
          );
        }

        ruleValidator(
          'resourceObject.hasIdAndType',
          () => expect(obj).to.have.property('type')
        );

        ruleValidator(
          'resourceObject.adhereMemberNameContraints',
          () => {
            expect(obj).to.have.property('type');
            expect(obj.type).to.be.MemberName();
          },
          'type'
        );
      };
      const testUnallowedProperties = function () {
        const allowedProperties = ['id', 'type', 'attributes', 'relationships', 'links', 'meta'];
        const unallowedProperties = _.difference(_.keys(obj), allowedProperties);

        ruleValidator(
          'resourceObject.allowedMembers',
          () => expect(unallowedProperties).to.be.empty,
          unallowedProperties[0]
        );
      };
      const testAttributes = function () {
        if (!_.isUndefined(obj.attributes)) {
          ruleValidator(
            null,
            () => {
              expect(obj.attributes).to.be.Attributes();
              expect(obj.attributes).to.be.Fields(obj.relationships);
            },
            'attributes'
          );
        }
      };
      const testRelationships = function () {
        if (!_.isUndefined(obj.relationships)) {
          ruleValidator(
            null,
            () => {
              expect(obj.relationships).to.be.Relationships();
              expect(obj.relationships).to.be.Fields(obj.attributes);
            },
            'relationships'
          );
        }
      };
      const testLinks = function () {
        if (!_.isUndefined(obj.links)) {
          ruleValidator(
            null,
            () => expect(obj.links).to.be.Links(),
            'links'
          );
        }
      };

      testIdAndType();
      testUnallowedProperties();
      testAttributes();
      testRelationships();
      testLinks();
    },
    ResourceIdentifier: function () {
      const obj = this._obj;

      const allowedProperties = ['id', 'type', 'meta'];
      const unallowedProperties = _.difference(_.keys(obj), allowedProperties);

      ruleValidator(
        'resourceIdentifier.hasIdAndType',
        () => expect(obj).to.have.property('id')
      );
      ruleValidator(
        'resourceIdentifier.idAndTypeTypes',
        () => expect(obj.id).to.be.a('string'),
        'id'
      );

      ruleValidator(
        'resourceIdentifier.hasIdAndType',
        () => expect(obj).to.have.property('type')
      );

      ruleValidator(
        'resourceIdentifier.adhereMemberNameContraints',
        () => expect(obj.type).to.be.MemberName(),
        'type'
      );

      ruleValidator(
        'resourceIdentifier.allowMeta.description',
        () => expect(unallowedProperties).to.be.empty,
        unallowedProperties[0]
      );
    },
    ResourceCollection: function () {
      const obj = this._obj;

      ruleValidator(
        'resourceObject.collectionIsArray',
        () => expect(obj).to.be.an('array')
      );

      ruleValidator.forEach(
        obj,
        (value) => expect(value).to.be.ResourceObject()
      );
    }
  };
};
