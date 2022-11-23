

/* 
   nested functions = funksiya icinde funksiya menasina gelir.

*/


/* 
  nested functions = Functions inside other functions.
  Outer functions have access to inner functions.
  Inner functions are  ''hidden '' from outside the outer function
*/

let userName = "Tofiq"
let messageCount = 0

Login()

function Login(){
    displayUserName()
    displayUserInbox()
    function displayUserName(){
        console.log(`Welcome ${userName}`);
    }
    function displayUserInbox(){
        console.log(`You have ${messageCount} new messages`);
    }
}


