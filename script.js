let css = document.querySelector("h3");
let color1 = document.querySelector(".color1");
let color2 = document.querySelector(".color2");

let body = document.getElementById("gradient");

console.log(color1);
console.log(color2.value);

function changeBackground() {
  body.style.background = `linear-gradient(to right, ${color1.value}, ${color2.value})`;
  console.log(color2.value);
}

color1.addEventListener("input", changeBackground);

color2.addEventListener("input", changeBackground);


// bottom right gradient direction sample

let brGradient = document.getElementById("br-gradient");
let brColor1 = document.querySelector(".br1-color");
let brColor2 = document.querySelector(".br2-color");

function brGradientBg() {
  brGradient.style.background = `linear-gradient(to bottom right, ${brColor1.value}, ${brColor2.value})`;
}

brColor1.addEventListener("input", brGradientBg);
brColor2.addEventListener("input", brGradientBg);


