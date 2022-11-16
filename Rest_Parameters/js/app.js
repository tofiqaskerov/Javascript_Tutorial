/* 
   rest parameters - Qeyri mueyyen sayda parametrleri mueyyen edir
*/

/* 
   rest parameters - represents an indefinite number of parameters
*/

let a,b,c,d;

a=1;
b=2;
c=3;
d=4;

// let sumAll = sum(a,b,c,d);
// console.log(sumAll);

// function sum(a,b,c,d){
//     return a+b+c+d;
// }
// function sum(a,b,c){
//     return a+b+c;
// }




/* 
    // function daxilinde spreed operatoru teyin etdikde bize gelen deyerler mueyyen sayda olmur.
     Mes: normalda function daxilinde deyilibse 4 parametr teyin olunmalidir,
     spreed operatoru ile qeyri-mueyyen sayda edirik. buda istediyimiz parametri elave edeceyimiz anlamina gelir
*/

let sumAll = sum(a,b,c,d);

function sum(a,b,...numbers){ 
    let total = 0;
    for(let i of numbers){
        total +=i;
    }
    
    return total;
}

console.log(sumAll);
    