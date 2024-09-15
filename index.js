let totalattempt = 5;
let attemptsDone = 0;
let won = 0;
let lose = 0;


const form = document.querySelector("form");
const cardBody = document.querySelector(".card-body");
const guess = form.querySelector("#num");
const checkButton = form.querySelector("#check");
const resultText = cardBody.querySelector(".result");
const msg = document.createElement("p");
const remainingAttempts = cardBody.querySelector(".attempt");

form.addEventListener("submit",function(event){
    event.preventDefault();

    if(attemptsDone === totalattempt){
        button.disabled = true;
        number.disabled = true;
    }if(attemptsDone<totalattempt+1){
        let guessNumber = Number(guess.value);
        checkRes(guessNumber);
        remainingAttempts.innerHTML = `Remaining Attempts: ${totalattempt - attemptsDone - 1}`
    }
    guess.value="";
    attemptsDone++;
});

function randomNumber(limit){
    return Math.floor(Math.random()*limit)+1;
}

function checkRes(value){
    
    const random = randomNumber(9);
    if(value === random){
        resultText.innerHTML = `Correct! You have WON.`;
        won++;
    }else{
        resultText.innerHTML = `Wrong! The number was ${random}`;
        lose++;
    }
    msg.innerHTML = `You have won ${won} times and lost ${lose} times`;
    msg.classList.add("large-text");
    cardBody.appendChild(msg);
}