import { getCard, accumulatePoints, createCard, determineWinner } from "./";

/**
 * Computer's turn to play
 * @param {Number} minimumPoints
 * @param {Array<String>} deck
 * @param {Array<Number>} pointsPlayers
 * @param {Array<HTMLElement>} divCardsPlayers
 */
export const computerTurn = (
    minimumPoints, 
    deck, 
    pointsPlayers,
    divCardsPlayers,
    htmlPoints
) => {

    if (!minimumPoints) throw new Error('Minimum points are required');
    if (!deck || deck.length === 0) throw new Error('Deck is required');
    if (!pointsPlayers || pointsPlayers.length === 0) throw new Error('Points players are required');
    if (!divCardsPlayers || divCardsPlayers.length === 0) throw new Error('Div cards players are required');
    if (!htmlPoints || htmlPoints.length === 0) throw new Error('HTML points are required');

    let pointsComputer = 0;
    do {
        const card = getCard( deck );

        pointsComputer = accumulatePoints(card, pointsPlayers.length - 1, pointsPlayers, htmlPoints);
        createCard(card, pointsPlayers.length - 1, divCardsPlayers);

        if (minimumPoints > 21) {
            break; // If player has more than 21, computer stops
        }

    } while ((pointsComputer < minimumPoints) && (minimumPoints <= 21));

    determineWinner(pointsPlayers, htmlPoints);
}