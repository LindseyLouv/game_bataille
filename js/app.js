const app = {
    init: function() {
        app.generateRandomDeck();

    },

    deckOfCards: [],
    cardSymbols: ["club", "heart", "spade", "diamond"],
    cardValue: [2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K", "A"],

    generateRandomDeck: function() {
        // génération d'un deck de 52 cartes
        i = 0;
        for (y = 0; y <=3; y++) { 
         //   app.deckOfCards[y] = app.cardSymbols[y];
            for (let card of app.cardValue) {
                
                app.deckOfCards[i] = card;
                i++;          
            }
        }
        console.log(app.deckOfCards);

        // mélange du deck
        for (let i = app.deckOfCards.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            const temp = app.deckOfCards[i];
            app.deckOfCards[i] = app.deckOfCards[j];
            app.deckOfCards[j] = temp;
            }
        
    }

        

   


}

document.addEventListener("DOMContentLoaded", app.init);
