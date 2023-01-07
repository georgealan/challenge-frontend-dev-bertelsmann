for(var i = 1; i <= 18; i++) {
    const card = document.createElement('div');
    const imgFront = document.createElement('img');
    const imgBack = document.createElement('img');
    let randonNumber = Math.floor(Math.random() * 898);

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

    document.getElementById('board-game').append(card);
    document.getElementById('card-'+i).append(imgFront);
    document.getElementById('card-'+i).append(imgBack);

    const node = document.getElementById('card-'+i);
    const clone = node.cloneNode(card);
    document.getElementById('board-game').appendChild(clone);
}