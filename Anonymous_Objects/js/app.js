

/* 
   Anonymous objects = adsiz objectlerdi. Daha qisa sintaksisi var.
   Unikal adlara ehtiyaci olmur
*/

class Card{
   constructor(value, suit){
      this.value = value
      this.suit = suit
   }
}


let cards = 
[  
   new Card("A", "Hearts"), 
   new Card("A", "Spades"), 
   new Card("A", "Diamonds"),
   new Card("A", "Clubs"),
   new Card("2", "Hearts"),
   new Card("2", "Spades"),
   new Card("2", "Diamonds"),
   new Card("2", "Clubs")
]

cards.forEach( i=>console.log(`${i.value} ${i.suit} `))


