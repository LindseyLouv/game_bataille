const app = {
    init: function() {
        app.generateRandomDeck();
        app.splitDeck();
        document.addEventListener("click", app.handleClick);

    },

    deckOfCards: [],
    cardSuits: ["♠", "♣", "♥", "♦"],
    cardValues: [2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K", "A"],
    playerDeck: [],
    computerDeck: [],
    playerCardsCounter: 26,
    computerCardsCounter: 26,
    cardCounter: 0,
    gameStatus: "Click To Play",

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
    },

    // transforme les faces J, Q, K, A en valeur numérique
    transformFaceToNumber: function(cardValue) {
        if (cardValue == 'J') {
            return 11;
        } else if (cardValue == 'Q') {
            return 12;
        } else if (cardValue == 'K') {
            return 13;
        } else if (cardValue == 'A') {
            return 14;
        } else if (cardValue == '10') {
            return 10;
        } else {
            return cardValue;
        }          
    },
    
    compareCards: function(cardNumber) {
        const playerCard = app.transformFaceToNumber(app.playerDeck[cardNumber].slice(1));
        const computerCard = app.transformFaceToNumber(app.computerDeck[cardNumber].slice(1));

        let status = "";


        if (playerCard > computerCard) {
            // on ajoute les cartes au joueur gagnant ici player
            app.playerDeck.push(app.playerDeck[cardNumber]);
            app.playerDeck.push(app.computerDeck[cardNumber]);
            app.playerCardsCounter+=1;
            app.computerCardsCounter-=1;
            status = "Player Won";

        } else if (playerCard < computerCard) {
            // on ajoute les cartes au joueur gagnant ici computer
            app.computerDeck.push(app.playerDeck[cardNumber]);
            app.computerDeck.push(app.computerDeck[cardNumber]);
            app.computerCardsCounter+=1;
            app.playerCardsCounter-=1;
            status = "Computer Won";
        } else {
            // on rend les cartes aux joueurs
            app.playerDeck.push(app.playerDeck[cardNumber]);
            app.computerDeck.push(app.computerDeck[cardNumber]);
            status = "Draw";
        }

        // on enlève les cartes jouées des decks
        app.playerDeck.splice(cardNumber, 1);
        app.computerDeck.splice(cardNumber, 1);

        // on teste si quelqu'un a gagné
        if (app.computerCardsCounter == 0) {
            document.querySelector(".status.tag").classList.add("endofgame");
            return "You Won!! :)"
        } else if (app.playerCardsCounter == 0) {
            document.querySelector(".status.tag").classList.add("endofgame");
            return "You Lost!! :("
        }

        return status;
        
    },

    updateCardsInfo: function() {
        computerCard = document.querySelector("#computerCard");
        playerCard = document.querySelector("#playerCard");

        computerCard.classList.remove("red");
        playerCard.classList.remove("red");

        // affichage de la carte computer
        computerCard.dataset.value = app.computerDeck[app.cardCounter];
        computerCard.textContent = app.computerDeck[app.cardCounter].slice(0, 1);
        if (app.computerDeck[app.cardCounter].slice(0, 1) == "♥" || app.computerDeck[app.cardCounter].slice(0, 1) == "♦") {
            computerCard.classList.add("red");
        }

        // affichage de la carte player
        playerCard.dataset.value = app.playerDeck[app.cardCounter];
        playerCard.textContent = app.playerDeck[app.cardCounter].slice(0, 1);
        if (app.playerDeck[app.cardCounter].slice(0, 1) == "♥" || app.playerDeck[app.cardCounter].slice(0, 1) == "♦") {
            playerCard.classList.add("red");

        }

    },

    updateStatus: function(){
        // affichage du game status
        document.querySelector(".status.tag").textContent = app.gameStatus;

        // affichage nb de cartes decks 
        document.querySelector('.nbCardComputer').textContent = app.computerCardsCounter;
        document.querySelector('.nbCardPlayer').textContent = app.playerCardsCounter;
    },

    handleClick() {
        app.updateCardsInfo();
        app.gameStatus = app.compareCards(0); 
        console.log(app.computerDeck);
        console.log(app.playerDeck);
        app.updateStatus();

    },
        

   


}

document.addEventListener("DOMContentLoaded", app.init);
