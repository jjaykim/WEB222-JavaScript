/**
 * WEB222 – Assignment 1
 *
 * I declare that this assignment is my own work in accordance with
 * Seneca Academic Policy. No part of this assignment has been copied
 * manually or electronically from any other source (including web sites)
 * or distributed to other students.
 *
 * Please update the following with your information:
 *
 *      Name: Jungjoo Kim
 *      Student ID: 162 641 195
 *      Date: 05 Feb, 2021
 *
 * Please see all unit tests in the files problem-00.test.js, problem-01.test.js, etc.
 */

/*******************************************************************************
 *
 * Welcome to Assignment 1! In this assignment, you're going to be practicing lots
 * of new JavaScript programming techniques.  Before you dive in let's spend a
 * minute helping you learn how to read this code.
 *
 * Please spend some time reading the information in the Problem's comment. You'll see
 * comments like this one:
 *
 * @param {string} value - a string to be converted
 * @return {string}
 *
 * These are specially formatted comments that define parameters to functions,
 * and tell us the type {string} or {number}, and also the parameter's name.
 * We also indicate the return type for functions.
 *
 * Finally, we also explain a bit about how the parameter is used, and what
 * data it will have, whether it's optional, etc.
 *
 * A completed function must be followed by one or more instances of
 * executions of the function (executing the function and printing the result on console).

/*******************************************************************************
 * Problem 1: replace all internal whitespace in a string value with dashes ('-'),
 * and make it UPPERCASE.
 *
 * We want to be able to convert a string to Upper Kebab Case style, so that it
 * contains no spaces, tabs, or dots, and all letters are upper case.
 *
 * The kebab() function should work like this:
 *
 * kebab('ABC') --> returns 'ABC' (all Upper Case, the string is unchanged)
 * kebab(' ABC ') --> returns 'ABC' (all Upper Case, leading/trailing whitespace removed)
 * kebab('abc') --> returns 'ABC' (the string was converted to upper case)
 * kebab('A BC') --> returns 'A-BC' (uppercase, single space replaced with -)
 * kebab('A BC') --> returns 'A-BC' (uppercase, single space replaced with -)
 * kebab('A   BC') --> returns 'A-BC' (uppercase, multiple spaces replaced with -)
 * kebab('A.BC') --> returns 'A-BC' (uppercase, period replaced with -)
 * kebab('A..  BC') --> returns 'A-BC' (uppercase, periods/spaces replaced with -)
 *
 * @param {string} value - a string to be converted
 * @return {string}
 ******************************************************************************/

function kebab(value) {
  value = value.trim().toUpperCase();
  value = value.replace(/[^A-Z]/g, "-");
  value = value.replace(/-+/g, "-");

  return value;
}

/*******************************************************************************
 * Problem 2: create an HTML <img> element for the given url and alt text.
 *
 * In HTML, we use markup syntax to indicate how browsers should format elements
 * of a web page.  For example, here is a URL to a cat picture:
 *
 * https://images.unsplash.com/photo-1513451713350-dee890297c4a?width=500
 *
 * Try navigating to it in your browser.  In order for a web page to know how to
 * interpret this URL (e.g., should we show the text of the URL itself, or use
 * it to load an image?), we have to use special markup.  The <img> element
 * is how we specify that a URL is to be interpreted as an image, see:
 * https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img
 *
 * Here is how we might use HTML to markup this image:
 *
 * <img src="https://images.unsplash.com/photo-1513451713350-dee890297c4a?width=500" alt="Cat with ears down">
 *
 * Our <img> has two attributes:
 *
 * - src: the URL to use when downloading this image's data
 * - alt: the alternative text to display in non-visual browsing environments (e.g., screen readers)
 *
 * Write the createImg() function to accept a URL and alt text, and return the
 * properly formatted img element.  For example:
 *
 * createImg('https://images.unsplash.com/photo-1513451713350-dee890297c4a?width=500', 'Cat with ears down')
 *
 * should return the following string of HTML:
 *
 * '<img src="https://images.unsplash.com/photo-1513451713350-dee890297c4a?width=500" alt="Cat with ears down">'
 *
 * An <img> can also optionally contain a width attribute, for example:
 *
 * <img src="https://images.unsplash.com/photo-1513451713350-dee890297c4a?width=500" alt="Cat with ears down" width="300">
 *
 * In this case, the <img> element should use 300 pixels for its width.  Therefore,
 * your createImg() function should also accept a third argument, width:
 *
 * // No width given
 * createImg('https://images.unsplash.com/photo-1513451713350-dee890297c4a?width=500', 'Cat with ears down')
 * // Width of 300 given
 * createImg('https://images.unsplash.com/photo-1513451713350-dee890297c4a?width=500', 'Cat with ears down', 300)
 *
 * The returned <img> HTML string should be formatted as follows:
 *
 * - Remove leading/trailing whitespace from src and alt values before you use them
 * - The src and alt attribute values should be wrapped in double-quotes (e.g., src="...")
 * - There should be a single space between the end of one attribute and start of the next (e.g., src="..." alt="...")
 * - The width attribute should only be added if a valid integer value (number or string) is passed
 *   for the third argument.  Otherwise ignore it.
 *
 * @param {string} src - the src URL for the img
 * @param {string} alt - the alt text to use for the img
 * @param {string|number} width - (optional) the width of the img. Must be a valid integer
 * @returns {string}
 ******************************************************************************/

function createImg(src, alt, width)
{
  var result = "<img ";
  var _src = 'src="' + src.trim() + '"';
  var _alt = 'alt="' + alt.trim() + '"';
  var _width = 'width="';

  if (width > 0) {
    result = result + _src + " " + _alt + " " + _width + width + '">';
  }
  else result = result + _src + " " + _alt + ">";

  return result;
}

/*******************************************************************************
 * Problem 3: validate a coordinate
 *
 * Coordinates are defined as numeric, decimal values of Latitude and Longitude.
 * A example, the Seneca College Newnham campus is located at:
 *
 * Latitude: 43.7955 (positive number means North)
 * Longitude: -79.3496 (negative number means West)
 *
 * Write a function, validateCoord(), which accepts a latitude and longitude,
 * and returns true if they are both valid, or false if one or both are invalid.
 *
 * Valid Latitude values are decimal numbers between -90 and 90.
 *
 * Valid Longitude values are decimal numbers between -180 and 180.
 *
 * @param {number} lat - the latitude
 * @param {number} lng - the longitude
 * @returns {boolean}
 ******************************************************************************/

function validateCoord(lat, lng)
{
  var result = false;

  if (lat >= -90 && lat <= 90 && lng >= -180 && lng <= 180)
    result = true;

  return result;
}

/*******************************************************************************
 * Problem 4, Part 1: format a coordinate as a string
 *
 * As above, coordinates are defined as numeric, decimal values of Latitude and Longitude.
 *
 * Write a function, formatCoord(), which accepts a latitude and longitude,
 * and returns a string formatted as follows:
 *
 * (lat, lng)
 *
 * For example:
 *
 * formatCoord(43.7955, -79.3496) should return the string '43.7955,-79.3496'.
 *
 * An optional third param, includeBrackets, determines whether or not to include
 * parenthesis around the formatted coordinate:
 *
 * formatCoord(43.7955, -79.3496) should return the string '43.7955,-79.3496'.
 * formatCoord(43.7955, -79.3496, true) should return the string '[43.7955,-79.3496]'.
 *
 * Use your validateCoord() function from Problem 3 to determine if the coordinate
 * is valid before you attempt to format it.  If the coordinate is not valid, throw
 * an exception.
 *
 * @param {number} lat - the latitude
 * @param {number} lng - the longitude
 * @param {boolean} includeBrackets - (optional) whether to include the square brackets
 * @returns {string}
 ******************************************************************************/

function formatCoord(lat, lng, includeBrackets)
{
  var result = "";

  if (validateCoord(lat, lng)) {
    if (includeBrackets == true)
      result = "[" + lat + "," + lng + "]";
    else
      result = lat + "," + lng;
  }
  else throw "INVALID VALUES";

  return result;
}

/*******************************************************************************
 * Problem 4, Part 2: format any number of coordinates as a string
 *
 * Similar to Problem 4 Part 1, you are asked to format lat, lng coordinates
 * into a string. However, where formatCoord() formats a single lat, lng pair,
 * the formatCoords() function (note the `s` suffix) is able to format any
 * number of lag, lng pairs.
 *
 * For example:
 *
 * formatCoords(43.7955, -79.3496) should return '[[43.7955,-79.3496]]'
 * formatCoords(43.7955, -79.3496, 43.7953, -79.3491) should return '[[43.7955,-79.3496], [43.7953,-79.3491]]'
 *
 * In your solution for formatCoords, use the formatCoord function you wrote above.
 *
 * The formatCoords() function can take any number of arguments, but they must all be numbers,
 * there must be an even number of them, and all lat, lng pairs should be valid.
 *
 * If any of these conditions are not met, throw an exception.
 *
 * Please note that even though the format of the function specifies a rest parameter as input,
 * you can use arguments as well.
 *
 * @param {number} arguments - any number of arguments can be passed, but there must be an even number
 * @returns {string}
 ******************************************************************************/

function formatCoords(...values)
{
  var store = [];
  var result = "";
  var i = 0;

  while (values[i]) {
    store.push(formatCoord(values[i], values[i + 1]));
    i += 2;
  }

  if (store.length != 0) {
    result += "[";

    for (i = 0; i < store.length; i++) {
      result += "[" + store[i] + "]";

      if (store[i + 1]) result += ", ";
    }

    result += "]";
  }
  else throw "INVALID VALUES";

  return result;
}

/*******************************************************************************
 * Problem 5: determine MIME type from filename extension
 *
 * Web browsers and servers exchange streams of bytes, which must be interpreted
 * by the receiver based on their type.  For example, an HTML web page is
 * plain text, while a JPG image is a binary sequence.
 *
 * The Content-Type header contains information about a resource's MIME type, see:
 * https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Type
 *
 * The MIME type is made-up of a `type` and a `subtype` separated by a `/` character.
 * The type is general, for example, 'text' or 'video'.  The subtype is more
 * specific, indicating the specific type of text, image, video, etc.  See:
 * https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types
 *
 * A number of common types are used in web development:
 *
 * mimeFromFilename('/User/Documents/readme.txt') --> returns 'text/plain'
 *
 * Your mimeFromFilename() function should support all of the following extensions
 * with and without the leading '.':
 *
 * - .html, .htm --> text/html
 * - .css --> text/css
 * - .js --> text/javascript
 * - .jpg, .jpeg --> image/jpeg
 * - .gif --> image/gif
 * - .bmp --> image/bmp
 * - .ico, .cur --> image/x-icon
 * - .png --> image/png
 * - .svg --> image/svg+xml
 * - .webp --> image/webp
 * - .mp3 --> audio/mp3
 * - .wav --> audio/wav
 * - .mp4 --> video/mp4
 * - .webm --> video/webm
 * - .json --> application/json
 *
 * NOTE: any other extension should use the `application/octet-stream` MIME type,
 * to indicate that it is an unknown stream of bytes (e.g., binary file). You should
 * also use `application/octet-stream` if the file has no extension.
 *
 * @param {string} filename - a filename
 * @returns {string}
 * !filename alnog with path is passed
 * !check is there is an extension(something preceded by 'a.')
 * !use string methiod slice to get the extension,
 * !if else, swith
 *
 * !if there is no "."
 * !if there is an unkown extensionb (ex. .java)
 * !in both these cases, return "application/octet-stream"
 ******************************************************************************/

function mimeFromFilename(filename)
{
  var result = "";

  var dot = filename.lastIndexOf(".");
  var ext = filename.substring(dot + 1, filename.length).toLowerCase();

  switch (ext) {
    // ================ text ================
    case "html":
    case "htm":
      result = "text/html";
      break;

    case "css":
      result = "text/css";
      break;

    case "js":
      result = "text/javascript";
      break;

    // ================ image ================
    case "jpg":
    case "jpeg":
      result = "image/jpeg";
      break;

    case "gif":
      result = "image/gif";
      break;

    case "bmp":
      result = "image/bmp";
      break;

    case "ico":
    case "cur":
      result = "image/x-icon";
      break;

    case "png":
      result = "image/png";
      break;

    case "svg":
      result = "image/svg+xml";
      break;

    case "webp":
      result = "image/webp";
      break;

    // ================ audio ================
    case "mp3":
      result = "audio/mp3";
      break;

    case "wav":
      result = "audio/wav";
      break;

    // ================ video ================
    case "mp4":
      result = "video/mp4";
      break;

    case "webm":
      result = "video/webm";
      break;

    // ================ application ================
    case "json":
      result = "application/json";
      break;

    default:
      result = "application/octet-stream";
  }

  return result;
}

/*******************************************************************************
 * Problem 6: generate license text and link from license code.
 *
 * Images, videos, and other resources on the web are governed by copyright.
 * Everything you find on the web is copyright to its creator automatically, and
 * you cannot reuse it unless you are granted a license to do so.
 *
 * Different licenses exist to allow creators to share their work. For example,
 * the Creative Commons licenses are a popular way to allow people to reuse
 * copyright material, see https://creativecommons.org/licenses/.
 *
 * Below is a list of license codes, and the associated license text explaining the code:
 *
 * CC-BY: Creative Commons Attribution License
 * CC-BY-NC: Creative Commons Attribution-NonCommercial License
 * CC-BY-SA: Creative Commons Attribution-ShareAlike License
 * CC-BY-ND: Creative Commons Attribution-NoDerivs License
 * CC-BY-NC-SA: Creative Commons Attribution-NonCommercial-ShareAlike License
 * CC-BY-NC-ND: Creative Commons Attribution-NonCommercial-NoDerivs License
 *
 * NOTE: any other licenseCode should use the URL https://choosealicense.com/no-permission/
 * and the explanation text, "All Rights Reserved"
 *
 * Write a function, generateLicenseLink(), which takes a license code, and returns
 * an HTML link to the appropriate license URL, and including the explanation text.
 *
 * For example:
 *
 * generateLicenseLink('CC-BY-NC') should return the following HTML string:
 *
 * '<a href="https://creativecommons.org/licenses/by-nc/4.0/">Creative Commons Attribution-NonCommercial License</a>'
 *
 * The URL is generated based on the license code:
 *
 * - remove the `CC-` prefix
 * - convert to lower case
 * - place formatted license code within URL https://creativecommons.org/licenses/[...here]/4.0/
 *
 * You can read more about HTML links at https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a
 *
 * @param {string} licenseCode - a license code
 * @returns {string}
 *
 * !create a hyperlink as a string
 * !<a href ="https://creativecommons.org/licenses/[...here]/4.0/">text</a>
 ******************************************************************************/

function generateLicenseLink(licenseCode) {
  var result = "<a href=";
  var url = '"https://creativecommons.org/licenses/[code]/4.0/">';
  var err = '"https://choosealicense.com/no-permission/">' + "All Rights Reserved</a>";
  var licenseList = ["by", "by-nc", "by-sa", "by-nd", "by-nc-sa", "by-nc-nd"];
  var license = "";
  var code = "";

  var find = -1;

  if (typeof licenseCode !== "string")
    find = -1;
  else {
    code = licenseCode.toLowerCase().replace("cc-", "");

    for (var i in licenseList) {
      if (code == licenseList[i])
        find = i;
    }
  }

  switch (find) {
    case "0":
      license = "Creative Commons Attribution License";
      break;

    case "1":
      license = "Creative Commons Attribution-NonCommercial License";
      break;

    case "2":
      license = "Creative Commons Attribution-ShareAlike License";
      break;

    case "3":
      license = "Creative Commons Attribution-NoDerivs License";
      break;

    case "4":
      license = "Creative Commons Attribution-NonCommercial-ShareAlike License";
      break;

    case "5":
      license = "Creative Commons Attribution-NonCommercial-NoDerivs License";
      break;

    case "-1":
    default:
      result += err;
      break;
  }

  if (find != -1) {
    url = url.replace("[code]", code);
    result += url + license + "</a>";
  }

  return result;
}

/*******************************************************************************
 * Problem 7 Part 1: create a pure Boolean true/false value from a dataset
 *
 * A dataset contains fields that indicate a value is true or false.  However,
 * users have entered data in various formats over the years, for example:
 *
 * Yes, yes, YES, Y, t, TRUE, true, True, 1  -> ture
 * No, no, NO, N, n, f, FALSE, false, False, 0, null, undefined, -1  -> false
 *
 * Write a function pureBool() which takes a String, Number, Boolean,
 * null, or undefined and attempts to convert it into a pure Boolean value.
 *
 * If the value is not one of the values above, throw an error with the error
 * message, 'invalid boolean value'.
 *
 * @param {string|number|boolean|null|undefined} value - a value to convert to true/false
 * @returns {bool}
 ******************************************************************************/

function pureBool(value)
{
  var type = typeof value;
  var result;

  switch (type) {
    case "string":
      type = value.toLowerCase();
      if (type == "yes" || type == "y" || type == "true" || type == "t")
        result = true;
      else
        result = false;
      break;

    case "number":
      if (value > 0)
        result = true;
      else
        result = false;
      break;

    case "boolean":
      result = value;
      break;

    case "object":
    case "undefined":
    default:
      result = false;
      break;
  }

  return result;
}

/*******************************************************************************
 * Problem 7 Part 2: checking for all True or all False values in a normalized list
 *
 * Using your pureBool() function, create two new functions to check
 * if a list of arguments are all normalized True or normalized False values:
 *
 * all('Y', 'yes', 1) --> returns true
 * all('Y', 'no', 1) --> returns false
 * all('Y', 'invalid', 1) --> returns false
 *
 * none('N', 'no', 0) --> returns true
 * none('Y', 'invalid', 1) --> returns false (i.e., does not throw)
 *
 * Use try/catch syntax to avoid having throw errors
 * when pureBool() throws on invalid data.
 ******************************************************************************/

function all()
{
  var store = 0;
  var result = true;

  for (var i in arguments) {
    try {
      if (pureBool(arguments[i]) != true)
        throw 1;
    }
    catch (err) {
      store += err;
    }
  }
  if (store != 0)
    result = false;

  return result;
}

function none()
{
  var store = 0;
  var result = true;

  for (var i in arguments) {
    try {
      if (pureBool(arguments[i]) != false)
        throw 1;
    }
    catch (err) {
      store += err;
    }
  }

  if (store != 0)
    result = false;

  return result;
}

/*******************************************************************************
 * Problem 8 - build a URL to query the iNaturalist Web API
 *
 * One of the data sources we'll be exploring in future assignments is
 * https://www.inaturalist.org.  Using iNaturalist, both hobbyist and professional
 * scientists can share sightings and help identify plants and animals in their
 * local area.
 *
 * As a web developer, you have access to this tremendous database of scientific
 * observations via the iNaturalist Web API (application programming interface):
 *
 * https://www.inaturalist.org/pages/api+reference#get-observations
 *
 * Querying the iNaturalist dataset for information involves formatting a URL
 * in a particular way.  As we know from week 1, a URL can contain optional
 * name=value pairs, see: https://web222.ca/weeks/week01/#urls
 *
 * For example:
 *
 *   https://www.store.com/search?q=dog includes q=dog
 *
 *   https://www.store.com?_encoding=UTF8&node=18521080011 includes
 *   both _encoding=UTF8 and also node=18521080011, separated by &
 *
 * We will write a buildUrl() function to build a URL for the iNaturalist API
 * based on arguments passed by the caller.
 *
 * The buildUrl() function accepts the following arguments:
 *
 * - q: a search string, for example "butterfly" or "Horse-chestnut"
 * - per_page: a number from 1 to 200, indicating how many results to return per page
 * - order: a string indicating sort order, with possible values of `asc` or `desc`
 * - license: a string indicating which items to return (e.g., which license they use). Possible
 *   values include: none, any, cc-by, cc-by-nc, cc-by-sa, cc-by-nd, cc-by-nc-sa, cc-by-nc-nd
 * - lat: a number, indicating the latitude to use for results
 * - lng: a number, indicating the longitude to use for results.
 *
 * Write an implementation of buildUrl() that accepts arguments for all of the above
 * parameters, validates them (e.g., perPage must be between 1 and 200, lat and lng
 * must be a valid coord, etc), and returns a properly formatted URL.
 *
 * For example:
 *
 * buildUrl('butterfly', 50, 'asc', 'cc-by', 43.7955, -79.3496) should return
 * the following URL:
 *
 * https://api.inaturalist.org/v1/observations?q=butterfly&per_page=50&order=asc&license=cc-by&lat=43.7955&lng=-79.3496
 *
 * NOTE: if any of the values passed to buildUrl() are invalid, an exception should be thrown.
 *
 * NOTE: make sure you properly encode the q value, since URLs can't
 * contain spaces or certain other characters. HINT: use the encodeURIComponent()
 * function to do this, see:
 *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/encodeURIComponent
 *
 * @param {string} q the query to use. Must be properly URI encoded
 * @param {number} perPage the number of results per page, must be 1-200
 * @param {string} order the sort order to use, must be one of asc or desc
 * @param {string} license the license to use, must be one of none, any, cc-by, cc-by-nc, cc-by-sa, cc-by-nd, cc-by-nc-sa, cc-by-nc-nd
 * @param {number} lat the latitude to use, must be a valid latitude (use validateCoord() function)
 * @param {number} lng the longitude to use, must be a valid longitude (use validateCoord() function)
 * @returns {string} the properly formatted iNaturalist URL
 //! you can add(concatenate) perPage, order and license with an & directly to the URL
 //! q -> encodeURICompenet
 //! lat, lng -> validateCoord(lat,lng)
 ******************************************************************************/

function buildUrl(q, perPage, order, license, lat, lng)
{
  var licenseList = [
    "none",
    "any",
    "cc-by",
    "cc-by-nc",
    "cc-by-sa",
    "cc-by-nd",
    "cc-by-nc-sa",
    "cc-by-nc-nd",
  ];
  var url = "https://api.inaturalist.org/v1/observations";
  var _perPage = "";
  var _order = "";
  var _license = "";
  var _lat_lng = "";
  var flag = true;

  // query
  var _q = "?q=" + encodeURIComponent(q);

  // perPage
  if (perPage >= 1 && perPage <= 200)
    _perPage = "&per_page=" + perPage;
  else
    throw "INVALID";

  // order
  if (order == "asc" || order == "desc")
    _order = "&order=" + order;
  else
    throw "INVALID";

  // license
  for (var i = 0; i < licenseList.length && flag; i++) {
    if (license.toLowerCase() == licenseList[i]) {
      _license = "&license=" + license.toLowerCase();
      flag = false;
    }
  }
  if (flag)
    throw "INVALID";

  // lat, lng
  if (validateCoord(lat, lng))
    _lat_lng = "&lat=" + lat + "&lng=" + lng;
  else
    throw "INVALID";

  return url + _q + _perPage + _order + _license + _lat_lng;
}
