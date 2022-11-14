const app = {
    init: function() {
        app.generateRandomDeck();
        app.splitDeck();
        document.querySelector("#play").addEventListener("click", app.handlePlay);
        document.querySelector("#endGame").addEventListener("click", app.handleEndGame);
        document.querySelector("#rules").addEventListener("click", app.handleRules);
        document.querySelector("#closeRules").addEventListener("click", app.handleCloseRules);

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
        for (let suitCounter = 0; suitCounter < app.cardSuits.length; suitCounter++) {
            for (let valueCounter = 0; valueCounter < app.cardValues.length; valueCounter++) {
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
        if (cardValue == 'J') return 11;
        if (cardValue == 'Q') return 12;
        if (cardValue == 'K') return 13;
        if (cardValue == 'A') return 14;
        if (cardValue == '10') return 10;
        return cardValue;             
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
            // ici on rend les cartes aux joueurs - il faudrait coder le cas concret
            app.playerDeck.push(app.playerDeck[cardNumber]);
            app.computerDeck.push(app.computerDeck[cardNumber]);
            status = "Draw";
        }

        // on enlève les cartes jouées des decks
        app.playerDeck.splice(cardNumber, 1);
        app.computerDeck.splice(cardNumber, 1);

        return status;
        
    },

    // vérifie si quelqu'un a gagné (lorsque l'un des decks passe à 0 cartes)
    checkWinner: function() {
        // on teste si quelqu'un a gagné
        if (app.computerCardsCounter <= 0) {
            document.getElementById("play").remove();
            console.log(document.getElementById("play"));
            document.querySelector("#endGame").textContent = "Replay?";
            document.querySelector(".status.tag").classList.add("endofgame");
            app.gameStatus = "You Win!! :)"
        } else if (app.playerCardsCounter <= 0) {
            document.getElementById("play").remove();
            document.querySelector("#endGame").textContent = "Replay?";
            document.querySelector(".status.tag").classList.add("endofgame");
            app.gameStatus = "You Loose!! :("
        }
        document.querySelector(".status.tag").textContent = app.gameStatus;
    },

    // met à jour les infos sur les cartes affichées
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

    // gère la maj du status au milieu
    updateStatus: function(){
        // affichage du game status
        document.querySelector(".status.tag").textContent = app.gameStatus;

        // affichage nb de cartes decks 
        document.querySelector('.nbCardComputer').textContent = app.computerCardsCounter;
        document.querySelector('.nbCardPlayer').textContent = app.playerCardsCounter;
    },

    // gère l'apparition de la fenêtre Rules
    handleRules: function() {
        document.querySelector(".rulesBox").classList.toggle("displayOn");
    },

    // gère la fermeture de la fenêtre Rules
    handleCloseRules: function() {
        document.querySelector(".rulesBox").classList.toggle("displayOn");

    },

    // gère le click du bouton Play
    handlePlay: function() {
        app.updateCardsInfo();
        app.gameStatus = app.compareCards(0); 
        app.updateStatus();
        app.checkWinner();
        //console.log(app.computerDeck);
        //console.log(app.playerDeck);
    },

    // gère le click du bouton EndGame
    handleEndGame: function() {
        // rafraichir la page pour rejouer si le jeu est terminé
        if (app.computerCardsCounter <= 0 || app.playerCardsCounter <= 0 ) {
            window.location.reload();
        }

        // petit hack, ici on force les deux joueurs à 1 carte restant et on tire une carte afin de forcer la fin du jeu 
        app.playerCardsCounter = 1;
        app.computerCardsCounter = 1
        app.handlePlay();
    },  


}

document.addEventListener("DOMContentLoaded", app.init);
