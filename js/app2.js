
const app = {
    init: function() {
        console.log(app.deck52Cards['spade']);
        newDeck = app.shuffleDeck(app.deck52Cards['spade']);

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

    // tableau nous servant à cibler les bons index du tableau deck52Cards car tableau associatif
    index: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'],
    
    // méthode pour inverser un tableau
    reverseArray: function(input) {
        var ret = new Array;
        for(var i = input.length-1; i >= 0; i--) {
            ret.push(input[i]);
        }
        return ret;
    },
    
    // méthode pour mélanger les cartes
    shuffleDeck: function(deckToShuffle) {
        for (const i in deckToShuffle) {
            let currentIndex = deckToShuffle.indexOf(i);
            console.log(currentIndex);
        }
        

        //let i=1;
        //let shuffledDeck = {};
        //for (const property in deckToShuffle) {        
        //    shuffledDeck[`${app.index[i]}`] = deckToShuffle[`${app.index[i+1]}`];
        //    i++;
        //}
        //return shuffledDeck;    
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


// The Fisher-Yates algorith
//for (let i = deckToShuffle.length - 1; i > 0; i--) {
//      let randIndex = Math.floor(Math.random() * (i + 1));
//      const temp = deckToShuffle[i];
//      deckToShuffle[i] = deckToShuffle[randIndex];
//      deckToShuffle[randIndex] = temp;
//    }  

//let randIndex = Math.floor(Math.random() * ((deckToShuffle.length -1) - `${i+ 1}`) + `${i + 1}`);
//const temp = deckToShuffle[`${property}`];
//deckToShuffle[`${property}`] = deckToShuffle[`${app.index[i+ randIndex]}`];
//deckToShuffle[`${app.index[i+ randIndex]}`] = temp;
//i++

const deck = [
    {"J": 11, 
    "type": ["heart", "spade", "club", "diamond"] 
    },
    {"Q": 12,
    "type": ["heart", "spade", "club", "diamond"] 
    },
    {"K": 13,
    "type": ["heart", "spade", "club", "diamond"] 
    }
]
