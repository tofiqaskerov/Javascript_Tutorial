
// break - break dongunu dayandirir ---- "break " stops the loop

// continue - dongude oturme emeliyyatini yerine yetirir
console.log("with break");

for(let i = 1; i<=20; i+=1){
     if( i == 5){
        break
     }
     console.log(i);
}

console.log("----------------------------------------");

console.log("With continue");

for(let i = 1; i<=20; i+=1){
    if( i == 13){
       continue
    }
    console.log(i);
}
