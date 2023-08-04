let stars = document.getElementById("stars");
let moon = document.getElementById("moon");
let mountain = document.getElementById("mountain");
let mountain2 = document.getElementById("mountain2");
let river = document.getElementById("river");
let boat = document.getElementById("boat");
let title = document.querySelector(".title");

window.addEventListener("scroll", function () {
  let value = window.scrollY;

  stars.style.left = value * 0.25 + "px";
  moon.style.top = value * 1.5 + "px";
  mountain.style.top = value * 0.5 + "px";
  mountain2.style.top = value * 0.5 + "px";
  river.style.top = value * 0.15 + "px";
  boat.style.top = value * 0.15 + "px";
  title.style.fontSize = value * +"px";
  if (scrollY >= 67) {
    title.style.fontSize = 67 + "px";
    title.style.position = "fixed";
    if (scrollY >= 400) {
      title.style.display = "none";
    } else {
      title.style.display = "block";
    }
  }
});
