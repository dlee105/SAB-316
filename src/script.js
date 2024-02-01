// https://www.canva.com/design/DAFrivz5SU8/iMU_mM_m1Ecy86yalZmQCQ/view
// PROJECT HEAVILY INSPIRED BY LOUISVUITTON'S WEBSITE :)

// Requirement Checklists
// I've wrote down some comments
// to help you guys with finding
// the specific locations of each
// scoring requirements

// use ctrl+f to filter out each requirement *I misspelled req for reg :)*

// Reg1 - Cache at least one element using selectElementById.
// Reg2 - Cache at least one element using querySelector or querySelectorAll.
// Reg3 - Use the parent-child-sibling relationship to navigate between elements at least once (firstChild, lastChild, parentNode, nextElementSibling, etc.).
// Reg4 - Iterate over a collection of elements to accomplish some task.
// Reg5 - Create at least one element using createElement.
// Reg6 - Use appendChild and/or prepend to add new elements to the DOM.
// Reg7 - Use the DocumentFragment interface or HTML templating with the cloneNode method to create templated content.
// Reg8 - Modify the HTML or text content of at least one element in response to user interaction using innerHTML, innerText, or textContent.
// Reg9 - Modify the style and/or CSS classes of an element in response to user interactions using the style or classList properties.
// RegA - Modify at least one attribute of an element in response to user interaction.
// RegB - Register at least two different event listeners and create the associated event handler functions.
// RegC - Use at least two Browser Object Model (BOM) properties or methods.
// (incomplete) RegD - Include at least one form and/or input with HTML attribute validation.
// (incomplete) RegE - Include at least one form and/or input with DOM event-based validation. (This can be the same form or input as the one above, but should include event-based validation in addition to the HTML attribute validation.)
// https://www.w3schools.com/js/js_validation.asp

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
  headerLeft.innerHTML = headerText; //
  headerLeft.style.paddingLeft = "50px"; //Reg9 (ctrl+f ".style")
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

  //content.style.borderBottom = "1px solid #D3D3D3";
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

function rightLinksFormOpen() {
  //helper
  rightNavLinkContent.style.zIndex = 1032;
  rightNavLinkContent.style.width = "100%";
  backdropEl.style.zIndex = 1031;
  backdropEl.style.width = "100%";
  backdropEl.style.height = "100%";
}

function rightLinkFormClose() {
  //helper
  rightNavLinkContent.style.zIndex = -2;
  rightNavLinkContent.style.width = "0";
  backdropEl.style.width = "0%";
  backdropEl.style.height = "0%";
}

function buildDocFrag(data, target) {
  // helper
  let docFrag = document.createDocumentFragment(); //Reg7
  let contentBox = document.createElement("div");
  contentBox.classList.add(...["container", "h-100"]);
  let mainRow = document.createElement("div");
  mainRow.classList.add(...["row"]);

  for (const obj of data) {
    //console.log(obj);
    let col = document.createElement("div");
    let colHeader = document.createElement("div");
    let unorderedList = document.createElement("ul");
    unorderedList.style.listStyleType = "none";
    unorderedList.style.padding = "0";
    col.classList.add("col");
    colHeader.classList.add(...["text-start", "pt-3"]);
    colHeader.innerHTML = `<h5><strong>${obj.title}</strong></h5>`; // Reg8
    col.appendChild(colHeader);

    for (const op of obj.options) {
      let section = document.createElement("li");
      let link = document.createElement("a");
      link.setAttribute("href", op.href); //RegA
      link.textContent = op.linkName;
      link.classList.add(
        ...[
          "link-dark",
          "link-underline-opacity-0",
          "link-opacity-100-hover",
          "text-decoration-none",
          "special-link",
        ]
      );
      section.appendChild(link);
      unorderedList.appendChild(section);
    }
    col.appendChild(unorderedList);
    mainRow.appendChild(col);
  }
  mainRow.style.borderTop = "1px solid #D3D3D3";
  mainRow.style.height = "75%";
  contentBox.appendChild(mainRow);
  contentBox.appendChild(buildLeftFormFooter(target));
  contentBox.id = "leftBody";

  //contentBox.style.borderBottom = "1px solid #D3D3D3";
  docFrag.appendChild(contentBox);
  return docFrag;
}

function buildLeftFormFooter(target) {
  //Sale
  //New Arrivals
  //Bestsellers

  const links = [
    `${target} Sale`,
    `${target} New Arrivals`,
    `${target} Bestsellers`,
  ];
  let r = document.createElement("div");
  r.classList.add(...["row", "pt-3", "pb-3", "align-items-end"]);
  for (const l of links) {
    let c = document.createElement("div");
    let link = document.createElement("a");
    link.setAttribute("href", "/"); // change in future
    link.innerHTML = `<h7 class="footer-link">${l}</h7>`;
    link.classList.add(
      ...[
        "link-info",
        "link-underline-opacity-0",
        "link-opacity-50-hover",
        "text-decoration-none",
      ]
    );
    c.classList.add(...["col"]);
    c.appendChild(link);
    r.appendChild(c);
  }
  r.style.borderTop = "1px solid #D3D3D3";
  r.style.borderBottom = "1px solid #D3D3D3";
  r.id = "leftFooter";

  // padding-right: calc(var(--bs-gutter-x) * .5);
  //   padding-left: calc(var(--bs-gutter-x) * .5);

  return r;
}

function isDescendant(parent, child) {
  // reg3
  var node = child.parentNode;
  //console.log(node);
  let c = 1;
  while (node != null) {
    //console.log(c, node);
    if (node == parent) {
      return true;
    }
    node = node.parentNode;
    c++;
  }

  return false;
}

// Handler Functions //RegB
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
    //RegC
    fixedNavTransform("close");
  }
}

function handleContactLink(event) {
  event.preventDefault();
  rightLinksFormOpen();
  clearRightNavContent();
  //console.log(event.target);
  createRightNavLinkHeader("<h5>Contact Us</h5>");
}

function handleNotificationLink(event) {
  event.preventDefault();
  rightLinksFormOpen();
  clearRightNavContent();
  createRightNavLinkHeader("<h4>Notifications</h4>");
  //console.log(event.target);
}
function handleMyPerschLink(event) {
  event.preventDefault();
  rightLinksFormOpen();
  clearRightNavContent();
  createRightNavLinkHeader("<h4>Access your account</h4>");

  //console.log(rightNavLinkContent[0]);
}

function handleRightFormClose(event) {
  event.preventDefault();

  //console.log(event.target.id);
  if (event.target.id === "closebtn") {
    rightLinkFormClose();
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
    rightLinkFormClose();
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
  const allowed = [
    "menNavLink",
    "womenNavLink",
    "kidsNavLink",
    "leftFormHeader",
    "nav-link-cont-l",
    "leftFormHText",
    "header",
    "main-logo",
    "leftBody",
    "leftFooter",
  ];

  if (
    event.target.classList.contains("special-link") ||
    event.target.classList.contains("footer-link") ||
    (!allowed.includes(event.target.id) &&
      !isDescendant(leftNavLinkContent, event.target))
  ) {
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
  createLeftNavLinkHeader(`<h5 id="leftFormHText">EXPLORE THE MEN SHOP</h5>`);

  // DocFrag
  leftNavLinkContent.appendChild(buildDocFrag(menLeftData, "Men's"));
  //leftNavLinkContent.appendChild(buildLeftFormFooter("Men's"));
}

function handleWomenLink(event) {
  event.preventDefault();
  leftNavLinkContent.style.zIndex = 1032;
  leftNavLinkContent.style.width = "100%";
  leftNavLinkContent.classList.add("on");
  fixedNavTransform("open");
  clearLeftNavContent();
  createLeftNavLinkHeader(`<h5 id="leftFormHText">EXPLORE THE WOMEN SHOP</h5>`);
  leftNavLinkContent.appendChild(buildDocFrag(womenLeftData, "Women's"));
  //leftNavLinkContent.appendChild(buildLeftFormFooter("Women's"));
}
function handleKidsLink(event) {
  event.preventDefault();
  leftNavLinkContent.style.zIndex = 1032;
  leftNavLinkContent.style.width = "100%";
  leftNavLinkContent.classList.add("on");
  fixedNavTransform("open");
  clearLeftNavContent();
  createLeftNavLinkHeader(`<h5 id="leftFormHText">EXPLORE THE KIDS SHOP</h5>`);
  leftNavLinkContent.appendChild(buildDocFrag(kidsLeftData, "Kids'"));
  //leftNavLinkContent.appendChild(buildLeftFormFooter("Kids'"));
}

// Adding Listeners //RegB
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
