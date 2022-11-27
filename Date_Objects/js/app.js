
/* 
   Date = bu obyekt tarix ve vaxtlarla islemek ucun istifade olunur
*/


/* 
   Date = the date object is used to work with dates and times
*/


let date = new Date()
// let date = new Date(10000000000)
// let date = new Date(2023, 5, 10, 30,20, 10,20)  ilk parametr ili ,  2ci parametr necenci ay oldugunu gosterir ve ardicil olaraq gunu, saati, deqiqeni, saniyeni ve millisaniyeni ardicili olaraq qeyd etmek olar
// let date = new Date("Juny 4, 2002 00:00:00")

let year = date.getFullYear()
let dayOfMonth = date.getDate()
let dayOfWeek = date.getDay()
let month = date.getMonth()
let hour = date.getHours()
let minute = date.getMinutes()
let second = date.getSeconds()
let milliSecond = date.getMilliseconds()

console.log(year);
console.log(dayOfMonth);
console.log(dayOfWeek);
console.log(month);
console.log(hour);
console.log(minute);
console.log(second);
console.log(milliSecond);

console.log("-----------------------");

console.log(date);

let dateTime = formatDate(date)
let time = formatTime(date)

let result = document.getElementById("result")
result.innerHTML = `${dateTime} ${time}` 

function formatDate(date){
    let year = date.getFullYear()
    let month = date.getMonth()
    let day = date.getDate()

    return `${day}/${month}/${year}`
}



function formatTime(date){
    let hour = date.getHours()
    let minute = date.getMinutes()
    let second = date.getSeconds()
    let amOrPm = hour > 12 ? "PM" : "AM"   

    // hour = (hour % 12) || 12;
    return `${hour}:${minute}:${second} ${amOrPm}`
}




