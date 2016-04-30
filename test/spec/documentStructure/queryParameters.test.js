'use strict';

describe('The query parameters', function () {
  it('can be valid', function (done) {
    const url = '/foo?s_bar=someValue';

    validator(url).to.be.a.ValidUrl();
    done();
  });

  it('filter is reserved for filtering data', function (done) {
    const url = '/foo?filter=someValue';

    validator(url).to.be.a.ValidUrl();
    done();
  });

  it('page is reserved for pagination', function (done) {
    const url = '/foo?page=someValue';

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

  it('must contain at least one non a-z character', function (done) {
    const url = '/foo?bar=someValue';

    expect(() => validator(url).to.be.a.ValidUrl()).to.throwError(
      function (err) {

        expect(err).be.TestError(
          'Implementation specific query parameters MUST contain at least one non a-z character (U+0061 to U+007A)',
          '',
          ['queryParameter.atLeastOneNonLowerAlphaCharacter']
        );
        return true;
      }
    );

    done();
  });
});
