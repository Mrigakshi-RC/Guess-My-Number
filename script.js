'use strict';
let guess=document.querySelector(".guess");
let initialGuess=guess;

let message=document.querySelector(".message");
let initialMessage=message;

const check_btn=document.querySelector(".check");
let initialCheck=check_btn;

const answer=document.querySelector(".number");
const body=document.querySelector("body");
let initialBody=body;

let again_btn=document.querySelector(".again");

let correct = Math.floor((Math.random() * 20) + 1);
let score=20;


function check(number){
    if (number===correct){
        message.innerText="Correct Number!";
        body.style.backgroundColor="#60b347";
        answer.innerText=correct;
    }
    else if (score>1){
        if (number>correct){
            message.innerText="📈 Too High";
            score--;
            document.querySelector(".score").textContent=score;
        }
        else if (number<correct){
            message.innerText="📉 Too Low";
            score--;
            document.querySelector(".score").textContent=score;
        }
    }
    else{
        score=0;
        document.querySelector(".score").textContent=score;
        message.innerText="You lost the game 💥";
    }

}

function restore(){};

check_btn.addEventListener("click", function() {
    check(Number(guess.value));
})