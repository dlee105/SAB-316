// https://www.canva.com/design/DAFrivz5SU8/iMU_mM_m1Ecy86yalZmQCQ/view
// PROJECT HEAVILY INSPIRED BY LOUISVUITTON'S WEBSITE :)

// Requirement Checklists
// I've wrote down some comments
// to help you guys with finding
// specific location of each
// scoring requirements

// use ctrl+f to filter out each req

// Reg1
// Reg2
// Reg3
// Reg4
// Reg5
// Reg6
// Reg7
// Reg8
// Reg9
// RegA
// RegB
// RegC
// RegD
// RegE

// JSONs
const menLeftData = [
  {
    title: "MEN'S JEANS",
    options: [
      { linkName: "Shop All Men's Jeans", href: "/" },
      { linkName: "Straight Jeans", href: "/" },
      { linkName: "Slim Jeans", href: "/" },
      { linkName: "Tapered Jeans", href: "/" },
      { linkName: "Relaxed Jeans", href: "/" },
    ],
  },
  {
    title: "MEN'S CLOTHES",
    options: [
      { linkName: "Shop All Men's Clothes", href: "/" },
      { linkName: "Shirts & T-Shirts", href: "/" },
      { linkName: "Pants & Chinos", href: "/" },
      { linkName: "Outerwear", href: "/" },
      { linkName: "Sweater", href: "/" },
      { linkName: "Shorts", href: "/" },
      { linkName: "Underwear & Socks", href: "/" },
    ],
  },
];

const womenLeftData = [
  {
    title: "WOMEN'S JEANS",
    options: [
      { linkName: "Shop All Women's Jeans", href: "/" },
      { linkName: "Straight Jeans", href: "/" },
      { linkName: "Slim Jeans", href: "/" },
      { linkName: "Taper Jeans", href: "/" },
      { linkName: "Bootcut Jeans", href: "/" },
      { linkName: "Loose Jeans", href: "/" },
      { linkName: "Skinny Jeans", href: "/" },
    ],
  },
  {
    title: "WOMEN'S CLOTHES",
    options: [
      { linkName: "Shop All Women's", href: "/" },
      { linkName: "Tops", href: "/" },
      { linkName: "Pants", href: "/" },
      { linkName: "Outerwear", href: "/" },
      { linkName: "Sweater", href: "/" },
      { linkName: "Dresses & Skirts", href: "/" },
      { linkName: "Accessories", href: "/" },
      { linkName: "Shorts", href: "/" },
      { linkName: "Underwear & Socks", href: "/" },
    ],
  },
];

const kidsLeftData = [
  {
    title: "KIDS' CLOTHES",
    options: [
      { linkName: "Shop All Kids", href: "/" },
      { linkName: "Boy (8-20)", href: "/" },
      { linkName: "Little Boys (4-7x)", href: "/" },
      { linkName: "Girl (7-16)", href: "/" },
      { linkName: "Little Girls (7-16)", href: "/" },
      { linkName: "Toddler", href: "/" },
      { linkName: "Baby", href: "/" },
    ],
  },
  {
    title: "FEATURES",
    options: [
      { linkName: "Original Jeans", href: "/" },
      { linkName: "Original Outerwears", href: "/" },
      { linkName: "Original Tops", href: "/" },
    ],
  },
];

// Element queries
//*********************************************************** */
//*********************************************************** */
//*********************************************************** */
//*********************************************************** */
//*********************************************************** */
//*********************************************************** */
//*********************************************************** */
//*********************************************************** */

//General Els

let allcontent = document.querySelector("main"); //Reg2
let fixedNavBar = document.getElementById("fixed-nav"); //Reg1
let headerLinks = document.getElementsByClassName("nav-link"); //Reg4 see below
let rightNavLinkContent = document.getElementById("nav-link-cont-r");
let backdropEl = document.getElementById("backdrop");
let leftNavLinkContent = document.getElementById("nav-link-cont-l");
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
//*********************************************************** */
//*********************************************************** */
//*********************************************************** */
//*********************************************************** */

// write new code here then transfer below later {}

//*********************************************************** */
//*********************************************************** */
//*********************************************************** */
//*********************************************************** */
// <----------------------------------------------//

//console.log(fixedNavBar);

// Helper functions
//*********************************************************** */
//*********************************************************** */
//*********************************************************** */
//*********************************************************** */
//*********************************************************** */
//*********************************************************** */
//*********************************************************** */
//*********************************************************** */

function clearRightNavContent() {
  while (rightNavLinkContent.firstElementChild) {
    rightNavLinkContent.firstElementChild.remove();
  }
}

function clearLeftNavContent() {
  while (leftNavLinkContent.firstElementChild) {
    leftNavLinkContent.firstElementChild.remove();
  }
}

function createRightNavLinkHeader(headerText) {
  let content = document.createElement("div"); //Reg5
  let headerRow = document.createElement("div");
  headerRow.classList.add("row");
  //
  let headerLeft = document.createElement("div");
  headerLeft.classList.add(...["col", "d-flex", "justify-content-start"]);
  headerLeft.innerHTML = headerText; //Reg7
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
  headerRight.appendChild(closeBtn); //Reg6
  //
  headerRow.appendChild(headerLeft);
  headerRow.appendChild(headerRight);
  content.appendChild(headerRow);
  rightNavLinkContent.appendChild(content);
}

function fixedNavTransform(status) {
  //helper

  if (status === "open") {
    fixedNavBar.style.transition = "all 0.5s ease-out allow-discrete";
    fixedNavBar.style.backgroundColor = "white";
    fixedNavBar.style.color = "black";
    fixedNavBar.style.borderBottom = "1px solid whitesmoke";
    for (let link of headerLinks) {
      //Reg4
      //   console.log(link);
      link.classList.remove("link-light");
      link.classList.add("link-dark");
    }
  } else if (status === "close") {
    fixedNavBar.style.transition = "all 0.5s ease-out allow-discrete";
    fixedNavBar.style.backgroundColor = "transparent";
    fixedNavBar.style.color = "white";
    fixedNavBar.style.borderBottom = "none";
    for (let link of headerLinks) {
      //Reg4
      // console.log(link);
      link.classList.add("link-light");
      link.classList.remove("link-dark");
    }
  }
}

function createLeftNavLinkHeader(headerText) {
  //helper

  let content = document.createElement("div");
  let header = document.createElement("div");

  content.classList.add(
    ...[
      "container-fluid",
      "d-flex",
      "text-dark",
      "align-items-center",
      "justify-content-center",
    ]
  );
  header.innerHTML = headerText;
  content.id = "leftFormHeader";

  content.style.borderBottom = "1px solid #D3D3D3";
  let closeBtn = document.createElement("button");
  closeBtn.id = "closebtn";
  closeBtn.type = "button";
  closeBtn.classList.add(...["shadow-none", "btn-close"]);
  closeBtn.style.position = "absolute";
  closeBtn.style.right = "30px";
  closeBtn.style.top = "15px";
  closeBtn.ariaLabel = "Close";

  content.appendChild(header);
  leftNavLinkContent.appendChild(closeBtn);
  leftNavLinkContent.appendChild(content);
}

// Handler Functions
//*********************************************************** */
//*********************************************************** */
//*********************************************************** */
//*********************************************************** */
//*********************************************************** */
//*********************************************************** */
//*********************************************************** */
//*********************************************************** */
function handleBackgroundEffectEnter(event) {
  event.preventDefault();
  //console.log(event.target.id);
  fixedNavTransform("open");
}

function handleBackgroundEffectExit(event) {
  event.preventDefault();
  if (!leftNavLinkContent.classList.contains("on") && window.scrollY === 0) {
    fixedNavTransform("close");
  }
}

function handleContactLink(event) {
  event.preventDefault();
  rightNavLinkContent.style.zIndex = 1032;
  rightNavLinkContent.style.width = "100%";
  backdropEl.style.zIndex = 1031;
  backdropEl.style.width = "100%";
  backdropEl.style.height = "100%";
  clearRightNavContent();
  //console.log(event.target);
  createRightNavLinkHeader("<h5>Contact Us</h5>");
}

function handleNotificationLink(event) {
  event.preventDefault();
  rightNavLinkContent.style.zIndex = 1032;
  rightNavLinkContent.style.width = "100%";
  backdropEl.style.zIndex = 1031;
  backdropEl.style.width = "100%";
  backdropEl.style.height = "100%";

  clearRightNavContent();
  createRightNavLinkHeader("<h4>Notifications</h4>");
  //console.log(event.target);
}
function handleMyPerschLink(event) {
  event.preventDefault();
  rightNavLinkContent.style.zIndex = 1032;
  rightNavLinkContent.style.width = "100%";
  backdropEl.style.zIndex = 1031;
  backdropEl.style.width = "100%";
  backdropEl.style.height = "100%";

  clearRightNavContent();
  createRightNavLinkHeader("<h4>Access your account</h4>");

  //console.log(rightNavLinkContent[0]);
}

function handleRightFormClose(event) {
  event.preventDefault();

  //console.log(event.target.id);
  if (event.target.id === "closebtn") {
    console.log("closing");
    rightNavLinkContent.style.zIndex = -2;
    rightNavLinkContent.style.width = "0";
    backdropEl.style.width = "0%";
    backdropEl.style.height = "0%";
  } else {
    return;
  }
  // rightNavLinkContent.style.zIndex = -1;
}

function handleClickOutside(event) {
  event.preventDefault();
  //console.log(event.target);

  if (event.target.id !== "nav-link-cont" && event.target.id === "backdrop") {
    //console.log(event.target);
    rightNavLinkContent.style.zIndex = -2;
    rightNavLinkContent.style.width = "0";
    backdropEl.style.width = "0%";
    backdropEl.style.height = "0%";
  }
}

function handleFixNavScroll(event) {
  event.preventDefault();
  //console.log(1);
  if (window.scrollY > 0 || leftNavLinkContent.classList.contains("on")) {
    fixedNavTransform("open");
  } else {
    fixedNavTransform("close");
  }
}

function handleClickOutsideLeft(event) {
  event.preventDefault();
  //console.log("test", event.target, event.target.id);
  console.log(leftNavLinkContent.classList.contains("on"));

  const allowed = [
    "menNavLink",
    "womenNavLink",
    "kidsNavLink",
    "leftFormHeader",
    "nav-link-cont-l",
    "leftFormHText",
    "header",
    "main-logo",
  ];
  if (!allowed.includes(event.target.id)) {
    leftNavLinkContent.classList.remove("on");
    leftNavLinkContent.style.zIndex = -2;
    leftNavLinkContent.style.width = "0";

    if (window.scrollY === 0) {
      fixedNavTransform("close");
    } else if (window.scrollY > 0) {
      fixedNavTransform("on");
    }
  }
}

function handleLeftFormClose(event) {
  //handler
  event.preventDefault();

  //console.log(event.target.id);
  if (event.target.id === "closebtn") {
    if (window.scrollY === 0) {
      leftNavLinkContent.classList.remove("on");
    }
    fixedNavTransform("open");
    console.log("closing");
    leftNavLinkContent.style.zIndex = -2;
    leftNavLinkContent.style.width = "0";

    // backdropEl.style.width = "0%";
    // backdropEl.style.height = "0%";
  } else {
    return;
  }
  // rightNavLinkContent.style.zIndex = -1;
}

function handleMenLink(event) {
  event.preventDefault();
  leftNavLinkContent.style.zIndex = 1032;
  leftNavLinkContent.style.width = "100%";
  leftNavLinkContent.classList.add("on");
  fixedNavTransform("open");
  clearLeftNavContent();
  createLeftNavLinkHeader(`<h5 id="leftFormHText">Testing1</h5>`);
}
function handleWomenLink(event) {
  event.preventDefault();
  leftNavLinkContent.style.zIndex = 1032;
  leftNavLinkContent.style.width = "100%";
  leftNavLinkContent.classList.add("on");
  fixedNavTransform("open");
  clearLeftNavContent();
  createLeftNavLinkHeader(`<h5 id="leftFormHText">Testing2</h5>`);
}
function handleKidsLink(event) {
  event.preventDefault();
  leftNavLinkContent.style.zIndex = 1032;
  leftNavLinkContent.style.width = "100%";

  leftNavLinkContent.classList.add("on");
  fixedNavTransform("open");
  clearLeftNavContent();
  createLeftNavLinkHeader(`<h5 id="leftFormHText">Testing3</h5>`);
}

// Adding Listeners
//*********************************************************** */
//*********************************************************** */
//*********************************************************** */
//*********************************************************** */
//*********************************************************** */
//*********************************************************** */
//*********************************************************** */
//*********************************************************** */

//General
fixedNavBar.addEventListener("mouseenter", handleBackgroundEffectEnter);
fixedNavBar.addEventListener("mouseleave", handleBackgroundEffectExit);
window.addEventListener("scroll", handleFixNavScroll);
window.addEventListener("click", handleClickOutsideLeft);
allcontent.addEventListener("click", handleClickOutside);

// Right Links
contactLinkEl.addEventListener("click", handleContactLink);
notificationLinkEl.addEventListener("click", handleNotificationLink);
myPershLinkEl.addEventListener("click", handleMyPerschLink);
rightNavLinkContent.addEventListener("click", handleRightFormClose);

// Left Links
leftNavLinkContent.addEventListener("click", handleLeftFormClose);
menLinkEl.addEventListener("click", handleMenLink);
womenLinkEl.addEventListener("click", handleWomenLink);
kidsLinkEl.addEventListener("click", handleKidsLink);
