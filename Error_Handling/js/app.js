
let result = document.querySelector(".result")



try {
    let age = window.prompt("Enter your age");
    age = Number(age)
    if(isNaN(age)) throw "Please write your age"
    if(age == "") throw "Please don't keep it empty "
    if(age > 18 && age < 50 ){      
        result.innerHTML = `Your are selected: Age: ${age}`
        console.log(age);
    } 
    else{
        throw "Your are not selected"
    }
    
}catch(error) {
    
    result.innerHTML = `Explanation: ${error}`
    console.log(error);
}
finally {
   console.log("timeout");
}