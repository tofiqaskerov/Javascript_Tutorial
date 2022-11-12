const btn = document.getElementById("btnSubmit")
btn.onclick = () =>{
    const chechBox = document.getElementById("checkBox");
    const visaBtn = document.getElementById("visaBtn");
    const masderCardBtn = document.getElementById("mastercardBtn");
    const paypalBtn = document.getElementById("paypalBtn");
    if(chechBox.checked){
        console.log("You are subscribed");
    }else{
        console.log("You are not subscribed");
    }

    if(visaBtn.checked){
        console.log("You are paying with a Visa");
    }
    else if(masderCardBtn.checked){
        console.log("You are paying with a master Card");
    }
    else if(paypalBtn.checked){
        console.log("You are paying with a paypal");
    }
    else{
        console.log("You must select a payment type");
    }
        
    
} 