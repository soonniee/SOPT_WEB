const toggleSwitch = document.querySelector("label"),
    toggleCheck = document.querySelector("input"),
    slider = document.querySelector("span"),
    body = document.querySelector("body");
let darkMode = false;
toggleCheck.addEventListener("click",()=>{
    if(darkMode){
        toggleSwitch.classList.remove("switch-on");
        slider.classList.remove("slider-on");
        body.classList.remove("dark");
        body.classList.add("light");
        darkMode = false;
    }
    else{
        console.log("aa");
        toggleSwitch.classList.add("switch-on");
        slider.classList.add("slider-on");
        slider.style.transition=`transform .5s`;
        body.classList.remove("light");
        body.classList.add("dark");
        darkMode = true;
    }
    
});
