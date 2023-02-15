let myLeads = [];
const inputEl = document.getElementById("input-el");
const inputBtn = document.getElementById("input-btn");
const ulEl = document.getElementById("ul-el");
const savedBtn = document.getElementById("saved-btn");
let showed = document.getElementById("showed");
let saved = document.getElementById("saved");
const clearBtn = document.getElementById("clear-btn");
let cleared = document.getElementById("cleared");

cleared.style.visibility = "hidden";
saved.style.visibility = "hidden";
showed.style.visibility = "hidden";

//Showing All Links Before Clearing
savedBtn.addEventListener("click", function () {
  renderLeads();
});

//clearing
clearBtn.addEventListener("click", function () {
  for (i = myLeads.length; i >= 0; i--) {
    myLeads.shift();
  }
  ulEl.textContent = "";
});

// saving and printing
inputBtn.addEventListener("click", function () {
  myLeads.push(inputEl.value);
  inputEl.value = "";
  for (let i = 0; i < myLeads.length; i++) {
    ulEl.innerHTML = `<li><a target="_blank" href=${myLeads[i]} >${myLeads[i]} </a></li>`;
  }
  //renderLeads();
});

// rendering of leads
function renderLeads() {
  let listItems = "";
  for (let i = 0; i < myLeads.length; i++) {
    // Refactor the code below to use a template string
    listItems += `<li><a target="_blank" href=${myLeads[i]} >${myLeads[i]} </a></li>`;
  }
  ulEl.innerHTML = listItems;
}

//"showed" links NOTIFICATION
savedBtn.addEventListener("click", function () {
  showed.style.visibility = "visible";
  setTimeout(function () {
    showed.style.visibility = "hidden";
  }, 390);
});

// "cleared" NOTIFICATION
clearBtn.addEventListener("click", function () {
  cleared.style.visibility = "visible";
  setTimeout(function () {
    cleared.style.visibility = "hidden";
  }, 390);
});

// "saved" NOTIFICATION
inputBtn.addEventListener("click", function () {
  saved.style.visibility = "visible";
  setTimeout(function () {
    saved.style.visibility = "hidden";
  }, 390);
});
