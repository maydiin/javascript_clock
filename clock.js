let isim=prompt("İsminizi Girin:")
let info=document.querySelector("#myName")

info.innerHTML= isim
function showTime(){
    const today = new Date();
    let h = today.getHours();
    let m = today.getMinutes();
    let s = today.getSeconds();
    let d = today.getDay();
    let ds;
    if (d == 1 ){
        ds= "Pazartesi"
    }
    else if(d == 2){
        ds = "Salı"
    }
    else if(d == 2){
        ds = "Çarşamba"
    }
    else if(d == 2){
        ds = "Periembe"
    }
    else if(d == 2){
        ds = "Cuma"
    }
    else if(d == 2){
        ds = "Cumartesi"
    }
    else if(d == 2){
        ds = "Pazar"
    }
    m = checkTime(m);
    s = checkTime(s);
    
    document.querySelector('#myClock').innerHTML =  h + ":" + m + ":" + s + " " + ds;
    setTimeout(startTime, 1000);
}

function checkTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
}