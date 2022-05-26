//hex => rgb

let hexValueInput = document.getElementById('hex-value');
let hexToRGButton = document.getElementById('btn-hex-to-rgb');
let hexToRGBColor = document.getElementById('hex-rgb-prev');
let hexToRGBResult = document.getElementById('hex-to-rgb-result');

let hexToRGBValid = document.getElementById('h-r-valid');

hexValueInput.addEventListener("input", grabRGB);
hexToRGButton.addEventListener("click", giveResult);

let hexToRGBVal = '';

function checkHex() {
  let nonWordChar = /[\W]/;
  let poundCheck = hexValueInput.value.split('').filter(char => char === '#');


  if (hexValueInput.value.includes('#')) {
    if (poundCheck.length > 1 || hexValueInput.value.length < 7 || hexValueInput.value.length > 7) {
      return false;
    }
  }

  if (hexValueInput.value[0] === '#') {
    hexValueInput.value = hexValueInput.value.split('').slice(1).join('');
    if (hexValueInput.value.length > 7 || hexValueInput.value.length < 7) {
      return false;
    }
    if (poundCheck.length > 1) {
      return false;
    }
  }

  if (hexValueInput.value[0] !== '#') {
    if (hexValueInput.value.match(nonWordChar) || hexValueInput.value.match(/[\s]/) || hexValueInput.value.length !== 6) {
      hexToRGBValid.style.visibility = 'visible';
      return false;
    }
  }
  hexToRGBValid.style.visibility = 'hidden';
  return true;
}

function convert(num) {
  return parseInt(num, 16);
}

function toRGB(hex) {
  let first = convert(hex.slice(0, 2));
  let sec = convert(hex.slice(2, 4));
  let third = convert(hex.slice(4, 6));

  return `rgb(${first}, ${sec}, ${third})`;
}

function grabRGB() {
  console.log(hexValueInput.value);
  checkHex();
  if (checkHex() === true) {
    hexToRGBVal = toRGB(hexValueInput.value);
  } else {
    return false;
  }
}


//give result
function giveResult() {
  if (checkHex() === false) {
    return false;
  }

  hexToRGBResult.innerText = hexToRGBVal;
  hexToRGBColor.style.background = hexToRGBVal;
}


//auto check

let autoValInput = document.getElementById('auto-value');
let autoBtn = document.getElementById('btn-auto');
let autoColorPrev = document.getElementById('auto-color-prev');
let autoResult = document.getElementById('auto-result');

let autoValid = document.getElementById('auto-valid');

autoValInput.addEventListener("input", autoCheckRGB);
autoBtn.addEventListener("click", autoResultOutput);

//check if input is a hexadecimal
function autoCheckHex() {
  let nonWordChar = /[\W]/;
  let poundCheck = autoValInput.value.split('').filter(char => char === '#');

  if (autoValInput.value.includes(',')) {
    return false;
  }

  if (autoValInput.value.includes('#')) {
    if (poundCheck.length > 1 || autoValInput.value.length < 7 || autoValInput.value.length > 7) {
      return false;
    }
  }

  if (autoValInput.value[0] === '#') {
    autoValInput.value = autoValInput.value.split('').slice(1).join('');
    if (autoValInput.value.length > 7 || autoValInput.value.length < 7) {
      return false;
    }
    if (poundCheck.length > 1) {
      return false;
    }
  }

  if (autoValInput.value[0] !== '#') {
    if (autoValInput.value.match(nonWordChar) || autoValInput.value.match(/[\s]/) || autoValInput.value.length !== 6) {
      
      return false;
    }
  }
  
  return true;
}

//checks if input is rgb val
function checkHexRGB() {
  if (!(autoValInput.value.includes(','))) {
    return false;
  }
  if (autoValInput.value.includes(',')) {

    if (autoValInput.value.split(',').join('').length > 13) {
      return false;
    }
  }
  return true;
}

let autoHexToRGB = '';
let autoRGBHex = '';

//converts to hexadecimal value (from rgb)
function toHex(val) {

  let numA = [];
  let hexVal = [];
  if (val.includes(' ')) {
    for (let num of val) {
      if (num === ' ') {
        continue;
      }
      numA.push(num);
    }
    numA = numA.join('').split(',');
  
    numA.forEach(num => hexVal.push(Number(num).toString(16)));
    return `#${hexVal.join('')}`;
  }

  let first = val.split(',')[0];
  let sec = val.split(',')[1];
  let third = val.split(',')[2];

  return `#${Number(first).toString(16)}${Number(sec).toString(16)}${Number(third).toString(16)}`
}


//checks if input is valid and saves appropriate conversion values to variables above
function autoCheckRGB() {
  autoCheckHex();
  checkHexRGB();
  
  if (autoCheckHex() === false && checkHexRGB() === false) {
    return false;
  }

  if (autoCheckHex() === true) {
    autoHexToRGB = toRGB(autoValInput.value);
  }
  if (checkHexRGB() === true) {
    autoRGBHex = toHex(autoValInput.value);
  }
}

// let autoHexToRGB = '';
// let autoRGBHex = '';
//outputs auto result 
function autoResultOutput() {
  if (autoCheckRGB() === false) {
    alert('Please input the correct HEX or RGB value');
  }
  if (checkHexRGB() === true) {
    autoResult.innerText = autoRGBHex;
    autoColorPrev.style.background = autoRGBHex;
  }
  if (autoCheckHex() === true) {
    autoResult.innerText = autoHexToRGB;
    autoColorPrev.style.background = autoHexToRGB;
  }
}