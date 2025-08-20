import { cardValue } from "./";

/**
 * This function accumulates points for a player based on the drawn card.
 * Turn: 0 = first player, last = computer
 * @param {String} card 
 * @param {Number} turn 
 * @param {Array<Number>} pointsPlayers 
 * @param {Array<HTMLElement>} htmlPoints 
 * @returns {Number} The total points for the player
 */
export const accumulatePoints = ( 
    card, 
    turn,
    pointsPlayers,
    htmlPoints
) => {
    pointsPlayers[turn] += cardValue(card);
    htmlPoints[turn].innerText = pointsPlayers[turn];
    return pointsPlayers[turn];
}