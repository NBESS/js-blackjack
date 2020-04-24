const deal = document.getElementById('deal-button');

    deal.addEventListener('click', function(){
        const dealer = document.getElementById('dealer-hand')
        let playerCard1 = document.createElement('img');
        let playerCard2 = document.createElement('img');
        dealer.appendChild(playerCard1);
        dealer.appendChild(playerCard2);
        playerCard1.setAttribute('src', 'resources/JC.jpg');
        playerCard2.setAttribute('src', 'resources/6S.jpg');
        const player = document.getElementById('player-hand')
        let dealerCard1 = document.createElement('img');
        let dealerCard2 = document.createElement('img');
        player.appendChild(dealerCard1);
        player.appendChild(dealerCard2);
        dealerCard1.setAttribute('src', 'resources/JC.jpg');
        dealerCard2.setAttribute('src', 'resources/6S.jpg');
        dealtCards.push(cards.pop);

});

const hit = document.getElementById('hit-button');
hit.addEventListener('click', function(){
    const playerHand = document.getElementById('player-hand')
    let playerCard = document.createElement('img');
    playerHand.appendChild(playerCard);
    playerCard.setAttribute('src', 'resources/2D.jpg');
    
});

// Creates a deck of cards

const cards = [
    {points: 13, suit: 'clubs'},
    {points: 12, suit: 'clubs'},
    {points: 11, suit: 'clubs'},
    {points: 10, suit: 'clubs'},
    {points: 9, suit: 'clubs'},
    {points: 8, suit: 'clubs'},
    {points: 7, suit: 'clubs'},
    {points: 6, suit: 'clubs'},
    {points: 5, suit: 'clubs'},
    {points: 4, suit: 'clubs'},
    {points: 3, suit: 'clubs'},
    {points: 2, suit: 'clubs'},
    {points: 1, suit: 'clubs'},
    {points: 13, suit: 'diamonds'},
    {points: 12, suit: 'diamonds'},
    {points: 11, suit: 'diamonds'},
    {points: 10, suit: 'diamonds'},
    {points: 9, suit: 'diamonds'},
    {points: 8, suit: 'diamonds'},
    {points: 7, suit: 'diamonds'},
    {points: 6, suit: 'diamonds'},
    {points: 5, suit: 'diamonds'},
    {points: 4, suit: 'diamonds'},
    {points: 3, suit: 'diamonds'},
    {points: 2, suit: 'diamonds'},
    {points: 1, suit: 'diamonds'},
    {points: 13, suit: 'hearts'},
    {points: 12, suit: 'hearts'},
    {points: 11, suit: 'hearts'},
    {points: 10, suit: 'hearts'},
    {points: 9, suit: 'hearts'},
    {points: 8, suit: 'hearts'},
    {points: 7, suit: 'hearts'},
    {points: 6, suit: 'hearts'},
    {points: 5, suit: 'hearts'},
    {points: 4, suit: 'hearts'},
    {points: 3, suit: 'hearts'},
    {points: 2, suit: 'hearts'},
    {points: 1, suit: 'hearts'},
    {points: 13, suit: 'spades'},
    {points: 12, suit: 'spades'},
    {points: 11, suit: 'spades'},
    {points: 10, suit: 'spades'},
    {points: 9, suit: 'spades'},
    {points: 8, suit: 'spades'},
    {points: 7, suit: 'spades'},
    {points: 6, suit: 'spades'},
    {points: 5, suit: 'spades'},
    {points: 4, suit: 'spades'},
    {points: 3, suit: 'spades'},
    {points: 2, suit: 'spades'},
    {points: 1, suit: 'spades'},
];

function cardForUrl(card){
    if (card === 13){
        card = 'K';
    }
    else if (card === 12){
        card = 'Q';
    }
    else if (card === 11){
        card = 'Q';
    }
    else if (card === 10){
        card = 'Q';
    }
    else if (card === 9){
        card = '8';
    }
    else if (card === 8){
        card = '7';
    }
    else if (card === 7){
        card = '6';
    }
    else if (card === 6){
        card = '5';
    }
    else if (card === 5){
        card = '4';
    }
    else if (card === 4){
        card = '3';
    }
    else if (card === 3){
        card = '2';
    }
    else if (card === 2){
        card = '1';
    }
    else if (card === 1){
        card = 'A';
    }
    return card;
}

function suitForUrl(suit){
    if (suit == 'clubs'){
        suit = 'C';
    }
    else if (suit == 'diamonds'){
        suit = 'D';
    }
    else if (suit == 'hearts'){
        suit = 'H';
    }
    else if (suit == 'spades'){
        suit = 'S';
    }
    return suit;
}

function getCardImageUrl(cardObject) {
    
    let card = cardObject.points;
    let suit = cardObject.suit;

    let urlString = `resources/${cardForUrl(card)}${suitForUrl(suit)}.jpg`;
    return urlString;
}

// Prints the url for a card image
console.log(getCardImageUrl(cards[3]));

