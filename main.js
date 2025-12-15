let btn = document.querySelector(".top");
let changeColorLeft = document.getElementById(`left`);
let changeColorRight = document.getElementById(`right`);
let backgroundImgLanding = document.querySelector(`.landing`);
let bullets = document.querySelectorAll(`.bullet`);
window.onscroll = () => {
  if (window.scrollY >= 800) {
    btn.style.display = "block";
  } else {
    btn.style.display = "none";
  }
};
let i = 1;
function changeColorHandler() {
  switch (((i % 3) + 3) % 3) {
    case 0:
      document.documentElement.style.setProperty(`--main-color`, `#fa1919`);
      document.documentElement.style.setProperty(`--button-hover`, `#e41b1b`);
      document.documentElement.style.setProperty(
        `--transparent-color`,
        `#fa191966`
      );
      backgroundImgLanding.style.cssText = `background-image:url(images/skull.webp)`;
      break;
    case 1:
      document.documentElement.style.setProperty(`--main-color`, `#19c8fa`);
      document.documentElement.style.setProperty(`--button-hover`, `#1bb9e4`);
      document.documentElement.style.setProperty(
        `--transparent-color`,
        `#19c8fa66`
      );
      backgroundImgLanding.style.cssText = `background-image:url(images/landing.webP)`;
      break;
    case 2:
      document.documentElement.style.setProperty(`--main-color`, `#6dfa19`);
      document.documentElement.style.setProperty(`--button-hover`, `#4ae41b`);
      document.documentElement.style.setProperty(
        `--transparent-color`,
        `#6dfa1966`
      );
      backgroundImgLanding.style.cssText = `background-image:url(images/pic-for-box.png)`;
      break;
  }
  bullets.forEach((e) => {
    e.classList.remove("active");
  });
  bullets[((i % 3) + 3) % 3].classList.add("active");
}
changeColorRight.addEventListener(`click`, () => {
  i += 1;
  changeColorHandler();
});
changeColorLeft.addEventListener(`click`, () => {
  i -= 1;
  changeColorHandler();
});
bullets.forEach((e) => {
  e.onclick = () => {
    i = e.dataset.num;
    changeColorHandler();
  };
});
