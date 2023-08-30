hourEl =document.getElementById("hours")
minutesEL =document.getElementById("minutes")
secondsEL =document.getElementById("seconds")
ampmEL = document.getElementById("ampm")

function Updatedclock(){
    var h = new Date().getHours();
    var m = new Date().getMinutes();
    var s = new Date().getSeconds();
    let ampm = "AM"
    if (h > 12){
        h = h - 12; ampm = "PM"
    }
    hourEl.innerHTML = h;
    minutesEL.innerHTML = m
    secondsEL.innerHTML = s

    setTimeout(function(){
        Updatedclock()
    
    }, 1000)
}
Updatedclock()