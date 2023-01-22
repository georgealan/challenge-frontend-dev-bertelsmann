import * as script from './script.js';

function setNumberOfCards() {
    console.log('In function to set number');
}

// Max number of cards will be 40 cards, in an range of 04 to 40.
let totalCards = 40;
let percent;

if(totalCards === 4) {
    percent = 30 + '%';
} else if (totalCards >= 5 && totalCards <= 8) {
    percent = 20 + '%';
} else if (totalCards <= 10) {
    percent = 19.4 + '%';
} else if (totalCards <= 12) {
    percent = 19 + '%';
} else if (totalCards <= 15) {
    percent = 16 + '%';
} else if (totalCards <= 18) {
    percent = 15 + '%';
} else if (totalCards <= 21) {
    percent = 13.6 + '%';
} else if (totalCards <= 24) {
    percent = 13 + '%';
} else if (totalCards <= 32) {
    percent = 11 + '%';
} else if (totalCards <= 40) {
    percent = 10 + '%';
}

script.link();
export {percent, totalCards};