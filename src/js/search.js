// Lookup geolocation info from OpenStreetMaps, using their
// https://nominatim.openstreetmap.org/ui/search.html API
function lookupAddress(address, callback) {
  const q = encodeURIComponent(address);
  let url = `https://nominatim.openstreetmap.org/search?format=json&limit=1&q=${q}`;

  // Use the the XMLHttpRequest Web API, see
  // https://en.wikipedia.org/wiki/XMLHttpRequest
  const xhr = new XMLHttpRequest();

  // If the data loads successfully, process it as JSON
  xhr.onload = function() {
    // Make sure we got back some data
    if(!this.responseText) {
      return callback(null);
    }

    // Try and parse the data, which could fail if it's not formatted correctly.
    try {
      const data = JSON.parse(this.responseText);

      // Log some debug info about the data we got back
      console.info('Got the following address data', data);

      // Make sure we have at least one result
      if(!data.length) {
        // No result, so send back `null` on the callback
        return callback(null);
      }

      // Get the first (and only) result
      const result = data[0];

      // Extract the lat/lng string values, and convert to numbers
      const lat = parseFloat(result.lat);
      const lng = parseFloat(result.lon);

      // Pass this to the callback function for processing
      callback({lat, lng});
    } catch(err) {
      // Something went wrong, send back `null` on the callback
      console.error(err);
      callback(null);         
    }
  };

  // If something goes wrong, handle the error case
  xhr.onerror = function() {
    console.error('Unable to lookup address info');
    callback(null);
  }

  // Now that the event handlers are setup, Open and Send the request
  xhr.open("GET", url);
  xhr.send();
}

// Given a set of coordinates (latitude and longitude numbers), get data from the
// iNaturalist API for a 1 KM radius around that point, limiting the number of results
// returned to 30, and sorting them by the date that they were observed.  When the
// network request completes, invoke the provided callback function with the results.
function loadObservationsByLocation(lat, lng, callback) {
  // Get observation data using the iNaturalist API, see https://www.inaturalist.org/pages/api+reference.
  const url = `https://api.inaturalist.org/v1/observations?per_page=30&order_by=observed_on&acc=true&lat=${lat}&lng=${lng}&radius=1`;

  // Start by making a GET request with our URL. Use the newer fetch() Web API, see
  // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API
  fetch(url)
    // When the response comes back, then() will call the callback function to process the data
    .then(res => {
      // Make sure that we get a 200 response, or something went wrong
      if(!res.ok) {
        throw new Error(`unable to lookup observations (got ${res.status}: ${res.statusText}`);
      }
      // If everything worked, parse the body of the response as JSON
      return res.json();
    })
    // When the body is parsed to a JavaScript Object from JSON, process it here
    .then(data => {
      console.info(`Got the following iNaturalist data for position ${lat}, ${lng}`, data);

      // Overwrite the static window.data value with this new data so we can re-use it in
      // or other functions in the UI.  This will replace the Seneca Newnham data
      // we used on startup with the new data we just loaded from iNaturalist.
      window.data = data;

      // Invoke the callback, and pass the filtered, transformed observations
      callback(getAllObservations());
    })
    // If anything goes wrong, the catch() will call this callback
    .catch(err => {
      console.error(err);
      // Invoke the callback passing `null` to indicate we got not data
      return callback(null);
    });
}

// Perform a search for the given address in two stages.  First, look up the
// geolocation data (lat, lng) for this address.  If found, continue to step 2,
// loading observations for this geographic position.
function search(query) {
  // Disable the search button so the user doesn't click it again
  // and change the text to a "Loading..." indicator so they know 
  // something is happening.
  toggleLoading(true);

  // Start our search. The first step is to lookup the geographic coordinates
  // (i.e., lat/lng) for this address query.  We pass a function as the second
  // argument, which will be called when the network request is complete.
  lookupAddress(query, function(coords) {
    // Make sure we got back coords (i.e, that the address was found)
    if(!coords) {
      alert('Unable to lookup address. No results found.');
      toggleLoading(false);
      return;
    }

    const { lat, lng } = coords;

    // If we have coords, use them to do the second step. Load observation data
    // for this geographic position, and format it so we can use it to update the UI.
    // Again, we pass a callback function as the final argument, which will be
    // invoked when the observation data is available (network request is done).
    loadObservationsByLocation(lat, lng, function(observations) {
      // We're done loading, reset the search button
      toggleLoading(false);

      // Make sure we got back observations
      if(!observations) {
        alert('Unable to get observation data for this location.');
        return;
      }

      // If we did get observations, move the map to these coordinates and show
      // all of the observations.
      map.setLocation(lat, lng);
      // Update the map and markers
      showObservations(observations, 'All Species');
    });
  });
}
