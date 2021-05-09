const { mimeFromFilename } = require('./solutions');

describe('Problem 7 - mimeFromFilename() function', function () {
  test('correct mime type for HTML extensions', function () {
    expect(mimeFromFilename('index.html')).toEqual('text/html');
    expect(mimeFromFilename('index.htm')).toEqual('text/html');
  });

  test('correct mime type for CSS extension', function () {
    expect(mimeFromFilename('styles.css')).toEqual('text/css');
  });

  test('correct mime type for JS extension', function () {
    expect(mimeFromFilename('index.js')).toEqual('text/javascript');
  });

  test('correct mime type for JPEG extensions', function () {
    expect(mimeFromFilename('photo.jpg')).toEqual('image/jpeg');
    expect(mimeFromFilename('photo.jpeg')).toEqual('image/jpeg');
  });

  test('correct mime type for GIF extension', function () {
    expect(mimeFromFilename('animation.gif')).toEqual('image/gif');
  });

  test('correct mime type for BMP extension', function () {
    expect(mimeFromFilename('graphic.bmp')).toEqual('image/bmp');
  });

  test('correct mime type for Icon extensions', function () {
    expect(mimeFromFilename('favicon.ico')).toEqual('image/x-icon');
    expect(mimeFromFilename('cursor.cur')).toEqual('image/x-icon');
  });

  test('correct mime type for PNG extension', function () {
    expect(mimeFromFilename('photo.png')).toEqual('image/png');
  });

  test('correct mime type for SVG extension', function () {
    expect(mimeFromFilename('chart.svg')).toEqual('image/svg+xml');
  });

  test('correct mime type for WEBP extension', function () {
    expect(mimeFromFilename('photo.webp')).toEqual('image/webp');
  });

  test('correct mime type for MP3 extension', function () {
    expect(mimeFromFilename('music.mp3')).toEqual('audio/mp3');
  });

  test('correct mime type for WAV extension', function () {
    expect(mimeFromFilename('sound.wav')).toEqual('audio/wav');
  });

  test('correct mime type for MP4 extension', function () {
    expect(mimeFromFilename('video.mp4')).toEqual('video/mp4');
  });

  test('correct mime type for WEBM extension', function () {
    expect(mimeFromFilename('video.webm')).toEqual('video/webm');
  });

  test('correct mime type for JSON extension', function () {
    expect(mimeFromFilename('data.json')).toEqual('application/json');
  });

  test('correct mime type for unknown extensions', function () {
    expect(mimeFromFilename('file.exe')).toEqual('application/octet-stream');
    expect(mimeFromFilename('library.dll')).toEqual('application/octet-stream');
    expect(mimeFromFilename('file.xht')).toEqual('application/octet-stream');
    expect(mimeFromFilename('file.m')).toEqual('application/octet-stream');
  });

  test('absolute Unix file paths give correct mime type', function () {
    expect(mimeFromFilename('/public/site/www/index.html')).toEqual('text/html');
  });

  test('absolute Windows file paths give correct mime type', function () {
    expect(mimeFromFilename('C:\\Documents\\Seneca\\WEB222\\index.html')).toEqual('text/html');
  });

  test('spaces in path give correct mime type', function () {
    expect(mimeFromFilename('/this path/has quite a/few spaces/index.html')).toEqual('text/html');
  });

  test('periods in path give correct mime type', function () {
    expect(mimeFromFilename('/this.path/has.quite.a/few.periods/index.html')).toEqual('text/html');
  });

  test('filename with no extension should give correct mime type', function () {
    expect(mimeFromFilename('/this/file/has/no/extension')).toEqual('application/octet-stream');
  });
});
