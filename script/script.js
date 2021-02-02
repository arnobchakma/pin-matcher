function getPin() {
    const random = Math.random() * 10000;
    const pin = (random + '').split('.')[0];
    if (pin.length === 4) {
        return pin;
    } else {
        return getPin();
    }
}

//This function is for to show number with generate button
function generatePin() {
    const inputPin = document.getElementById('pin');
    inputPin.value = getPin();
}

//This function for to show pin on right input
const digitWrapper = document.getElementById("digit-container");
digitWrapper.addEventListener('click', function (event) {
    const digit = event.target.innerText;
    if (isNaN(digit)) {
        console.log('Not a number')
    } else {
        const typeNumber = document.getElementById('type-number');
        typeNumber.value = typeNumber.value + digit;
    }
})

//This function is for match pin between two input
function mergeBothPin() {
    const pin = document.getElementById('pin').value;
    const typePin = document.getElementById('type-number').value;
    if (pin === typePin) {
        matchThePin('block', 'none')
        // const correct = document.getElementById('correct-pin');
        // correct.style.display = 'block'
        // const incorrect = document.getElementById('incorrect-pin');
        // incorrect.style.display = 'none'
    } else {
        matchThePin('none', 'block')
        // const incorrect = document.getElementById('incorrect-pin');
        // incorrect.style.display = 'block'
        // const correct = document.getElementById('correct-pin');
        // correct.style.display = 'none'
    }
}

function matchThePin(correctStatus, incorrectStatus) {
    const correct = document.getElementById('correct-pin');
    correct.style.display = correctStatus;
    const incorrect = document.getElementById('incorrect-pin');
    incorrect.style.display = incorrectStatus;
}