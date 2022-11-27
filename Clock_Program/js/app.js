

let result = document.getElementById("result")

setInterval(Update, 1000)
Update()

function Update(){
    let date = new Date()
    let ft = formatTime(date)
    result.innerHTML = ft
    
    function formatTime(date){
        let hour = date.getHours()
        let minute = date.getMinutes()
        let second = date.getSeconds()
        let amOrPm = hour >= 12 ? "PM" : "AM" 
        hour = (hour % 12) || 12;
        hour =  formatZeros(hour)
        minute = formatZeros(minute)
        second = formatZeros(second)
        return `${hour}:${minute}:${second} ${amOrPm}`

    }
    function formatZeros(time){
        time = time.toString()
        return  time.length < 2 ? `0${time}`: time
    }
}