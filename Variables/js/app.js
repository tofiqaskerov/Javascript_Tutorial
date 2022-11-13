

/* 
      Variable melumatlarin saxlanilmasi ucun containerdi ----  A Variable is a container for storing data;
      Variable ozune verilen deyer kimi davranir  ----  A variable behaves as if it was the value that it contains;
      2 hisseden ibaretdir:  ----  2 steps:
      
      Declaration - var, let, const ;
      Assigment -  (= assigment operator); 
*/


let firstName;  // --> burada variable declarate olunub. Yəni teyin olunub. Deyere beraber edilmeyib. Undefined olaraq geri donur;
firstName = "Tofiq"; // --> burada assigment olunub. Yəni deyisken deyere beraber edilib. Daxil etdiyimiz deyer bize geri docenek;

let surName;
surName = "Askerov"; // data type Stringdir ---- data type is String;

let age; 
age = 19; //data type Numberdir ---- data type is Number;

let educate = true; // data type Boolean-dir // data type is boolean

console.log(firstName);
console.log(surName);
console.log(age);
console.log(educate);


let age1 = 20
age1 = age1 + 1; // Numberler uzerinde riyazi emmeller yerine yetirmek olur ---- It is possible to perform mathematical equations on numbers;
console.log(age1);

age += 1; // Qisa yazilisi ---- simple write;

firstName = firstName + surName; // Stringler uzerinde riyazi emel yerine yetirende string tipinde olan deyerleri sadece birlesdirir ---- When performing mathematical operations on strings, it simply combines the values ​​of string type;
console.log(firstName);

console.log("Hi", firstName);
console.log("You are", age, "years old");
console.log("Enrolled", educate);


document.getElementById("first").innerHTML = "Hello " + surName;
document.getElementById("second").innerHTML = "You are " + age + " years old";
document.getElementById("third").innerHTML = "Unrolled: " + educate;


let arr = ["Ruslan", "Tofiq", "Orxan", "Ayxan","Sekine","Senan"]
var arrs = arr.splice(0, 2, "Murad", "ewrgarg")
console.log(arrs);