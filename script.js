////////nav oper and close///////////

const navBtnOpen = document.querySelector("#nav-btn");
const navBar = document.querySelector(".navbar");
navBtnOpen.addEventListener("click", () => {
  navBar.classList.add("open");
});

const navBtnClose = document.querySelector("#nav-btn-close");
navBtnClose.addEventListener("click", () => {
  navBar.classList.remove("open");
});
const navLinks = document.querySelectorAll(".nav-link");
navLinks.forEach((navLink) => {
  navLink.addEventListener("click", () => {
    navBar.classList.remove("open");
    console.log("");
  });
});
//////sticky///////

const headerEl = document.querySelector(".header");
const obs = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];

    if (ent.isIntersecting === false) {
      document.body.classList.add("sticky");
    }
    if (ent.isIntersecting === true) {
      document.body.classList.remove("sticky");
    }
  },
  {
    root: null,
    threshold: 0,
    rootMargin: "-80px",
  }
);
obs.observe(headerEl);

// Fixing flexbox gap property missing in some Safari versions
function checkFlexGap() {
  var flex = document.createElement("div");
  flex.style.display = "flex";
  flex.style.flexDirection = "column";
  flex.style.rowGap = "1px";

  flex.appendChild(document.createElement("div"));
  flex.appendChild(document.createElement("div"));

  document.body.appendChild(flex);
  var isSupported = flex.scrollHeight === 1;
  flex.parentNode.removeChild(flex);

  if (!isSupported) document.body.classList.add("no-flexbox-gap");
}
checkFlexGap();

////music////

const musicBtn = document.querySelector("#music-btn");
const musicAudio = document.querySelector("#music");
musicBtn.addEventListener("click", () => {
  if (musicAudio.classList.contains("playing")) {
    musicAudio.pause();
    musicAudio.classList.remove("playing");
  } else {
    musicAudio.play();
    musicAudio.classList.add("playing");
  }
});
