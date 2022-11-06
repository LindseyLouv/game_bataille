
const app = {
    init: function() {
        console.log("app.js init");
        console.log(app.deck52Cards);
    },

    // création d'un deck de 52 cartes
    deck52Cards: {
        'spade': {
            '1': 14,
            '2' : 2,
            '3' : 3,
            '4' : 4,
            '5' : 5,
            '6' : 6,
            '7' : 7,
            '8' : 8,
            '9' : 9,
            '10' : 10,
            'J' : 11,
            'Q' : 12,
            'K' : 13,
        },
        'heart': {'1': 14,'2' : 2, '3' : 3, '4' : 4, '5' : 5, '6' : 6, '7' : 7, '8' : 8, '9' : 9, '10' : 10, 'J' : 11, 'Q' : 12, 'K' : 13,},    
        'club': {'1': 14,'2' : 2, '3' : 3, '4' : 4, '5' : 5, '6' : 6, '7' : 7, '8' : 8, '9' : 9, '10' : 10, 'J' : 11, 'Q' : 12, 'K' : 13,},    
        'diamond': {'1': 14,'2' : 2, '3' : 3, '4' : 4, '5' : 5, '6' : 6, '7' : 7, '8' : 8, '9' : 9, '10' : 10, 'J' : 11, 'Q' : 12, 'K' : 13,},    
    },

    shuffleDeck: function(deckToShuffle) {

    }

}

document.addEventListener("DOMContentLoaded", app.init);

// créer un tableau avec les 52 cartes
// mélanger ce tableau
// distribuer les 52 cartes aux deux joueurs
// chaque joueur pose la premiere carte de son paquet sur la table
// on compare les cartes
// celui qui a la plus grande récupère toutes les cartes
// s'il y a égalité (bataille), on repose une carte face cachée avant de reposer une carte à découvert
// on effectue tout ca tant que le nb de carte des joueurs est >0


