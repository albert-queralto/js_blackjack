
/**
 * Creates a card element and appends it to the specified player's card container.
 * @param {String} card
 * @param {Number} turn 
 * @param {Array<HTMLElement>} divCardsPlayers 
 */
export const createCard = (card, turn, divCardsPlayers) => {
    if (!card) throw new Error('Card is required');

    const imgCard = document.createElement('img');
    imgCard.classList.add('card');
    imgCard.src = `assets/cartas/${card}.png`;
    divCardsPlayers[turn].append(imgCard);
}