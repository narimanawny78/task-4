let span = document.querySelector(".up");

window.onscroll = function () {
  this.scrollY >= 110 ? span.classList.add("show") : span.classList.remove("show");
};

span.onclick = function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};