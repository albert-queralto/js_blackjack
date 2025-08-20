import _ from 'underscore';

/**
 * Creates a new deck of cards.
 * @param {Array<String>} suits - The suits to include in the deck (e.g. ['C', 'D', 'H', 'S']).
 * @returns {Array<String>} The shuffled deck of cards.
 */
export const createDeck = ( suits ) => {

    if (!suits || suits.length === 0) {
        throw new Error("Suits must be provided to create a deck");
    }

    let deck = [];
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