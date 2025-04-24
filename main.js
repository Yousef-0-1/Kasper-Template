let btn = document.querySelector(".top");

window.onscroll = () => {
  if (window.scrollY >= 800) {
    btn.style.display = "block";
  } else {
    btn.style.display = "none";
  }
};
