// Type Conversion - Deyerin tipini basqa tiplerle deyismek demekdir (strings, numbers, booleans)
// Type Conversion - It means changing the type of word with other types (string, numbers, booleans)


let age = window.prompt("How old are you?"); // default halda promptdan gelen deyer string formatindadir ---- By default, the value from the prompt is in string format;
age += 1; // Buna gorede riyazi emel kimi toplanmir. sadece birlesdirir. ----  Accordingly, it is not collected as a mathematical equation. it just combines.;
console.log(age); 



let numCar = window.prompt("how many cars do you have?")
numCar = Number(numCar) // --> Number tipine cevrilir ---- Converts to Number type;
numCar +=1  // numCar number tipine cevrildiyine gore riyazi hesablama duzgun yerine yetirildi ---- Mathematical calculation was performed correctly as numCar was converted to number type;
console.log("Now you have ", numCar, " cars" );

console.log(typeof numCar); // typeof vasitesile deyiskenin tipine baxa bilerik ---- We can look at the type of the typeof means;


let a,b,c,d,x;

a=Number("4"); 
b=String(5)
z=Boolean("Hello") // Eger string tipindeki deyer bos olarsa o zaman false olaraq geri donecek ---- If the string value is empty, it will return false;
x=Boolean()

d=Number("World") // String tipindeki deyiskende yalniz soz olarsa o zaman number cevrilmeyecek. Neticede NAN -(Not a Number) qaytaracaq ---- If there is only a word in the string type variable, then the number will not be converted. It will return NAN -(Not a Number) as a result;


console.log(typeof a, a );
console.log(typeof b, b );
console.log(typeof z, z );
console.log(typeof x, x );
