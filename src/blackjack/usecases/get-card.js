/**
 * This function allows to take a card from the deck
 * @param {Array<String>} deck - The deck of cards
 * @returns {String} The drawn card
 */
export const getCard = ( deck ) => {
    if (!deck || deck.length === 0) {
        throw "No more cards in the deck"
    }
    return deck.pop();
}