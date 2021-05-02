const btnPrev = document.querySelector(".fa-arrow-left"),
    btnNext = document.querySelector(".fa-arrow-right"),
    btnRound = document.querySelectorAll(".btn__round"),
    slides = document.querySelectorAll(".slide"),
    slidesNum = slides.length;

let curPos = 0;
let curTransform = new Array(slidesNum);
curTransform.fill(0);
const movePrev= () =>{
    let HEIGHT = 200;
    let position = (slidesNum-1) * HEIGHT ;
    slides[curPos].style.transform = `translateX(${position + curTransform[curPos]}px )`;
    slides[curPos].style.transition = `transform .5s`;
    curTransform[curPos] += position;
    HEIGHT *= -1;
    for(let i=0;i<slidesNum;i++){
        
        if(i!==curPos) {
            slides[i].style.transform = `translateX(${HEIGHT + curTransform[i]}px)`;
            slides[i].style.transition = `transform .5s`;
            curTransform[i] += HEIGHT;
        } 
    }
    curPos = (curPos+1) % slidesNum;
}
const moveNext = ()=>{
    let HEIGHT = 200;
        let position = (slidesNum-1) * HEIGHT *(-1);
        if(curPos<=0) {
            curPos+=slides.length;
            slides[curPos-1].style.transform = `translateX(${position + curTransform[curPos-1]}px)`;
            slides[curPos-1].style.transition = `transform .5s`;
            curTransform[curPos-1] += position;
        }
        else {
            slides[curPos-1].style.transform = `translateX(${position + curTransform[curPos-1]}px)`;
            slides[curPos-1].style.transition = `transform .5s`;
            curTransform[curPos-1] += position;
        }
        for(let i=0;i<slidesNum;i++){
            if(i!==(curPos-1)) {
                slides[i].style.transform = `translateX(${HEIGHT + curTransform[i]}px)`;
                slides[i].style.transition = `transform .5s`;
                curTransform[i] += HEIGHT;
            } 
        }
        curPos -=1;
}
btnNext.addEventListener("click",moveNext);
btnPrev.addEventListener("click",movePrev);
btnRound.forEach((btn,index)=>{
    
    
    btn.addEventListener("click",()=>{
        curPos = 0;
        curTransform.fill(0);
        console.log(index)
        for(let i=0;i<slidesNum;i++) slides[i].style.transform = `translateX(0)`;
        for(let i=0;i<index;i++) moveNext();
    })
})