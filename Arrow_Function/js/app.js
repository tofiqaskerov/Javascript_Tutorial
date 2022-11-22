

/* 
   arrow function = qisaldilmis bir funksiya ifadesidir.
   Bildiyimiz declerate olunmus funksiya kimi islemez.
*/


const greeting = () => console.log("Hello World");
greeting()


const greeting1 = _ => console.log("Hello World");
greeting1()


const greeting2 = num => console.log(num); 
greeting2(3)


const greeting3 = (a,b) => console.log(a*b);
greeting3(5,6)

const greeting4 = (a,b) =>{
   let result = a*b
   console.log(result);
};
greeting4(4,8)


const percent = (x,y) => x*y/100

console.log(`${percent(5,50)}%`);
