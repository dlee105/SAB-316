// https://www.canva.com/design/DAFrivz5SU8/iMU_mM_m1Ecy86yalZmQCQ/view
// PROJECT HEAVILY INSPIRED BY LOUISVUITTON'S WEBSITE :)

// Element queries
//General Els
let fixedNavBar = document.getElementById("fixed-nav");
let headerLinks = document.getElementsByClassName("nav-link");
let rightNavLinkContent = document.getElementsByClassName("nav-link-content");
//-----------------------------------------------------------------------------//
//Nav Links Els
//Right Links
let contactLinkEl = document.getElementById("contact");
let notificationLinkEl = document.getElementById("notification");
let myPershLinkEl = document.getElementById("myPersh");
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
  console.log(event.target);
  let content = document.createElement("div");

  rightNavLinkContent.appendChild(content);
}

function handleNotificationLink(event) {
  event.preventDefault();
  console.log(event.target);
}
function handleMyPerschLink(event) {
  event.preventDefault();

  let content = document.createElement("div");
  let boxheader = document.createElement("div");
  let loginText = document.createElement("p");
  let closeBtn = document.createElement("button");
  //CSS
  closeBtn.type = "button";
  closeBtn.classList.add("btn-close");
  closeBtn.ariaLabel = "Close";

  loginText.innerText = "Login";
  boxheader.appendChild(loginText);
  boxheader.appendChild(closeBtn);
  content.appendChild(boxheader);

  let bootstrapClass = ["d-flex"];
  content.classList.add(...bootstrapClass);
  content.style.width = "100%";

  rightNavLinkContent[0].appendChild(content);
  console.log(rightNavLinkContent[0]);
}

// <----------------------------------------------//

console.log(fixedNavBar);

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
