const slider = document.querySelector('[data-lengthSlider]');
const lengthDisplay = document.querySelector('[data-lengthNumber]');
const passwordDisplay = document.querySelector('[data-passwordDisplay]');
const copyBtn = document.querySelector('[data-copy]');
const copyMsg = document.querySelector('[data-copyMsg]');
const uppercaseCheck = document.querySelector('#uppercase');
const lowercaseCheck = document.querySelector('#lowercase');
const symbolCheck = document.querySelector('#symbols');
const numberCheck = document.querySelector('#numbers');
const generateBtn = document.querySelector('.generateBtn');
const indicator = document.querySelector('[data-indicator]');
const allCheckBox = document.querySelectorAll('input[type=checkbox]'); 

let password = "";
var symbols = "!#$%&()*+,-./:;<=>?@[]^_`{|}~";
let passwordLength = 10;
let checkCount = 1;
handleSlider();

function handleSlider(){
    slider.value = passwordLength;
    lengthDisplay.innerText = passwordLength;
}
function setindicator(color){
    indicator.style.backgroundColor=color;
    // Add shadow 
}

function getRandomInteger(min,max){
    return Math.floor(Math.random()*(max-min) + min);
}

function getRandomNumber(){
    getRandomInteger(0,9);
}
function getLowerCase(){
    return String.fromCharCode(getRandomInteger('a'.charCodeAt(0),'z'.charCodeAt(0)+1))
}
function getUpperCase(){
    return String.fromCharCode(getRandomInteger('A'.charCodeAt(0),'Z'.charCodeAt(0)+1))
}

function getSymbol(){
    const randNum = getRandomInteger(0,symbols.length);
    return symbols.charAt(randNum);
}

function calcStrength(){
    let hasUpper = false;
    let hasLower = false;
    let hasSymbol = false;
    let hasNumber = false;

    if(uppercaseCheck.checked) hasUpper = true;
    if(lowercaseCheck.checked) hasLower = true;
    if(symbolCheck.checked) hasSymbol = true;
    if(numberCheck.checked) hasNumber = true;

    // Strength Calculation
    let strength = 0;

    if (hasUpper) strength++;
    if (hasLower) strength++;
    if (hasSymbol) strength++;
    if (hasNumber) strength++;

    // Set color based on strength
    let colorCode = '#';
    if (strength === 0) {
        colorCode += 'FF0000'; // Red
    } else if (strength === 1) {
        colorCode += 'FFA500'; // Orange
    } else if (strength === 2) {
        colorCode += 'FFFF00'; // Yellow
    } else if (strength === 3) {
        colorCode += '00FF00'; // Green
    } else {
        colorCode += '0000FF'; // Blue
    }

    // Call setIndicator function
    setIndicator(colorCode);

}



