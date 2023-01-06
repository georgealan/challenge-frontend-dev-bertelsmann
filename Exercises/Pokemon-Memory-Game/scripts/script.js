for(var i = 1; i <= 10; i++) {
    const card = document.createElement('div');
    const imgFront = document.createElement('img');
    const imgBack = document.createElement('img');
    let randonNumber = Math.floor(Math.random() * 898);

    card.setAttribute('id', 'card-'+i);
    card.setAttribute('class', 'card');

    imgFront.setAttribute('class', 'front-face');
    imgFront.setAttribute('src', 'assets/images/pokemons/pokemon-' + randonNumber + '.png');
    imgFront.setAttribute('alt', 'card-img');
    
    imgBack.setAttribute('class', 'back-face');
    imgBack.setAttribute('src', 'assets/images/pokeball.png');
    imgBack.setAttribute('alt', 'card-back-img');

    document.getElementById('board-game').append(card);
    document.getElementById('card-'+i).append(imgFront);
    document.getElementById('card-'+i).append(imgBack);
}