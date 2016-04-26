'use strict';

describe('A compound document', function () {
  it('can not have a non-array included member', function (done) {
    const body = {
      data: {
        type: '123',
        id: '123'
      },
      included: ''
    };

    expect(() => validator(body).be.ValidDocument({})).to.throwError(
      function (err) {

        expect(err).be.TestError(
          'In a compound document, all included resources MUST be represented as an array of resource objects in a top-level included member.',
          'included',
          ['includedResources.isArray']
        );
        return true;
      }
    );

    done();
  });

  it('can have an empty array in included member', function (done) {
    const body = {
      data: {
        type: '123',
        id: '123'
      },
      included: []
    };

    validator(body).be.ValidDocument({});

    done();
  });

  it('must have resource objects in the included member', function (done) {
    const body = {
      data: {
        type: '123',
        id: '123'
      },
      included: [{foo: 'bar'}]
    };

    expect(() => validator(body).be.ValidDocument({})).to.throwError(
      function (err) {

        expect(err).be.TestError(
          'A resource object MUST contain at least the following top-level members:\n' +
          'id\n' +
          'type\n' +
          'Exception: The id member is not required when the resource object originates ' +
          'at the client and represents a new resource to be created on the server.',
          'included[0]',
          ['resourceObject.hasIdAndType']
        );
        return true;
      }
    );

    done();
  });

  it('can not have non-full linkage between resources', function (done) {
    const body = {
      data: {
        type: '123',
        id: '123'
      },
      included: [{type: 'foo', id: 'bar'}]
    };

    expect(() => validator(body).be.ValidDocument({})).to.throwError(
      function (err) {

        expect(err).be.TestError(
          'Compound documents require "full linkage", meaning that every included resource ' +
          'MUST be identified by at least one resource identifier object in the same document. These resource identifier objects ' +
          'could either be primary data or represent resource linkage contained within primary or included resources.\n' +
          'The only exception to the full linkage requirement is when relationship fields that would otherwise contain linkage data ' +
          'are excluded via sparse fieldsets.',
          'included',
          ['includedResources.fullLinkage']
        );
        return true;
      }
    );

    done();
  });

  it('can have only full linkage between resources (single primary data)', function (done) {
    const body = {
      data: {
        type: '123',
        id: '123',
        relationships: {
          something: {
            data: {
              type: 'foo',
              id: 'bar'
            }
          }
        }
      },
      included: [
        {type: 'foo', id: 'bar'}
      ]
    };

    validator(body).be.ValidDocument({});

    done();
  });

  it('can have only full linkage between resources (collection primary data)', function (done) {
    const body = {
      data: [
        {
          type: '123',
          id: '123',
          relationships: {
            something: {
              data: {
                type: 'foo',
                id: 'bar'
              }
            }
          }
        },
        {
          type: '456',
          id: '456'
        }
      ],
      included: [
        {type: 'foo', id: 'bar'}
      ]
    };

    validator(body).be.ValidDocument({});

    done();
  });

  it('can not include more than one resource object for each type and id pair', function (done) {
    const body = {
      data: {
        type: '123',
        id: '123',
        relationships: {
          something: {
            data: {
              type: 'foo',
              id: 'bar'
            }
          }
        }
      },
      included: [
        {type: 'foo', id: 'bar'},
        {type: 'foo', id: 'bar'}
      ]
    };

    expect(() => validator(body).be.ValidDocument({})).to.throwError(
      function (err) {

        expect(err).be.TestError(
          'A compound document MUST NOT include more than one resource object for each type and id pair.',
          'included',
          ['includedResources.noDuplication']
        );
        return true;
      }
    );

    done();
  });
});
