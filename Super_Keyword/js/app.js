


/* 
   Super = parent class-a aiddir. Adeten parent class-in contructorunu cagirmaq ucun istifade olunur;
*/

/* 
   Super = refers to the parent class. commonly used to invoke constructor of a parent class;
*/


class Animal{
    constructor(name, age){
       this.name = name;
       this.age = age;
    }
}

class Rabbit extends Animal{
    constructor(name, age, runSpeed){
        super(name,age)
        this.runSpeed = runSpeed
    }
}

class Fish extends Animal{
    constructor(name, age, swimSpeed){
        super(name,age)
        this.swimSpeed = swimSpeed
    }
}

class Hawk extends Animal{
    constructor(name, age, flySpeed){
        super(name,age)
        this.flySpeed = flySpeed
    }
}

class Horse{
    constructor(name, age, runSpeed){
        this.name = name
        this.age = age
        this.runSpeed = runSpeed
    }
}

const horse = new Horse("Mustalag", 5, 100)
const hawk = new Hawk("Sharp", 5, 120)

console.log(horse.name);
console.log(horse.age);
console.log(horse.runSpeed);

console.log(hawk.name);
console.log(hawk.age);
console.log(hawk.flySpeed);

