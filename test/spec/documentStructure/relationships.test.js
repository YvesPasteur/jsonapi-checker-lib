'use strict';

describe('The relationships field of a resource object', function () {
  it('must be an object', function (done) {
    const body = {
      data: {
        type: '123',
        id: '123',
        relationships: 'foo'
      }
    };
    expect(() => validator(body).be.ValidDocument({})).to.throwError(
      function (err) {
        expect(err).be.TestError(
          'Primary data MUST be either:\n' +
          'a single resource object, a single resource identifier object, or null, for requests that target single resources\n' +
          'an array of resource objects, an array of resource identifier objects, or an empty array ([]), ' +
          'for requests that target resource collections\n' +
          'The value of the relationships key MUST be an object (a "relationships object").',
          'data.relationships',
          ['primaryData.isObjectOrArray', 'relationships.isObject']
        );
        return true;
      }
    );

    done();
  });

  it('must contain at least one of links, data or meta', function (done) {
    const body = {
      data: {
        type: '123',
        id: '123',
        relationships: {
          foo: {}
        }
      }
    };
    expect(() => validator(body).be.ValidDocument({})).to.throwError(
      function (err) {
        expect(err).be.TestError(
          'Primary data MUST be either:\n' +
          'a single resource object, a single resource identifier object, or null, for requests that target single resources\n' +
          'an array of resource objects, an array of resource identifier objects, or an empty array ([]), ' +
          'for requests that target resource collections\n' +
          'A "relationship object" MUST contain at least one of the following:\n' +
          'links: a links object containing at least one of the following:\n' +
          '     self: a link for the relationship itself (a "relationship link"). ' +
          'This link allows the client to directly manipulate the relationship. ' +
          'For example, removing an author through an article\'s relationship URL would disconnect the person from the article ' +
          'without deleting the people resource itself. When fetched successfully, this link returns the linkage for the related resources ' +
          'as its primary data. (See Fetching Relationships.)\n' +
          '     related: a related resource link\n' +
          'data: resource linkage\n' +
          'meta: a meta object that contains non-standard meta-information about the relationship.\n', +
            'data.relationships.foo',
          ['primaryData.isObjectOrArray', 'relationships.relationshipIsObject']
        );
        return true;
      }
    );

    done();
  });

  it('can not contain links which do not have self or related member', function (done) {
    const body = {
      data: {
        type: '123',
        id: '123',
        relationships: {
          foo: {
            links: {
              bar: 1
            }
          }
        }
      }
    };
    expect(() => validator(body).be.ValidDocument({})).to.throwError(
      function (err) {
        expect(err).be.TestError(
          'Primary data MUST be either:\n' +
          'a single resource object, a single resource identifier object, or null, for requests that target single resources\n' +
          'an array of resource objects, an array of resource identifier objects, or an empty array ([]), ' +
          'for requests that target resource collections\n' +
          'A "relationship object" MUST contain at least one of the following:\n' +
          'links: a links object containing at least one of the following:\n' +
          '     self: a link for the relationship itself (a "relationship link"). ' +
          'This link allows the client to directly manipulate the relationship. For example, removing an author through an article\'s relationship ' +
          'URL would disconnect the person from the article without deleting the people resource itself. When fetched successfully, ' +
          'this link returns the linkage for the related resources as its primary data. (See Fetching Relationships.)\n' +
          '     related: a related resource link\n' +
          'data: resource linkage\n' +
          'meta: a meta object that contains non-standard meta-information about the relationship.\n',
          'data.relationships.foo.links',
          ['primaryData.isObjectOrArray', 'relationships.relationshipIsObject']
        );
        return true;
      }
    );

    done();
  });

  it('can contain links which have a string member', function (done) {
    const body = {
      data: {
        type: '123',
        id: '123',
        relationships: {
          foo: {
            links: {
              self: 'http://www.example.com'
            }
          }
        }
      }
    };

    validator(body).be.ValidDocument({});
    done();
  });

  it('can contain links which have an object member', function (done) {
    const body = {
      data: {
        type: '123',
        id: '123',
        relationships: {
          foo: {
            links: {
              related: {
                href: 'http://www.example.com'
              }
            }
          }
        }
      }
    };

    validator(body).be.ValidDocument({});
    done();
  });

  it('can not contain links which are not string or object', function (done) {
    const body = {
      data: {
        type: '123',
        id: '123',
        relationships: {
          foo: {
            links: {
              related: []
            }
          }
        }
      }
    };

    expect(() => validator(body).be.ValidDocument({})).to.throwError(
      function (err) {
        expect(err).be.TestError(
          'Primary data MUST be either:\n' +
          'a single resource object, a single resource identifier object, or null, for requests that target single resources\n' +
          'an array of resource objects, an array of resource identifier objects, or an empty array ([]), ' +
          'for requests that target resource collections\n' +
          'A link MUST be represented as either:\n' +
          'a string containing the link\'s URL.\n' +
          'an object ("link object") which can contain the following members:\n' +
          'href: a string containing the link\'s URL.\n' +
          'meta: a meta object containing non-standard meta-information about the link.',
          'data.relationships.foo.links.related',
          ['primaryData.isObjectOrArray', 'links.linkIsStringOrObject']
        );
        return true;
      }
    );
    done();
  });

  it('can contain data which is a null linkage', function (done) {
    const body = {
      data: {
        type: '123',
        id: '123',
        relationships: {
          foo: {
            data: null
          }
        }
      }
    };

    validator(body).be.ValidDocument({});
    done();
  });

  it('can contain data which is an empty array linkage', function (done) {
    const body = {
      data: {
        type: '123',
        id: '123',
        relationships: {
          foo: {
            data: []
          }
        }
      }
    };

    validator(body).be.ValidDocument({});
    done();
  });

  it('can contain data which is a single resource identifier object', function (done) {
    const body = {
      data: {
        type: '123',
        id: '123',
        relationships: {
          foo: {
            data: {
              type: 'foo',
              id: 'bar'
            }
          }
        }
      }
    };

    validator(body).be.ValidDocument({});
    done();
  });

  it('can contain data which is an array of resource identifier objects', function (done) {
    const body = {
      data: {
        type: '123',
        id: '123',
        relationships: {
          foo: {
            data: [
              {type: 'foo', id: 'bar'}
            ]
          }
        }
      }
    };

    validator(body).to.be.ValidDocument({});
    done();
  });

  it('can not contain data which is not null, empty array, single resource identifier object ' +
  'or array of resource identifier objects', function (done) {
    const body = {
      data: {
        type: '123',
        id: '123',
        relationships: {
          foo: {
            data: {
              foo: 'bar'
            }
          }
        }
      }
    };

    expect(() => validator(body).be.ValidDocument({})).to.throwError(
      function (err) {
        expect(err).be.TestError(
          'Primary data MUST be either:\n' +
          'a single resource object, a single resource identifier object, or null, for requests that target single resources\n' +
          'an array of resource objects, an array of resource identifier objects, or an empty array ([]), ' +
          'for requests that target resource collections\n' +
          'Resource linkage MUST be represented as one of the following:\n' +
          'null for empty to-one relationships.\n' +
          'an empty array ([]) for empty to-many relationships.\n' +
          'a single resource identifier object for non-empty to-one relationships.\n' +
          'an array of resource identifier objects for non-empty to-many relationships.\n' +
          'A "resource identifier object" MUST contain type and id members.',
          'data.relationships.foo.data',
          ['primaryData.isObjectOrArray', 'resourceLinkage.representation', 'resourceIdentifier.hasIdAndType']
        );
        return true;
      }
    );
    done();
  });
});
