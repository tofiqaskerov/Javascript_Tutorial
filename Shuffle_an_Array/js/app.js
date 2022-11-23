
let elements = ["3", "T", "6", "a", "56", "Z", "E"]
shuffle(elements)
console.log(elements);

console.log("==========");

elements.forEach(x => console.log(x))

function shuffle(arr){
   let currentIndex = arr.length; // 7
   while(currentIndex != 0){
      let randomIndex = Math.floor(Math.random()*arr.length)
      currentIndex--
      let temp = arr[currentIndex]
      arr[currentIndex] = arr[randomIndex]
      arr[randomIndex] = temp
   }
   return arr
}