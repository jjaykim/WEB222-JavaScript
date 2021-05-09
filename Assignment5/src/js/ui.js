// ================================================================================================
// ================================== JS for TABLE (Assignmnet 4) =================================
// ================================================================================================
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

// ================================================================================================
// ================================== JS for CARD (Assignmnet 5) ==================================
// ================================================================================================
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
