// const { doc } = require("prettier");

function validate(event) {
  // TODO: write custom validation logic to validate the longitude and latitude values.
  // The latitude value must be a number between -90 and 90;
  // The Longitude value must be a number between -180 and 180.
  // If either/both are invalid, show the appropriate error message in the form,
  // and stop the form from being submitted.
  // If both values are valid, allow the form to be submitted.

  const _check = document.querySelector('form');

  const _latitude  = parseFloat(_check.lo_latitude.value);
  const _longitude = parseFloat(_check.lo_longitude.value);
  const _labelLat  = _check.querySelector('#latitude_label > span');
  const _labelLong = _check.querySelector('#longitude_label > span');
  let _result      = true;

  if (_latitude < -90 || _latitude > 90 || isNaN(_latitude)) {
    _labelLat.innerText = '* must be a valid Latitude (-90 to 90)';
    return false;
  }
  else _labelLat.innerText = '*';

  if (_longitude < -180 || (_longitude > 180 || isNaN(_longitude))) {
    _labelLong.innerText = '* must be a valid Longitude (-180 to 180)';
    return false;
  } else _labelLong.innerText = '*';

  return _result;
}

// Wait for the window to load, then set up the submit event handler for the form.
window.onload = function() {
  const form = document.querySelector('form');
  form.onsubmit = validate;
};