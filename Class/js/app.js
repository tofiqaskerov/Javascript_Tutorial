


/* 
   class = obyektlərin yaradılması üçün class onların hansı xassələrə və metodlara malik olduğunu müəyyənləşdirir,
    unikal xüsusiyyətlər üçün konstruktordan istifadə edir
*/



/*
   class = class a blueprint for creating objects define
    what properties and methods they have use a constructor for unique properties
*/


class Player{
    score = 0;
    
    pause(){
        console.log("You paused the game");
    }
    exit(){
        console.log("You exited the game");
    }
}

const player1 = new Player()
player1.score +=1
console.log(player1.score);

player1.pause()
player1.exit()


const player2 = new Player()

player2.score +=2
console.log(player2.score);
