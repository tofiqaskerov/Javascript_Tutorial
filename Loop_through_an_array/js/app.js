

let numbers = [1,2,3,4,5,6,7,8,9,10]
for (let i = 0; i < numbers.length ; i++) {
     console.log(numbers[i]);
    
}

for (let j = numbers.length-1; j >= 0; j--) {
    console.log(numbers[j]);
}

for(let i of numbers){
    console.log("---------------");
    console.log(i);
}