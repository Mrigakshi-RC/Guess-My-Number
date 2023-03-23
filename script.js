'use strict';
let guess=document.querySelector(".guess");
let message=document.querySelector(".message");
const check_btn=document.querySelector(".check");
const answer=document.querySelector(".number");
const body=document.querySelector("body");
let score = Math.floor((Math.random() * 20) + 1);

function check(number){
    if (number>score){
        message.innerText="📈 Too High";
    }
    else if (number<score){
        message.innerText="📉 Too Low";
    }
    else{
        message.innerText="Correct Number!";
        body.style.backgroundColor="#60b347";
        answer.innerText=score;
    }
}

check_btn.addEventListener("click", function() {
    check(Number(guess.value));
})