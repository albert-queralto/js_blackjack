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
        deck = createDeck();
        pointsPlayers = [];
        pointsPlayers = Array(numPlayers).fill(0);

        htmlPoints.forEach(elem => elem.innerText = 0);
        divCardsPlayers.forEach(elem => elem.innerHTML = '');

        btnGetCard.disabled = false;
        btnStop.disabled = false;
    }

    // This function creates a new deck
    const createDeck = () => {
        deck = [];
        for (let suit of suits) {
            for (let value = 2; value <= 10; value++) {
                deck.push(`${value}${suit}`);
            }
        }
        for (let face of ['J', 'Q', 'K', 'A']) {
            for (let suit of suits) {
                deck.push(`${face}${suit}`);
            }
        }
        return _.shuffle(deck);
    }

    // This function allows to take a card
    const getCard = () => {
        if (deck.length === 0) {
            throw "No more cards in the deck"
        }
        return deck.pop();
    }

    const cardValue = (card) => {
        const value = card.substring(0, card.length - 1);
        return ( isNaN( value ) ) ?
                ( value === 'A' ) ? 11 : 10
                : Number(value);
    }

    // Turn: 0 = first player, last = computer
    const accumulatePoints = ( card, turn ) => {
        pointsPlayers[turn] += cardValue(card);
        htmlPoints[turn].innerText = pointsPlayers[turn];
        return pointsPlayers[turn];
    }

    // 
    const createCard = (card, turn) => {
        const imgCard = document.createElement('img');
        imgCard.classList.add('card');
        imgCard.src = `assets/cartas/${card}.png`;
        divCardsPlayers[turn].append(imgCard);
    }

    const determineWinner = () => {

        const [ minimumPoints, pointsComputer ] = pointsPlayers;
        setTimeout(() => {
            if (pointsComputer === minimumPoints) {
                htmlPoints[0].innerText = 'Draw';
            } else if (minimumPoints > 21 || (pointsComputer > minimumPoints && pointsComputer <= 21)) {
                htmlPoints[0].innerText = 'You lost';
            } else {
                htmlPoints[0].innerText = 'You won';
            }
        }, 100);
    }

    // Computer turn
    const computerTurn = (minimumPoints) => {
        let pointsComputer = 0;
        do {
            const card = getCard();

            pointsComputer = accumulatePoints(card, pointsPlayers.length - 1);
            createCard(card, pointsPlayers.length - 1);

            if (minimumPoints > 21) {
                break; // If player has more than 21, computer stops
            }

        } while ((pointsComputer < minimumPoints) && (minimumPoints <= 21));

        determineWinner();
    }

    // Events
    btnGetCard.addEventListener('click', () => {
        const card = getCard();
        const pointsPlayer = accumulatePoints(card, 0);

        createCard(card, 0);

        if (pointsPlayer > 21) {
            console.warn('You lost');
            btnGetCard.disabled = true;
            btnStop.disabled = true;
            computerTurn(pointsPlayer);
            htmlPoints[0].innerText = 'You lost';
        } else if (pointsPlayer === 21) {
            console.warn('21 points');
            btnGetCard.disabled = true;
            btnStop.disabled = true;
            computerTurn(pointsPlayer);
        }
    });

    btnStop.addEventListener('click', () => {
        btnGetCard.disabled = true;
        btnStop.disabled = true;
        computerTurn(pointsPlayers[0]);
    });

    btnNewGame.addEventListener('click', () => {
        initializeGame();
    });

    return {
        newGame: initializeGame,
    };
})();