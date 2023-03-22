'use strict';
let guess=document.querySelector(".guess");
let message=document.querySelector(".message");
const check_btn=document.querySelector(".check");
const body=document.querySelector("body");

function check(number){
    if (number>15){
        message.innerText="Too High";
    }
    else if (number<15){
        message.innerText="Too Low";
    }
    else{
        message.innerText="Correct Number!";
        body.style.backgroundColor="#60b347";
    }
}

check_btn.addEventListener("click", function() {
    check(Number(guess.value));
})