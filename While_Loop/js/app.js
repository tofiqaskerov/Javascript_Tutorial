/* 
      while loop - sert dogru oldugu muddetce dovre salir
*/


let surname = "";
while (surname == "" || surname == null) {
      surname = window.prompt("Enter your surname")
}

console.log("Hello", surname);



/* 

   do while  - Bir sey edin, serti yoxlayin.
      Eger sert dogrudursa tekrarlayin.

*/


/* 

      do while - do something then check the condition 
         repeat if condition is true

*/

let firstname;

do{
      firstname = prompt("Enter your firstName ")
}while(firstname == ""){
      console.log(firstname);
}


