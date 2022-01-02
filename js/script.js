let section1 = document.querySelector(".our-skills");
let spans = document.querySelectorAll(".progress span");

window.onscroll = function () {
    if (window.scrollY >= section1.offsetTop - 100) {
        spans.forEach((span) => {
            span.style.width = span.dataset.width;
        });
    };
};





let nums = document.querySelectorAll(".stats span.number");
let section2 = document.querySelector(".stats");
let started = false
window.onscroll = function(){
    if(window.scrollY >= section2.offsetTop - 100){
        if(!started){
            nums.forEach((number) => startCount(number));
        }
        started = true;
    }
}
function startCount(el){
    let goal = el.dataset.goal;
    let count = setInterval(() => {
        el.textContent++;
        if(el.textContent == goal){
            clearInterval(count);
        }
    }, 2000 / goal);
};





let countDownDate = new Date("Feb 09, 2022 10:15:00").getTime();
let counter = setInterval(() => {
    let dateNow = new Date().getTime();
    let datsDiff = countDownDate - dateNow;

    let days = Math.floor(datsDiff / (1000 * 60 * 60 * 24));
    let hours = Math.floor((datsDiff % (1000 * 60 * 60 * 24))/(1000 * 60 * 60));
    let minutes = Math.floor((datsDiff % (1000 * 60 * 60))/(1000 * 60));
    let seconds = Math.floor((datsDiff % (1000 * 60))/1000);

    document.querySelector(".days").innerHTML = days;
    document.querySelector(".hours").innerHTML = hours < 10 ? `0${hours}` : hours;
    document.querySelector(".minutes").innerHTML = minutes < 10 ? `0${minutes}`: minutes;
    document.querySelector(".seconds").innerHTML = seconds < 10 ? `0${seconds}`: seconds;

    if(datsDiff < 0){
        clearInterval(counter);

        document.querySelector(".days").innerHTML = 99;
        document.querySelector(".hours").innerHTML = 24;
        document.querySelector(".minutes").innerHTML = 60;
        document.querySelector(".seconds").innerHTML = 60;
    }
}, 1000);
