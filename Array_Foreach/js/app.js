


// array.foreach() = metodu arrayin hər bir elementi üçün funksiya çağırır ---- executes a provided callback function once for each array element;


let cars = ['bmw', 'mercedes', 'toyota', 'audi']

cars.forEach(capitalize)
cars.forEach(print)
function capitalize(element, index, array){
   array[index] = element[0].toUpperCase() + element.substring(1)
}

function print(element){
   console.log(element);
}



let letters = ['s', 'f', 'h', 'k', 'e']

letters.forEach(printLetter)
letters.forEach((e)=>{
   console.log(e);
})
function printLetter(e, index, array){
   array[index] = e[0].toUpperCase() + e.substring(1)
}

