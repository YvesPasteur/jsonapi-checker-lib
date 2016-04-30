'use strict';

describe('The query parameters', function () {
  it('can be valid', function (done) {
    const url = '/foo?bar=someValue';

    validator(url).to.be.a.ValidUrl();
    done();
  });

  it('must adhere to the same constraints as member names', function (done) {
    const url = '/foo?bar!=someValue';

    expect(() => validator(url).to.be.a.ValidUrl()).to.throwError(
      function (err) {

        expect(err).be.TestError(
          'Implementation specific query parameters MUST adhere to the same constraints as member names\n' +
          'All member names used in a JSON API document MUST meet all of the conditions listed here : ' +
          'http://jsonapi.org/format/#document-member-names',
          '',
          ['queryParameter.adhereMemberName', 'fields.restrictMemberName']
        );
        return true;
      }
    );

    done();
  });
});
