
const btn = document.getElementById("btn")
let celci = document.getElementById("celci")
let fahrenheit = document.getElementById("fahrenheit")
let result = document.getElementById("result")
let t = document.getElementById("txt")
btn.onclick = ()=>{
   
    temp = t.value
    temp = Number(temp)
    if(celci.checked){
        temp = Celsius(temp)
        result.innerHTML = `${temp} °C`
    }
    else if(fahrenheit.checked){
        temp = Fahrenheit(temp)
        result.innerHTML = `${temp} °F`
    }
    else{
        result.innerHTML = "Please select any one"
    }
}

function Celsius(t){
    return (t-32) * (5/9) // faranheyt-den  celsi -e cevirme dusturu  °C = (°F − 32) x 5/9;

}
function Fahrenheit(t){
    return t * 9/5 + 32 // celsi-den faranheyt-e cevirme dusturu  °F = (°C × 9/5) + 32
}