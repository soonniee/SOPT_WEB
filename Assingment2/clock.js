const header = document.querySelector("header"),
    digitalTime = document.querySelector(".digital__time"),
    digitalBtn = document.querySelector(".digital__btn"),
    analogHour = document.querySelector(".analog__hour"),
    analogMinute = document.querySelector(".analog__minute"),
    analogSecond = document.querySelector(".analog__second");
let hour24 = false;
const getTime = () =>{
    const now = new Date();
    
    const year = now.getFullYear(),
        day = now.getDate(),
        minute = now.getMinutes(),
        second = now.getSeconds();
    let month = now.getMonth(),
        hour = now.getHours();
    const monthList = [
         "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
    ];
    let time;
    month = monthList[month];
    if(!hour24){
        if(hour >=0 && hour<=11){
            if(hour === 0) hour = 12;
            
            time = "AM";
        }else{
            if(hour > 12) hour -= 12;
            
            time = "PM";
        }
        digitalBtn.innerHTML = "24H";
    }
    else time = "";
    return {year,month,day,hour,minute,second,time};
};
const paintClock = (hour,minute,second) =>{
    const hourDegree = hour * (360/12)+90,
        minuteDegree = minute * (360/60)+90 ,
        secondDegreee = second * (360/60) +90;
    analogHour.style.transform = `rotate(${hourDegree}deg)`;
    analogMinute.style.transform = `rotate(${minuteDegree}deg)`;
    analogSecond.style.transform = `rotate(${secondDegreee}deg)`;
};
const paintTime = () =>{
    const {year, month, day, hour, minute, second,time} = getTime();
    
    header.innerHTML = `<span> ${day} ${month}, ${year}</span>`;
    digitalTime.innerHTML = `${time}   ${hour < 10 ? `0${hour}` : hour} : ${minute < 10 ? `0${minute}` : minute} : ${second < 10 ? `0${second}` : second}`;
    paintClock(hour,minute,second);
};

const changeTime = () =>{
    if(hour24){
        hour24 = false;
       
    }else{
        hour24 = true;
         digitalBtn.innerHTML="12H";
    }
};
const init = () =>{
    setInterval(paintTime,1000);
    digitalBtn.addEventListener("click",changeTime);
};
init();

