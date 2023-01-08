for(var i = 1; i <= 15; i++) {
    const card = document.createElement('div');
    const imgFront = document.createElement('img');
    const imgBack = document.createElement('img');
    let randonNumber = Math.floor(Math.random() * 898);
    // Fix bug in randonNumber, avoid generate duplicated number.

    card.setAttribute('id', 'card-'+i);
    card.setAttribute('class', 'card');

    // imgFront.setAttribute('id', 'front-face-'+i);
    imgFront.setAttribute('class', 'front-face');
    imgFront.setAttribute('src', 'assets/images/pokemons/pokemon-' + randonNumber + '.png');
    imgFront.setAttribute('alt', 'Image card front view');
    
    // imgBack.setAttribute('id', 'back-face-'+i);
    imgBack.setAttribute('class', 'back-face');
    imgBack.setAttribute('src', 'assets/images/pokeball.png');
    imgBack.setAttribute('alt', 'Image card back view');

    // Insert html elements in the DOM
    document.getElementById('board-game').append(card);
    document.getElementById('card-'+i).append(imgFront);
    document.getElementById('card-'+i).append(imgBack);

    // Cloning the div element for duplicate the deck, with that will have 2 equal cards.
    const node = document.getElementById('card-'+i);
    const clone = node.cloneNode(card);
    document.getElementById('board-game').appendChild(clone);
}

// Selecting all divs with class name .card
const cards = document.querySelectorAll('.card');


let hasFlippedCard = false;
let firstCard, secondCard;
let disableDecks = false;
let matchedCard = 0;

function flipCard() {
    if (disableDecks) return; // Lock the board for nothing alow many clicks.
    if (this === firstCard) return;

    this.classList.add('flip');

    if (!hasFlippedCard) {
        // First Click
        hasFlippedCard = true;
        firstCard = this;
        
        return;
    }

    // Second click
    secondCard = this;

    matchCards(firstCard.id, secondCard.id);
}

function matchCards(firstCardId, secondCardId) {
    if(firstCardId === secondCardId) {
        matchedCard++;
        console.log(matchedCard);

        if(matchedCard == 15) {
            setTimeout(() => {
                return shuffleCards();
            }, 1000);
        }

        disableCards();

    } else {
        unflipCards();
    }
}

function disableCards() {
    firstCard.removeEventListener('click', flipCard);
    secondCard.removeEventListener('click', flipCard);
    resetBoard();
}

function unflipCards() {
    disableDecks = true;

    setTimeout(() => {
        firstCard.classList.add('shake'); 
        secondCard.classList.add('shake');
    }, 400);

    setTimeout(() => {
        firstCard.classList.remove('shake', 'flip');
        secondCard.classList.remove('shake', 'flip');
        resetBoard();
    }, 1500);
}

function resetBoard() {
    [hasFlippedCard, disableDecks] = [false, false];
    [firstCard, secondCard] = [null, null];
}

// Adjust logic!
function shuffleCards() {
    console.log('in shuffle function');
    matchedCard = 0;
    cards.forEach(card => {
        card.classList.remove('flip');
        card.addEventListener('click', flipCard);
    });
}

// Event listener that know when one of all divs receive an click
cards.forEach(card => card.addEventListener('click', flipCard));