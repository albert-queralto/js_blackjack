/**
 * Get the value of a card
 * @param {String} card - The card to evaluate
 * @returns {Number} The value of the card
 */
export const cardValue = (card) => {
    const value = card.substring(0, card.length - 1);
    return ( isNaN( value ) ) ?
            ( value === 'A' ) ? 11 : 10
            : Number(value);
}