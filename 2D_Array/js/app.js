/* 

   2D array - array icinde array demekdir ---- an array of arrays

*/


let phones = ["iphone", "samsung", "xioami", "huawei"]
let cars =   ["bmw", "mercedes", "toyota", "mitsubishi"]
let games =  ["gta 5", "pubg", "minecraft", "battlefield 1"]

let all = [phones, cars, games]

console.log(all);
for(let i of all){
   for (let j of i) {
      console.log(j);
   }
   console.log(i);
}


console.log("-------------------");
console.log(all[2][3]);


all[2][2] = "Hello"
console.log(all[2]);