

/* 
   Static = methodlar bize new acar sozunu istifade etmeden classAdı.ozellik formasinda obyektsiz cagirmaga imkan verir. 
   Normalda bir class içindeki method ya da özelliklere catmaq isteyirikse new classAdı() 
   formasinda yeni bir class numunesi yaradib bu class numunesi üzerinden istediyimiz özelliklere cata bilirik.
*/


/* 
   Static = methods allow us to call className.property without an object without using the new keyword.
   Normally, if we want to access methods or properties in a class, new className()
   We have created a new class instance in uniform and we can achieve the properties we want on this class instance.
*/


class Car{
   static numberOfCars = 0;
   constructor(model){
      this.model = model
      Car.numberOfCars ++
   }
   startRace(){
      console.log("3..2..1..")
   }
   finishRace(){
      console.log(`${this.model} won the race!!!!!`);
   }
}
const car1 = new Car("Bmw")
const car2 = new Car("Mercedes")
const car3 = new Car("Toyota")
const car4 = new Car("Mitsubishi")
const car5 = new Car("Porsche")
const car6 = new Car("Tesla")

console.log(Car.numberOfCars);
console.log(car3.model);

car1.startRace()
car1.finishRace()

