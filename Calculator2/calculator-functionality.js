// CALCULATOR PROGRAM FUNCTIONALITY

const display = document.getElementById('display');

function appendToDisplay(input) {
    display.value += input;
}
function clearDisplay() { 
    display.value = '';
}

function calculateResult() {
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value += display.value.slice(0, -1);
        try {
        display.value = eval(display.value);
        } catch (error) {
        display.value += display.value.slice(0, -1);
        
    }
    }
}

function deleteLastCharacter() {
    display.value = display.value.slice(0, -1);
    
}

function numbersquare() {

    try {
        let number = parseFloat(display.value);
        let squared = number * number;
        display.value = squared;
    } catch (error) {
        display.value = 'Error';
    }
}

function oppositeNumber() {

    try {
        let number = parseFloat(display.value);
        let opposite = number * -1;
        display.value = opposite;
    } catch (error) {
        display.value = 'Error';
    }
}