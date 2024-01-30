// https://www.canva.com/design/DAFrivz5SU8/iMU_mM_m1Ecy86yalZmQCQ/view

// Element queries
const fixedNavBar = document.getElementById("fixed-nav");
const headerLinks = document.querySelectorAll("a");

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
