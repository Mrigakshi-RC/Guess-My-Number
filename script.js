'use strict';
let guess=document.querySelector(".guess");

let message=document.querySelector(".message");
let initialMessage=message.innerText;

const check_btn=document.querySelector(".check");

const answer=document.querySelector(".number");
let body=document.querySelector("body");
let initialBody=body.style.backgroundColor;

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

function restore(){
    document.querySelector(".guess").value="";
    document.querySelector(".message").innerText=initialMessage;
    body.style.backgroundColor=initialBody;
    correct = Math.floor((Math.random() * 20) + 1);
    score=20;
    answer.innerText="?";
};

check_btn.addEventListener("click", function() {
    check(Number(guess.value));
})

again_btn.addEventListener("click", restore);