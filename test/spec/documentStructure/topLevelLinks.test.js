'use strict';

describe('The top-level links object', function () {
  it('can contain the property : self', function (done) {
    const body = {
      data: {
        type: '123',
        id: '123'
      },
      links: {
        self: 'http://www.example.com/foo'
      }
    };

    validator(body).be.ValidDocument({});

    done();
  });

  it('can contain the property : related', function (done) {
    const body = {
      data: {
        type: '123',
        id: '123'
      },
      links: {
        related: 'http://www.example.com/foo'
      }
    };

    validator(body).be.ValidDocument({});

    done();
  });

  it('can contain the pagination properties', function (done) {
    const body = {
      data: {
        type: '123',
        id: '123'
      },
      links: {
        first: 'http://www.example.com/foo',
        last: 'http://www.example.com/foo',
        prev: 'http://www.example.com/foo',
        next: 'http://www.example.com/foo'
      }
    };

    validator(body).be.ValidDocument({});

    done();
  });
});
