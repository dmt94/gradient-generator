let css = document.querySelector("h3");
let color1 = document.querySelector(".color1");
let color2 = document.querySelector(".color2");

let body = document.getElementById("gradient");

let degreeInput = document.getElementById("preview-angle");
let degreeDisplay = document.getElementById("degree-preview");


let bgDegreeInput = document.getElementById("main-bg-slider");
let bgDegreeDisplay = document.getElementById("bg-degree-preview");

let rnBgButton = document.getElementById('random-bg-button');



function changeBackground() {
  body.style.background = `linear-gradient(${bgDegreeInput.value}deg, ${color1.value}, ${color2.value})`;
  css.textContent = `background: linear-gradient(${bgDegreeInput.value}deg, ${color1.value}, ${color2.value})`;
}

color1.addEventListener("input", changeBackground);
color2.addEventListener("input", changeBackground);

rnBgButton.addEventListener("click", changebgRandom);



function changebgRandom() {
  let randomColorOne = Math.floor(Math.random()*16777215).toString(16);
  let randomColorTwo = Math.floor(Math.random()*16777215).toString(16);
  let randomDegree = Math.floor(Math.random() * 360);
  body.style.background = `linear-gradient(${randomDegree}deg, #${randomColorOne}, #${randomColorTwo})`;
  css.textContent = `background: linear-gradient(${randomDegree}deg, #${randomColorOne}, #${randomColorTwo})`;
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
brColor1.addEventListener("input", changeLinearGradientCode);
brColor2.addEventListener("input", brGradientBg);
brColor2.addEventListener("input", changeLinearGradientCode);


// generated code

function displayLinearGradientCode(color1, color2, deg) {
  return `background: linear-gradient(${deg.value}deg, ${color1.value}, ${color2.value})`;
}

let linearGradientCode = document.getElementById("generated-code");

function changeLinearGradientCode() {
  linearGradientCode.innerText = displayLinearGradientCode(brColor1, brColor2, degreeInput);
}

// degree slider

degreeInput.addEventListener("input", previewDegree);
degreeInput.addEventListener("input", brGradientBg);
degreeInput.addEventListener("input", changeLinearGradientCode);

function previewDegree() {
  degreeDisplay.innerText = degreeInput.value + `°`;
}

function grabHex(span, element) {
  span.innerText = `${element.value}`;
}

function previewBgDegree() {
  bgDegreeDisplay.innerText = bgDegreeInput.value + `°`;
}

bgDegreeInput.addEventListener("input", previewBgDegree);
bgDegreeInput.addEventListener("input", changeBackground);


// copy paste
let copyBtn = document.getElementById('gradient-copy-btn');

function copyPaste() {
  /* Alert the copied text */

  let copyText = document.createElement("input");                  
  copyText.style="display:none";
  copyText.value  = linearGradientCode.innerText;
  copyText.setAttribute('id', 'copyTextId')     
  document.body.appendChild(copyText); 

  let copyTextSelect = document.getElementById("copyTextId");
  copyTextSelect.select();
  copyTextSelect.setSelectionRange(0, 99999); /*For mobile devices*/
  navigator.clipboard.writeText(copyTextSelect.value).then(() => {
    console.log("to the second method...")
  }).catch(() => {
    var retVal = document.execCommand("copy");
  });
  let tooltip = document.getElementById("myTooltip");
  tooltip.innerHTML = "Copied to clipboard";
}

function outFunc() {
  let tooltip = document.getElementById("myTooltip");
  tooltip.innerHTML = "Copy to clipboard";
}

let bgCopyBtn = document.getElementById('bg-copy-btn');

function copyPaste2() {
  /* Alert the copied text */

  let copyText = document.createElement("input");                  
  copyText.style="display:none";
  copyText.value  = css.textContent;
  copyText.setAttribute('id', 'copyTextId2')     
  document.body.appendChild(copyText); 

  let copyTextSelect = document.getElementById("copyTextId2");
  copyTextSelect.select();
  copyTextSelect.setSelectionRange(0, 99999); /*For mobile devices*/
  navigator.clipboard.writeText(copyTextSelect.value).then(() => {
    console.log("to the second method...")
  }).catch(() => {
    var retVal = document.execCommand("copy");
  });
  let tooltip = document.getElementById("2myTooltip");
  tooltip.innerHTML = "Copied to clipboard";
}

function outFunc2() {
  let tooltip = document.getElementById("2myTooltip");
  tooltip.innerHTML = "Copy to clipboard";
}