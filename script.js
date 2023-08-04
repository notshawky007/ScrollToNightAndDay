// JavaScript
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

  // Parallax effect for the boat (move in the opposite direction of scroll)
  boat.style.top = value * -0.15 + "px";

  // Change background color based on scroll position
  const maxScroll = 1000; // Adjust the maximum scroll value to change the background color
  const backgroundColor = `rgba(255, 0, 0, ${value / maxScroll})`; // Change red color based on scroll position
  document.body.style.backgroundColor = backgroundColor;

  // Set the initial font size of the title
  title.style.fontSize = "20px";

  if (scrollY >= 400) {
    // Set the title's font size to a fixed value when the scroll position exceeds 400
    title.style.fontSize = "30px";
    title.style.position = "fixed";
    title.style.top = "0";
    title.style.left = "50%";
    title.style.transform = "translateX(-50%)";

    // Hide the title when the scroll position exceeds 400
    title.style.display = "none";
  } else {
    title.style.display = "block";
    title.style.position = "static";
  }
});
