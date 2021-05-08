// Add the text to the <span>...<span> element in the element with id=observation-title
function updateTitle(text) {
  const title = document.querySelector("#observation-title > span");
  title.innerText = text;
}

// Remove all content from the cards div
function clearAllCards() {
  const cards = document.querySelector("#observation-cards");
  cards.innerHTML = "";
}

function addCard(card) {
  const cards = document.querySelector("#observation-cards");
  cards.appendChild(card);
}

function createAnchor(href, innerContent) {
  const a = document.createElement("a");
  a.href = href;
  a.innerText = innerContent;
  return a;
}

function cardImg(url) {
  url = url.replace('square', 'medium');
  const div = document.createElement("div");
  div.className = "card-img";
  div.style = `background-image: url(${url})`;

  return div;
}

function cardBody(name, date, uri, wikipediaUrl,) {
  const body = document.createElement("div");
  body.className="card-body";

  const nameAnchor = createAnchor(wikipediaUrl, name);
  const h3 = document.createElement("h3");
  h3.appendChild(nameAnchor);
  body.appendChild(h3);

  const dateAnchor = createAnchor(uri, date.toLocaleDateString());
  const h4 = document.createElement("h4");
  h4.appendChild(dateAnchor);
  body.appendChild(h4);

  return body;
}

function cardIcons(isNative, isIntroduced, isThreatened, isEndangered) {
  const icons = document.createElement("div");
  icons.className = "card-icons";

  function cardIcon(classes, title) {
    const icon = document.createElement("i");
    icon.className = classes;
    icon.title = title
    return icon;
  }

  if(isNative) {
    // <i class="fas fa-leaf" title="Native"></i>
    icons.appendChild(cardIcon("fas fa-leaf", "Native"));
  }

  if(isIntroduced) {
    // <i class="fas fa-frog" title="Introduced"></i>
    icons.appendChild(cardIcon("fas fa-frog", "Introduced"));
  }

  if(isThreatened) {
    // <i class="fas fa-radiation-alt" title="Threatened"></i>
    icons.appendChild(cardIcon("fas fa-radiation-alt", "Threatened"));
  }

  if(isEndangered) {
    // <i class="fas fa-skull-crossbones" title="Endangered">
    icons.appendChild(cardIcon("fas fa-skull-crossbones", "Endangered"));
  }

  return icons;
}

function buildCardForObservation(observation) {
  const {
    id, name, photoUrl, date, uri, wikipediaUrl, isNative, isEndangered, isIntroduced, isThreatened
  } = observation;

  const card = document.createElement("div");
  card.className = "card";
  card.id = id;

  card.appendChild(cardImg(photoUrl));
  card.appendChild(cardBody(name, date, uri, wikipediaUrl));
  card.appendChild(cardIcons(isNative, isIntroduced, isThreatened, isEndangered));

  return card;
}

function toggleLoading(isLoading) {
  // TODO: toggle the state of the Search button.
  // When we click 'Search' we need to indicate to the user
  // that we're doing something (i.e., that we're Loading...).
  // We also need to change the icon from a search magnifying glass to an hourglass.
  // Finally, we need to disable the button, so the user doesn't click it multiple
  // times (i.e., we need to wait until the loading finishes).  We decide what to
  // do based on the value of the isLoading argument.

  butt = document.querySelector('#search_submit');
  if (isLoading) {
    butt.setAttribute("disabled", "disabled");
    butt.innerHTML = "<i class='fas fa-hourglass-half'> Loading…</i>";
  }
  else {
    butt.removeAttribute("disabled");
    butt.innerHTML = "<i class='fas fa-search'> Search</i>";
  }
}

// ================================================================================================
// ================================== JS for TABLE (Assignmnet 4) =================================
// ================================================================================================
/*
// const { text } = require("express");

function updateTableTitle(title) {
  document.querySelector("#table-title span").innerText = title;
}

function addRowToTable(row) {
  document.getElementById("rows").appendChild(row);
}

function clearAllTableRows() {
  document.querySelector("#rows").innerHTML = "";
}

function createTableRow(id) {
  const tr = document.createElement("tr");
  tr.setAttribute("id", id);

  return tr;
}

function createTableCell(child) {
  const td = document.createElement("td");
  td.appendChild(child);

  return td;
}

function addContentToRow(child, row) {
  row.appendChild(createTableCell(child));
}

function createImg(src, alt) {
  let img = document.createElement("img");
  img.src = src;
  img.alt = alt;

  return img;
}

function createText(text) {
  return document.createTextNode(text);
}

function createAnchor(href, innerContent) {
  let anchor = document.createElement("a");
  anchor.href = href;
  anchor.appendChild(innerContent);

  return anchor;
}

function createTime(formatted) {
  let temp = formatted.split("/");
  parseInt(temp[0]) < 10 ? (temp[0] = "0" + temp[0]) : temp[0];
  temp = `${temp[2]}-${temp[0]}-${temp[1]}`;

  const time = document.createElement("time");
  time.dateTime = temp;
  time.appendChild(createText(temp));

  return time;
}

function toYesNo(value) {
  let result;
  value === true ? (result = "Yes") : (result = "No");

  return result;
}

function buildRowForObservation(observation) {
  const row = createTableRow(observation.id);

  const photo = createImg(observation.photoUrl, observation.name);

  const observationLink = createAnchor(observation.uri, photo);
  addContentToRow(observationLink, row);

  const time = createTime(observation.date.toLocaleDateString());
  addContentToRow(time, row);

  const name = createText(observation.name);
  const wikipediaLink = createAnchor(observation.wikipediaUrl, name);
  addContentToRow(wikipediaLink, row);

  ["isEndangered", "isNative", "isThreatened", "isIntroduced"].forEach(
    (characteristic) => {
      const yesNoText = toYesNo(observation[characteristic]);
      const yesNoNode = createText(yesNoText);
      addContentToRow(yesNoNode, row);
    }
  );

  return row;
}
*/

// ================================================================================================
// ================================== JS for CARD (Assignmnet 5) ==================================
// ================================================================================================
/*
// Remove all content from the card container
function clearAllCards() {
  document.querySelector("#observation-cards").innerHTML = "";
}

// add the each cards to card container
function addEachCard(div) {
  document.getElementById("observation-cards").appendChild(div);
}

function updateCardTitle(title) {
  document.querySelector("#table-title span").innerText = title;
}

// Create the new card with the specified id value and class name.
function createDiv(id) {
  const div = document.createElement("div");
  div.setAttribute("class", "card");
  div.setAttribute("id", id);

  return div;
}

// Creates the card image container with spcified class name
function cardImg(url) {
  const div = document.createElement("div");
  div.setAttribute("class", "card-img");
  url = url.replace(/square/gi, "medium");
  div.style.backgroundImage = `url( ${url} )`;

  return div;
}

// Creates the card body container with spcified class name
function cardBody(name, date, uri, wikipediaUrl) {
  const div = document.createElement("div");
  div.setAttribute("class", "card-body");

  const _h3 = document.createElement("h3");
  _h3.appendChild(createAnchor(wikipediaUrl, createText(name)));
  div.appendChild(_h3);

  const _h4 = document.createElement("h4");
  _h4.appendChild(createAnchor(uri, createText(date)));
  div.appendChild(_h4);

  return div;
}

// Creates the card icon container with spcified class name
function cardIcons(isNative, isIntroduced, isThreatened, isEndangered) {
  const div = document.createElement("div");
  div.setAttribute("class", "card-icons");

  if (!!isNative) {
    let _i = document.createElement("i");
    _i.setAttribute("class", "fas fa-leaf");
    _i.setAttribute("title", "Native");
    div.appendChild(_i);
  }

  if (!!isIntroduced) {
    let _i = document.createElement("i");
    _i.setAttribute("class", "fas fa-frog");
    _i.setAttribute("title", "Introduced");
    div.appendChild(_i);
  }

  if (!!isThreatened) {
    let _i = document.createElement("i");
    _i.setAttribute("class", "fas fa-radiation-alt");
    _i.setAttribute("title", "Threatened");
    div.appendChild(_i);
  }

  if (!!isEndangered) {
    let _i = document.createElement("i");
    _i.setAttribute("class", "fas fa-skull-crossbones");
    _i.setAttribute("title", "Endangered");
    div.appendChild(_i);
  }

  return div;
}

function buildCardForObservation(observation) {
  // create a div container with id
  const div = createDiv(observation.id);

  // create a img div container
  const img = cardImg(observation.photoUrl);
  div.appendChild(img);

  // create a body div container
  const div_cardBody = cardBody(
    observation.name,
    observation.date.toLocaleDateString(),
    observation.uri,
    observation.wikipediaUrl
  );
  div.appendChild(div_cardBody);

  // create a icon div container
  const div_cardIcons = cardIcons(
    observation.isNative,
    observation.isIntroduced,
    observation.isThreatened,
    observation.isEndangered
  );
  div.appendChild(div_cardIcons);

  return div;
}
*/
