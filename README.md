# Blackjack Game

## Overview
This project is a simple implementation of the classic card game Blackjack. It is built using HTML, CSS, and JavaScript, and provides an interactive experience for users to play the game directly in their browser.

## Features
- Full deck of cards with images for each card.
- Interactive gameplay with options to "Hit" or "Stand".
- Dealer logic to simulate a real Blackjack game.
- Visual representation of cards and scores.

## How to Play
1. Clone the repository
2. Execute ```npm install``` to build the node modules.
3. Type ```npm run dev``` to run the development server.
4. Click "Start Game" to begin.
5. Use the "Get Card" button to draw a card or "Stop" to end your turn.
6. The dealer will then play their turn automatically.
7. The game will display the winner based on the rules of Blackjack.

## Rules of Blackjack
- The goal is to have a hand value as close to 21 as possible without exceeding it.
- Number cards are worth their face value.
- Face cards (Jack, Queen, King) are worth 10 points.
- Aces can be worth 1 or 11 points, depending on which value benefits the hand more.
- The dealer must draw cards until their hand value is at least 17.

## Assets
The `public/assets/cartas/` folder contains images for all the cards in a standard deck, as well as back designs for the cards.

## Future Improvements
- Add multiplayer support.
- Implement betting and chip management.
- Enhance the UI with animations and sound effects.

## License
This project is open-source and available under the MIT License.
