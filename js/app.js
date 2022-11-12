const app = {
    init: function() {
        app.generateRandomDeck();
        app.splitDeck();

    },

    deckOfCards: [],
    cardSuits: ["♠", "♣", "♥", "♦"],
    cardValues: [2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K", "A"],
    playerDeck: [],
    computerDeck: [],

    generateRandomDeck: function() {
        // génération d'un deck de 52 cartes
        for (let suitCounter = 0; suitCounter < 4; suitCounter++) {
            for (let valueCounter = 0; valueCounter < 13; valueCounter++) {
                app.deckOfCards.push(app.cardSuits[suitCounter] + app.cardValues[valueCounter]);
            }
        }
        // mélange du deck
        for (let i = app.deckOfCards.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            const temp = app.deckOfCards[i];
            app.deckOfCards[i] = app.deckOfCards[j];
            app.deckOfCards[j] = temp;
            }
        
    },

    splitDeck: function() {
        // on divise le deck en 2
        const deckMidpoint = Math.ceil(app.deckOfCards.length /2);
        // on donne la moitié au joueur et l'autre à l'ordinateur
        for (let i = 0; i < deckMidpoint; i++){
            app.playerDeck[i] = app.deckOfCards[i];
            app.computerDeck[i] = app.deckOfCards[i + deckMidpoint];
        }

        console.log(app.playerDeck);
        console.log(app.computerDeck);

    },

        

   


}

document.addEventListener("DOMContentLoaded", app.init);
