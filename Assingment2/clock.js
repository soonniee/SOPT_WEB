const header = document.querySelector("header"),
    digital_time = document.querySelector(".digital__time"),
    digital_btn = document.querySelector(".digital__btn"); 
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
    month = monthList[month];
    if(hour >=0 && hour<=11){
        if(hour === 0) hour = 12;
        digital_btn.innerHTML = "AM";
    }else{
        if(hour > 12) hour -= 12;
        digital_btn.innerHTML = "PM";
    }
    return {year,month,day,hour,minute,second};
};
const paintTime = () =>{
    const {year, month, day, hour, minute, second} = getTime();
    
    header.innerHTML = `Today is <span>${day} ${month}, ${year}</span>`;
    digital_time.innerHTML = `${hour < 10 ? `0${hour}` : hour} : ${minute < 10 ? `0${minute}` : minute} : ${second < 10 ? `0${second}` : second}`;
};
const init = () =>{
    setInterval(paintTime,1000);
};
init();

