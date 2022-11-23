

/* 
   this = sozu aid oldugu obyekti ifade edir. Harada istifade olunmasindan 
   asili olaraq ferqli deyerler ala biler. Bir Method daxilinde istifade olundugunda aid oldugu
   obyekti temsil edir. Tek basina istifade olundugu zaman global bir obyekti temsil edir.
*/


/* 
   this = refers to the object to which it refers. No matter where it is used
   it can take different values ​​by default. It helps when used inside a Method
   represents the object. Represents a global object when used alone.
*/



const car1 = {
    model: "Mustang",
    color: "red",
    year: 2023,  
    drive: function(){
        console.log(`Your Drive the ${this.model}`);
    },
  
}
const car2 = {
    model: "Bmw",
    color: "black",
    year: 2023,
    drive: function(){
        console.log(`Your Drive the ${this.model}`);
    },
  
}
car1.drive()
car2.drive()


console.log(this); // this-i globalda teyin etdiyimizde aid oldugu obyekti window goturur

this.name = "windowwwww" // this == window