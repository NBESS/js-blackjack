const deal = document.getElementById('deal-button');

    deal.addEventListener('click', function(){
        const dealerHand = document.getElementById('dealer-hand')
        let playerCard1 = document.createElement('img');
        let playerCard2 = document.createElement('img');
        dealerHand.appendChild(playerCard1);
        dealerHand.appendChild(playerCard2);
        playerCard1.setAttribute('src', 'resources/JC.jpg');
        playerCard2.setAttribute('src', 'resources/6S.jpg');
        const playerHand = document.getElementById('player-hand')
        let dealerCard1 = document.createElement('img');
        let dealerCard2 = document.createElement('img');
        playerHand.appendChild(dealerCard1);
        playerHand.appendChild(dealerCard2);
        dealerCard1.setAttribute('src', 'resources/JC.jpg');
        dealerCard2.setAttribute('src', 'resources/6S.jpg');

});

const hit = document.getElementById('hit-button');
hit.addEventListener('click', function(){
    const playerHand = document.getElementById('player-hand')
    let playerCard = document.createElement('img');
    playerHand.appendChild(playerCard);
    playerCard.setAttribute('src', 'resources/2D.jpg');
    
});

