import { 
    accumulatePoints, 
    createDeck, 
    getCard, 
    createCard,
    computerTurn 
} from './usecases';

const game = (() => {
    'use strict';

    let deck = [];
    const suits = ['C', 'D', 'H', 'S']; // Clubs, Diamonds, Hearts, Spades

    let pointsPlayers = [];

    // HTML references
    const btnGetCard = document.querySelector('#btnGetCard'),
        btnNewGame = document.querySelector('#btnNewGame'),
        btnStop = document.querySelector('#btnStop');

    const divCardsPlayers = document.querySelectorAll('.divCards'),
        htmlPoints = document.querySelectorAll('small');

    // This function initializes the game
    const initializeGame = ( numPlayers = 2) => {
        deck = createDeck( suits );
        pointsPlayers = [];
        pointsPlayers = Array(numPlayers).fill(0);

        htmlPoints.forEach(elem => elem.innerText = 0);
        divCardsPlayers.forEach(elem => elem.innerHTML = '');

        btnGetCard.disabled = false;
        btnStop.disabled = false;
    }   

    // Events
    btnGetCard.addEventListener('click', () => {
        const card = getCard( deck );
        const pointsPlayer = accumulatePoints(card, 0, pointsPlayers, htmlPoints);

        createCard(card, 0, divCardsPlayers);

        if (pointsPlayer > 21) {
            console.warn('You lost');
            btnGetCard.disabled = true;
            btnStop.disabled = true;
            computerTurn(pointsPlayer, deck, pointsPlayers, divCardsPlayers, htmlPoints);
            htmlPoints[0].innerText = 'You lost';
        } else if (pointsPlayer === 21) {
            console.warn('21 points');
            btnGetCard.disabled = true;
            btnStop.disabled = true;
            computerTurn(pointsPlayer, deck, pointsPlayers, divCardsPlayers, htmlPoints);
        }
    });

    btnStop.addEventListener('click', () => {
        btnGetCard.disabled = true;
        btnStop.disabled = true;
        computerTurn(pointsPlayers[0], deck, pointsPlayers, divCardsPlayers, htmlPoints);
    });

    btnNewGame.addEventListener('click', () => {
        initializeGame();
    });

    return {
        newGame: initializeGame,
    };
})();