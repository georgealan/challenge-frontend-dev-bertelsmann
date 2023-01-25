let inputNumber = document.querySelector("input[type='number']");
// let button = document.querySelector("#new-game");
let totalCards = 0;
let percent = 0;

// function runGame() {
//     document.getElementById('menu').style.display = 'none';
//     document.getElementById('board-game').style.display = 'grid';
//     console.log('Goku is here');
// }

inputNumber.addEventListener("input", getTotalCards);

document.getElementById('board-game').style.display = 'none';
function getTotalCards() {
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


// TODO: FIX INPUT NUMBER IMPLEMENTATION.