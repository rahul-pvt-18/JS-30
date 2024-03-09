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
const symbols = "!#$%&()*+,-./:;<=>?@[]^_`{|}~";
let passwordLength = 10;
let checkCount = 0;
handleSlider();

function handleSlider() {
    slider.value = passwordLength;
    lengthDisplay.innerHTML = passwordLength;
}

function setIndicator(color) {
    indicator.style.backgroundColor = color; 
}

function getRandomInteger(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

function getRandomNumber() {
    return getRandomInteger(0, 9);
}

function getLowerCase() {
    return String.fromCharCode(getRandomInteger('a'.charCodeAt(0), 'z'.charCodeAt(0) + 1));
}

function getUpperCase() {
    return String.fromCharCode(getRandomInteger('A'.charCodeAt(0), 'Z'.charCodeAt(0) + 1));
}

function getSymbol() {
    const randNum = getRandomInteger(0, symbols.length);
    return symbols.charAt(randNum);
}

function calcStrength() {
    let hasUpper = uppercaseCheck.checked;
    let hasLower = lowercaseCheck.checked;
    let hasSymbol = symbolCheck.checked;
    let hasNumber = numberCheck.checked;

    let passwordLength = parseInt(slider.value); // Parse the value of the slider as an integer

    // Strength Calculation
    let strength = 0;

    // Increment strength for each selected criteria
    if (hasUpper) strength++;
    if (hasLower) strength++;
    if (hasSymbol) strength++;
    if (hasNumber) strength++;

    // Increase strength based on password length
    if (passwordLength >= 8 && passwordLength < 12) {
        strength++;
    } else if (passwordLength >= 12 && passwordLength < 16) {
        strength += 2;
    } else if (passwordLength >= 16 && passwordLength <= 20) {
        strength += 3;
    }

    // Set color based on strength
    let colorCode = '#';
    if (strength === 0) {
        colorCode += 'FF0000'; // Red
    } else if (strength === 1 || strength === 2) {
        colorCode += 'FFA500'; // Orange
    } else if (strength === 3 || strength === 4) {
        colorCode += 'FFFF00'; // Yellow
    } else if (strength >= 5 && strength <= 7) {
        colorCode += '00FF00'; // Green
    } else {
        colorCode += '0000FF'; // Blue
    }

    // Call setIndicator function
    setIndicator(colorCode);
}


async function copyContent() {
    try {
        await navigator.clipboard.writeText(passwordDisplay.value);
        copyMsg.innerText = "Copied";
    } catch (error) {
        copyMsg.innerText = "Failed";
    }

    // make copyMsg visible 
    copyMsg.classList.add('active');
    setTimeout(() => {
        copyMsg.classList.remove('active');
    }, 2000);
}

function shufflePassword(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array.join("");
}

slider.addEventListener('input', (e) => {
    passwordLength = e.target.value;
    handleSlider();
});

copyBtn.addEventListener('click', () => {
    if (passwordDisplay.value) {
        copyContent();
    }
});

function handleCheckBoxChange() {
    checkCount = 0;
    allCheckBox.forEach((checkBox) => {
        if (checkBox.checked)
            checkCount++;
    });
    if (passwordLength < 4) {
        passwordLength = checkCount;
        handleSlider();
    }
}

allCheckBox.forEach((checkBox) => {
    checkBox.addEventListener('change', handleCheckBoxChange);
})

generateBtn.addEventListener('click', () => {
    // checkCount less than 0 then no password 
    if (checkCount == 0) return;

    // if passwordLength is less  than checkcount than change it 
    if (passwordLength < checkCount) {
        passwordLength = checkCount;
        handleSlider();
    }

    // checkBoxes content accordingly
    let funcArr = [];
    if (uppercaseCheck.checked) {
        funcArr.push(getUpperCase);
    }
    if (lowercaseCheck.checked) {
        funcArr.push(getLowerCase);
    }
    if (numberCheck.checked) {
        funcArr.push(getRandomNumber);
    }
    if (symbolCheck.checked) {
        funcArr.push(getSymbol);
    }

    // compulasory elements in password 
    password = "";
    funcArr.forEach((func) => password += func());

    // non compulsory 
    for (let i = 0; i < (passwordLength - funcArr.length); i++) {
        let randIndex = getRandomInteger(0, funcArr.length);
        password += funcArr[randIndex]();
    }

    // shuffle the password 
    password = shufflePassword(Array.from(password));

    // show the password on UI
    passwordDisplay.value = password;
    calcStrength();
});
