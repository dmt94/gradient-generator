let css = document.querySelector("h3");
let color1 = document.querySelector(".color1");
let color2 = document.querySelector(".color2");

let body = document.getElementById("gradient");

let degreeInput = document.getElementById("preview-angle");
let degreeDisplay = document.getElementById("degree-preview");

function changeBackground() {
  body.style.background = `linear-gradient(180deg, ${color1.value}, ${color2.value})`;
  console.log(color2.value);
}

color1.addEventListener("input", changeBackground);

color2.addEventListener("input", changeBackground);


// degree slider

degreeInput.addEventListener("input", previewDegree);
degreeInput.addEventListener("input", brGradientBg);

function previewDegree() {
  console.log(degreeInput.value);
  degreeDisplay.innerText = degreeInput.value + '°';
}

function grabHex(span, element) {
  span.innerText = `${element.value}`;
}

// gradient direction sample

let brGradient = document.getElementById("br-gradient");
let brColor1 = document.querySelector(".br1-color");
let brColor2 = document.querySelector(".br2-color");
let firstHex = document.getElementById("1-hex");
let secHex = document.getElementById("2-hex");

function brGradientBg() {
  brGradient.style.background = `linear-gradient(${degreeInput.value}deg, ${brColor1.value}, ${brColor2.value})`;
  grabHex(firstHex, brColor1);
  grabHex(secHex, brColor2);
}

brColor1.addEventListener("input", brGradientBg);
brColor2.addEventListener("input", brGradientBg);
