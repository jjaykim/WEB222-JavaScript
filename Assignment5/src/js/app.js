// An instance of our SimpleMap, created below when the window loads.
let map;

// ================================================================================================
// ================================== JS for TABLE (Assignmnet 4) =================================
// ================================================================================================
/*
function updateMap(observations, map) {
  map.clear();

  // TODO: call the Simple Map's addObservation method for every one
  // of the observations in order to add markers to the map.
  observations.forEach((elem) => map.addObservation(elem));
}

function updateTable(observations) {
  clearAllTableRows();

  // Populate the table with all observation data we want to show
  observations.forEach((observation) => {
    // TODO: call the buildRowForObservation function with the current observation
    // and use that to add it to the table with the addRowToTable function.
    addRowToTable(buildRowForObservation(observation));
  });
}

function showAll() {
  const observations = getAllObservations();

  updateMap(observations, map);
  updateTable(observations);
  updateTableTitle(`All Species (${observations.length})`);
}

function showOnlyNative() {
  const observations = getAllObservations();
  const native = filterOnlyNative(observations);

  updateMap(native, map);
  updateTable(native);
  updateTableTitle(`Only Native Species (${native.length})`);
}

function navigateShow(show) {
  switch (show) {
    case "all":
      showAll();
      break;

    case "native":
      showOnlyNative();
      break;

    case "introduced":
      showOnlyIntroduced();
      break;
  }
}

function showOnlyIntroduced() {
  const observations = getAllObservations();
  const introduced = filterOnlyIntroduced(observations);

  updateMap(introduced, map);
  updateTable(introduced);
  updateTableTitle(`Only Introduced Species (${introduced.length})`);
}

function start() {
  map = new SimpleMap("map-container", 43.7955, -79.3496);

  // TODO: create click handlers for all three buttons.
  // The "All Species" button should call the showAll function.
  // The "Only Native Species" button should call the showOnlyNative function.
  // The "Only Introduced Species" button should call the showOnlyIntroduced function.
  // In your solution, show both ways of creating click event handlers (i.e.,
  // using the on* property and also addEventListener function).

  let all_species = document.querySelector("#show-all");
  all_species.onclick = () => navigateShow("all");

  let native = document.querySelector("#show-native");
  native.addEventListener("click", () => navigateShow("native"));

  let intro = document.querySelector("#show-introduced");
  intro.addEventListener("click", () => navigateShow("introduced"));

  showAll();
}

// TODO: replace this console.log with the code necessary to call the start
// function when the page has finished fully loading.
window.onload = () => start();
*/

// ================================================================================================
// ================================== JS for CARD (Assignmnet 5) ==================================
// ================================================================================================
// Update the map to show markers for the set of observations
function updateMap_Card(observations, map) {
  // Clear the current markers on the map (if any)
  map.clear();

  // every one add markers to the map
  observations.forEach((elem) => map.addObservation(elem));
}

// Update the card to show markers for the set of observations
function updateCard(observations) {
  // Remove any current data from the card container
  clearAllCards();

  // add cards to card container
  observations.forEach((observation) => {
    addEachCard(buildCardForObservation(observation));
  });
}

// Show all species on the map and card container
function showAllCards() {
  // Get all the observations from our data.js and format them so we can work with the data
  const observations = getAllObservations();

  updateMap(observations, map);
  updateCard(observations);
  updateCardTitle(`All Species (${observations.length})`);
}

// Show native species on the map and card container
function showOnlyNativeCards() {
  // Get all the observations from our data.js and format them so we can work with the data
  const observations = getAllObservations();

  // Filter out any that aren't native species
  const native = filterOnlyNative(observations);

  updateMap(native, map);
  updateCard(native);
  updateCardTitle(`Only Native Species (${native.length})`);
}

// Show introduced species on the map and card container
function showOnlyIntroducedCards() {
  // Get all the observations from our data.js and format them so we can work with the data
  const observations = getAllObservations();

  // Filter out any that aren't introduced species
  const introduced = filterOnlyIntroduced(observations);

  updateMap(introduced, map);
  updateCard(introduced);
  updateCardTitle(`Only Introduced Species (${introduced.length})`);
}

// determines which category to show
function navigateShow(show) {
  switch (show) {
    case "all":
      showAllCards();
      break;

    case "native":
      showOnlyNativeCards();
      break;

    case "introduced":
      showOnlyIntroducedCards();
      break;
  }
}

function startCard() {
  // Create our map object for Seneca's Newnham campus
  map = new SimpleMap("map-container", 43.7955, -79.3496);

  let all_species = document.querySelector("#show-all");
  all_species.onclick = () => navigateShow("all");

  let native = document.querySelector("#show-native");
  native.addEventListener("click", () => navigateShow("native"));

  let intro = document.querySelector("#show-introduced");
  intro.addEventListener("click", () => navigateShow("introduced"));

  // Show all species observations by default when we start.
  showAllCards();
}
// To call the start function when the page has finished fully loading.
window.onload = () => startCard();
