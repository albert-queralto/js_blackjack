/**
 * Determines the winner of the game
 * @param {Array<Number>} pointsPlayers
 * @param {Array<HTMLElement>} htmlPoints 
 */
export const determineWinner = (pointsPlayers, htmlPoints) => {
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