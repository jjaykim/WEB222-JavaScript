const { buildUrl } = require('./solutions');

describe('Problem 10 - buildUrl() function', function () {
  function assertUrl(urlString, q, perPage, order, license, lat, lng) {
    let url = new URL(urlString);
    expect(url.origin).toBe('https://api.inaturalist.org');
    expect(url.pathname).toBe('/v1/observations');
    expect(url.searchParams.get('q')).toEqual(q);
    expect(url.searchParams.get('per_page')).toEqual(String(perPage));
    expect(url.searchParams.get('order')).toEqual(order);
    expect(url.searchParams.get('license')).toEqual(license);
    expect(url.searchParams.get('lat')).toEqual(String(lat));
    expect(url.searchParams.get('lng')).toEqual(String(lng));
  }

  test('correct values produce an expected url', function () {
    let url = buildUrl('butterfly', 50, 'asc', 'cc-by', 43.7955, -79.3496);
    expect(typeof url).toEqual('string');
    assertUrl(url, 'butterfly', 50, 'asc', 'cc-by', 43.7955, -79.3496);
  });

  test('q values are properly encoded on url', function () {
    let url = buildUrl(
      'butterfly with special characters:/\\{}<>[]}`"',
      50,
      'asc',
      'cc-by',
      43.7955,
      -79.3496
    );
    expect(typeof url).toEqual('string');
    assertUrl(
      url,
      'butterfly with special characters:/\\{}<>[]}`"',
      50,
      'asc',
      'cc-by',
      43.7955,
      -79.3496
    );
  });

  test('perPage below 1 throws but 1 works', function () {
    expect(() => buildUrl('butterfly', 0, 'asc', 'cc-by', 43.7955, -79.3496)).toThrowError();

    let url = buildUrl('butterfly', 1, 'asc', 'cc-by', 43.7955, -79.3496);
    expect(typeof url).toEqual('string');
    assertUrl(url, 'butterfly', 1, 'asc', 'cc-by', 43.7955, -79.3496);
  });

  test('perPage above 200 throws but 200 works', function () {
    expect(() => buildUrl('butterfly', 201, 'asc', 'cc-by', 43.7955, -79.3496)).toThrowError();

    let url = buildUrl('butterfly', 200, 'asc', 'cc-by', 43.7955, -79.3496);
    expect(typeof url).toEqual('string');
    assertUrl(url, 'butterfly', 200, 'asc', 'cc-by', 43.7955, -79.3496);
  });

  test('order can be asc', function () {
    let url = buildUrl('butterfly', 200, 'asc', 'cc-by', 43.7955, -79.3496);
    expect(typeof url).toEqual('string');
    assertUrl(url, 'butterfly', 200, 'asc', 'cc-by', 43.7955, -79.3496);
  });

  test('order can be desc', function () {
    let url = buildUrl('butterfly', 200, 'desc', 'cc-by', 43.7955, -79.3496);
    expect(typeof url).toEqual('string');
    assertUrl(url, 'butterfly', 200, 'desc', 'cc-by', 43.7955, -79.3496);
  });

  test('order other than asc/desc throws', function () {
    expect(() => buildUrl('butterfly', 200, '', 'cc-by', 43.7955, -79.3496)).toThrowError();
  });

  test('license must be one of the expected values', function () {
    [
      'none',
      'any',
      'cc-by',
      'cc-by-nc',
      'cc-by-sa',
      'cc-by-nd',
      'cc-by-nc-sa',
      'cc-by-nc-nd'
    ].forEach((license) => {
      let url = buildUrl('butterfly', 200, 'desc', license, 43.7955, -79.3496);
      expect(typeof url).toEqual('string');
      assertUrl(url, 'butterfly', 200, 'desc', license, 43.7955, -79.3496);
    });
  });

  test('license other than the expected values will throw', function () {
    expect(() => buildUrl('butterfly', 200, 'asc', '', 43.7955, -79.3496)).toThrowError();
  });

  test('invalid lat will throw', function () {
    expect(() => buildUrl('butterfly', 200, 'asc', '', -90.01, -79.3496)).toThrowError();
    expect(() => buildUrl('butterfly', 200, 'asc', '', 90.01, -79.3496)).toThrowError();
  });

  test('invalid lng will throw', function () {
    expect(() => buildUrl('butterfly', 200, 'asc', '', 43.7955, -180.01)).toThrowError();
    expect(() => buildUrl('butterfly', 200, 'asc', '', 43.7955, 180.01)).toThrowError();
  });
});
