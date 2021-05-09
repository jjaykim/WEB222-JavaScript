const { generateLicenseLink } = require('./solutions');

describe('Problem 8 - generateLicenseLink() function', function () {
  test('CC-BY license code produces correct link', function () {
    let licenseCode = 'CC-BY';
    let result = generateLicenseLink(licenseCode);
    expect(result).toBe(
      '<a href="https://creativecommons.org/licenses/by/4.0/">Creative Commons Attribution License</a>'
    );
  });

  test('CC-BY-NC license code produces correct link', function () {
    let licenseCode = 'CC-BY-NC';
    let result = generateLicenseLink(licenseCode);
    expect(result).toBe(
      '<a href="https://creativecommons.org/licenses/by-nc/4.0/">Creative Commons Attribution-NonCommercial License</a>'
    );
  });

  test('CC-BY-SA license code produces correct link', function () {
    let licenseCode = 'CC-BY-SA';
    let result = generateLicenseLink(licenseCode);
    expect(result).toBe(
      '<a href="https://creativecommons.org/licenses/by-sa/4.0/">Creative Commons Attribution-ShareAlike License</a>'
    );
  });

  test('CC-BY-ND license code produces correct link', function () {
    let licenseCode = 'CC-BY-ND';
    let result = generateLicenseLink(licenseCode);
    expect(result).toBe(
      '<a href="https://creativecommons.org/licenses/by-nd/4.0/">Creative Commons Attribution-NoDerivs License</a>'
    );
  });

  test('CC-BY-NC-SA license code produces correct link', function () {
    let licenseCode = 'CC-BY-NC-SA';
    let result = generateLicenseLink(licenseCode);
    expect(result).toBe(
      '<a href="https://creativecommons.org/licenses/by-nc-sa/4.0/">Creative Commons Attribution-NonCommercial-ShareAlike License</a>'
    );
  });

  test('CC-BY-NC-ND license code produces correct link', function () {
    let licenseCode = 'CC-BY-NC-ND';
    let result = generateLicenseLink(licenseCode);
    expect(result).toBe(
      '<a href="https://creativecommons.org/licenses/by-nc-nd/4.0/">Creative Commons Attribution-NonCommercial-NoDerivs License</a>'
    );
  });

  test('Unknown license codes produces correct link', function () {
    expect(generateLicenseLink(null)).toBe(
      '<a href="https://choosealicense.com/no-permission/">All Rights Reserved</a>'
    );

    expect(generateLicenseLink()).toBe(
      '<a href="https://choosealicense.com/no-permission/">All Rights Reserved</a>'
    );

    expect(generateLicenseLink('copyright')).toBe(
      '<a href="https://choosealicense.com/no-permission/">All Rights Reserved</a>'
    );

    expect(generateLicenseLink('Unknown')).toBe(
      '<a href="https://choosealicense.com/no-permission/">All Rights Reserved</a>'
    );
  });
});
