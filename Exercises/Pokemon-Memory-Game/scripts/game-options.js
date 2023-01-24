let inputNumber = document.querySelector("input[type='number']");
let button = document.querySelector("#new-game");
let totalCards = 0;
let percent = 0;

// TODO: FIX INPUT NUMBER INPLEMENTATION

// button.addEventListener("click", getTotalCards);
inputNumber.addEventListener("input", getTotalCards);

// function getTotalCards() {
//     // Max number of cards will be 40 cards, in an range of 04 to 40.
//     let value = inputNumber.value;
//     // totalCards = value;
    
//     return parseInt(value);
// }

function getTotalCards() {
    // Max number of cards will be 40 cards, in an range of 04 to 40.
    // let value = inputNumber.value;
    let valueParseInt = inputNumber.valueAsNumber;
    console.log(typeof valueParseInt, valueParseInt);
    return valueParseInt;
}

function getPercent(totalCards) {
    if(totalCards === 4) {
        percent = 30;
    } else if (totalCards >= 5 && totalCards <= 8) {
        percent = 20;
    } else if (totalCards <= 10) {
        percent = 19.4;
    } else if (totalCards <= 12) {
        percent = 19;
    } else if (totalCards <= 15) {
        percent = 16;
    } else if (totalCards <= 18) {
        percent = 15;
    } else if (totalCards <= 21) {
        percent = 13.6;
    } else if (totalCards <= 24) {
        percent = 13;
    } else if (totalCards <= 32) {
        percent = 11;
    } else if (totalCards <= 40) {
        percent = 10;
    }

    return percent;
}

totalCards = getTotalCards();
percent = getPercent(totalCards);

export {percent, totalCards};
