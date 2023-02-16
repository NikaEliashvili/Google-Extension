let myLeads = [];
const inputEl = document.getElementById("input-el");
const inputBtn = document.getElementById("input-btn");
const ulEl = document.getElementById("ul-el");
let saved = document.getElementById("saved");
const clearBtn = document.getElementById("clear-btn");
const cleared = document.getElementById("cleared");
const savetabBtn = document.getElementById("savetab-btn");
const savedtab = document.getElementById("savedtab");

const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"));

cleared.style.visibility = "hidden";
saved.style.visibility = "hidden";
savedtab.style.visibility = "hidden";
clearBtn.style.visibility = "visible";
savetabBtn.style.visibility = "visible";
inputBtn.style.visibility = "visible";

if (leadsFromLocalStorage) {
  myLeads = leadsFromLocalStorage;
  render(myLeads);
}
// SAVING ACTIVE TAB LINK
savetabBtn.addEventListener("click", function () {
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    myLeads.push(tabs[0].url);
    localStorage.setItem("myLeads", JSON.stringify(myLeads));
    render(myLeads);
  });
});

// rendering of leads
function render(leads) {
  let listItems = "";
  for (let i = 0; i < leads.length; i++) {
    listItems += `<li><a target="_blank" href=${leads[i]} >${leads[i]} </a></li>`;
  }
  ulEl.innerHTML = listItems;
}

//clearing
clearBtn.addEventListener("click", function () {
  localStorage.clear();
  myLeads = [];
  ulEl.textContent = "";
});

// saving and printing
inputBtn.addEventListener("click", function () {
  if (inputEl.value) {
    myLeads.push(inputEl.value);
    inputEl.value = "";
    localStorage.setItem("myLeads", JSON.stringify(myLeads));
    render(myLeads);
  }
});

savetabBtn.addEventListener("click", function () {});

// "cleared" NOTIFICATION
clearBtn.addEventListener("click", function () {
  clearBtn.style.visibility = "hidden";
  setTimeout(function () {
    cleared.style.visibility = "visible";
  }, 350);

  setTimeout(function () {
    cleared.style.visibility = "hidden";
    clearBtn.style.visibility = "visible";
  }, 990);
});

// "saved" NOTIFICATION ( inputBtn and saved)
inputBtn.addEventListener("click", function () {
  inputBtn.style.visibility = "hidden";
  setTimeout(function () {
    saved.style.visibility = "visible";
  }, 350);

  setTimeout(function () {
    saved.style.visibility = "hidden";
    inputBtn.style.visibility = "visible";
  }, 990);
});
// "Saved Tab" NOTIFICATION
savetabBtn.addEventListener("click", function () {
  savetabBtn.style.visibility = "hidden";
  setTimeout(function () {
    savedtab.style.visibility = "visible";
  }, 350);

  setTimeout(function () {
    savedtab.style.visibility = "hidden";
    savetabBtn.style.visibility = "visible";
  }, 990);
});
