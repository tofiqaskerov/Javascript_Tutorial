

/* 
   Inheritance = child class diger classin butub property ve methodlarini miras almasi demekdir
*/


/* 
  Inheritance =  a child class can inherit all the methods and properties from another class'
*/



class Animal{
    alive = true;
    eat(){
        console.log(`This ${this.name} is hunting!`);
    }
    sleep(){
        console.log(`This ${this.name} is sleeping`);
    }
}

class Rabbit extends Animal{
    name = "rabbit"
    
    run(){
        console.log(`This ${this.name} is running`);
    }
}

class Fish extends Animal{
    name = "fish"
   
    swim(){
        console.log(`This ${this.name} is swimming`);
    }
}

class Hawk extends Animal{
    name = "hawk"
   
    fly(){
        console.log(`This ${this.name} is flying`);
    }
}


const rabbit = new Rabbit();
const fish = new Fish();
const hawk = new Hawk();

console.log(rabbit.alive);
rabbit.eat()
rabbit.sleep()
rabbit.run()

fish.swim()