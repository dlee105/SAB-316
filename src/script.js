// https://www.canva.com/design/DAFrivz5SU8/iMU_mM_m1Ecy86yalZmQCQ/view
// PROJECT HEAVILY INSPIRED BY LOUISVUITTON'S WEBSITE :)

// Element queries
//General Els
let allcontent = document.querySelector("main");
let fixedNavBar = document.getElementById("fixed-nav");
let headerLinks = document.getElementsByClassName("nav-link");
let rightNavLinkContent = document.getElementById("nav-link-cont");
let backdropEl = document.getElementById("backdrop");
//-----------------------------------------------------------------------------//
//Nav Links Els
//Right Links
let contactLinkEl = document.getElementById("contact");
let notificationLinkEl = document.getElementById("notification");
let myPershLinkEl = document.getElementById("myPersh");
let rightFormCloseBtn = document.getElementById("closebtn");
//Left Links
let menLinkEl = document.getElementById("menNavLink");
let womenLinkEl = document.getElementById("womenNavLink");
let kidsLinkEl = document.getElementById("kidsNavLink");
//-----------------------------------------------------------------------------//

// PLAYGROUND ------------------------------------->
// write new code here then transfer below later
contactLinkEl.addEventListener("click", handleContactLink);
notificationLinkEl.addEventListener("click", handleNotificationLink);
myPershLinkEl.addEventListener("click", handleMyPerschLink);

function handleContactLink(event) {
  event.preventDefault();
  rightNavLinkContent.style.zIndex = 1032;
  backdropEl.style.zIndex = 1031;
  clearRightNavContent();
  //console.log(event.target);
  createRightNavLinkHeader("<h5>Contact Us</h5>");
}

function handleNotificationLink(event) {
  event.preventDefault();
  rightNavLinkContent.style.zIndex = 1032;
  backdropEl.style.zIndex = 1031;
  clearRightNavContent();
  createRightNavLinkHeader("<h4>Notifications</h4>");
  //console.log(event.target);
}
function handleMyPerschLink(event) {
  event.preventDefault();
  rightNavLinkContent.style.zIndex = 1032;
  backdropEl.style.zIndex = 1031;
  clearRightNavContent();
  createRightNavLinkHeader("<h4>Access your account</h4>");

  //console.log(rightNavLinkContent[0]);
}
rightNavLinkContent.addEventListener("click", handleRightFormClose);
function handleRightFormClose(event) {
  event.preventDefault();

  //console.log(event.target.id);
  if (event.target.id === "closebtn") {
    console.log("closing");
    rightNavLinkContent.style.zIndex = -2;
    backdropEl.style.zIndex = -2;
  } else {
    return;
  }
  // rightNavLinkContent.style.zIndex = -1;
}

function handleClickOutside(event) {
  event.preventDefault();

  if (event.target.id !== "nav-link-cont" && event.target.id === "backdrop") {
    console.log(event.target);
    rightNavLinkContent.style.zIndex = -2;
    backdropEl.style.zIndex = -2;
  }
}

allcontent.addEventListener("click", handleClickOutside);

// <----------------------------------------------//

//console.log(fixedNavBar);

// Helper functions
function clearRightNavContent() {
  while (rightNavLinkContent.firstElementChild) {
    rightNavLinkContent.firstElementChild.remove();
  }
}

function createRightNavLinkHeader(headerText) {
  let content = document.createElement("div");
  let headerRow = document.createElement("div");
  headerRow.classList.add("row");
  //
  let headerLeft = document.createElement("div");
  headerLeft.classList.add(...["col", "d-flex", "justify-content-start"]);
  headerLeft.innerHTML = headerText;
  headerLeft.style.paddingLeft = "50px";
  //"<h4>Access your account</h4>"
  let headerRight = document.createElement("div");
  headerRight.classList.add(...["col", "d-flex", "justify-content-end"]);
  let closeBtn = document.createElement("button");
  closeBtn.id = "closebtn";
  closeBtn.type = "button";
  closeBtn.classList.add(...["shadow-none", "btn-close"]);
  closeBtn.style.paddingRight = "50px";
  closeBtn.ariaLabel = "Close";
  headerRight.appendChild(closeBtn);
  //
  headerRow.appendChild(headerLeft);
  headerRow.appendChild(headerRight);
  content.appendChild(headerRow);
  rightNavLinkContent.appendChild(content);
}

// Handler Functions
function handleBackgroundEffectEnter(event) {
  event.preventDefault();
  //console.log(event.target.id);
  if (event.target.id === "fixed-nav") {
    // console.log("enter");
    fixedNavBar.style.transition = "all 0.5s ease-out allow-discrete";

    fixedNavBar.style.backgroundColor = "white";
    fixedNavBar.style.color = "black";

    for (let link of headerLinks) {
      //   console.log(link);
      link.classList.remove("link-light");
      link.classList.add("link-dark");
    }
  }
}

function handleBackgroundEffectExit(event) {
  event.preventDefault();
  //console.log(event.target.id);
  if (event.target.id === "fixed-nav") {
    //console.log("exit");
    fixedNavBar.style.transition = "all 0.5s ease-out allow-discrete";
    fixedNavBar.style.backgroundColor = "transparent";
    fixedNavBar.style.color = "white";
    for (let link of headerLinks) {
      // console.log(link);
      link.classList.add("link-light");
      link.classList.remove("link-dark");
    }
  }
}

// Adding Listeners

fixedNavBar.addEventListener("mouseenter", handleBackgroundEffectEnter);
fixedNavBar.addEventListener("mouseleave", handleBackgroundEffectExit);
