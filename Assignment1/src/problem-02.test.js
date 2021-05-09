const { createImg } = require('./solutions');

describe('Problem 2 - createImg() function', function () {
  test('<img> is correct for given src and alt values', function () {
    let src = 'https://images.unsplash.com/photo-1513451713350-dee890297c4a?width=500';
    let alt = 'Cat with ears down';
    let result = createImg(src, alt);
    expect(result).toBe(
      '<img src="https://images.unsplash.com/photo-1513451713350-dee890297c4a?width=500" alt="Cat with ears down">'
    );
  });

  test('<img> HTML is correct for src and alt values that need to be trimmed', function () {
    let src = '   https://images.unsplash.com/photo-1513451713350-dee890297c4a?width=500  ';
    let alt = 'Cat with ears down  ';
    let result = createImg(src, alt);
    expect(result).toBe(
      '<img src="https://images.unsplash.com/photo-1513451713350-dee890297c4a?width=500" alt="Cat with ears down">'
    );
  });

  test('<img> HTML is correct when valid width Number is included', function () {
    let src = 'https://images.unsplash.com/photo-1513451713350-dee890297c4a?width=500';
    let alt = 'Cat with ears down';
    let width = 300;
    let result = createImg(src, alt, width);
    expect(result).toBe(
      '<img src="https://images.unsplash.com/photo-1513451713350-dee890297c4a?width=500" alt="Cat with ears down" width="300">'
    );
  });

  test('<img> HTML is correct when valid width string is included', function () {
    let src = 'https://images.unsplash.com/photo-1513451713350-dee890297c4a?width=500';
    let alt = 'Cat with ears down';
    let width = '300';
    let result = createImg(src, alt, width);
    expect(result).toBe(
      '<img src="https://images.unsplash.com/photo-1513451713350-dee890297c4a?width=500" alt="Cat with ears down" width="300">'
    );
  });

  test('<img> HTML is correct when invalid width is included', function () {
    let src = 'https://images.unsplash.com/photo-1513451713350-dee890297c4a?width=500';
    let alt = 'Cat with ears down';
    let width = 'three-hundred';
    let result = createImg(src, alt, width);
    expect(result).toBe(
      '<img src="https://images.unsplash.com/photo-1513451713350-dee890297c4a?width=500" alt="Cat with ears down">'
    );
  });
});
