

/* 
   Object = icerisinde birden cox deyeri saxlayan struktorlardir.
   Property olaraq primitive ve ya basqa obyektler ola biler
*/


/* 
   Object = are structs that hold multiple values ​​inside an object.
    It can be primitive or other objects as property.
*/


const car1 = {
    model: "Mustang",
    color: "red",
    year: 2023,
    drive: function(){
        console.log("Your Drive the car1");
    },
    brake: function(){
        console.log("You step on the brakes");
    }
}


console.log(car1);
console.log(car1.model);
console.log(car1.color);
console.log(car1.year);
car1.brake()
car1.drive()


console.log("----------------");

const car2 = {
    model: "Bmw",
    color: "black",
    year: 2023,
    drive: function(){
        console.log("Your Drive the car1");
    },
    brake: function(){
        console.log("You step on the brakes");
    }
}


console.log(car2);
console.log(car2.model);
console.log(car2.color);
console.log(car2.year);
car2.brake()
car2.drive()
