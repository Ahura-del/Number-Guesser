let mainForm = document.querySelector('.main-form');
let maxNum = document.querySelector('.max-num');
let minNum = document.querySelector('.min-num');
let numInput = document.querySelector('.num-input');
let submit = document.querySelector('#submit');
let message = document.querySelector('.message');


let intMax = 10;
let intMin = 1;
let guesslength = 3;
let guessNum = Math.floor(Math.random() * 10 + 1);


maxNum.textContent = intMax;
minNum.textContent = intMin;


mainForm.addEventListener('mousedown', (e) => {
    if (e.target.className === 'play-again') {
        window.location.reload();
    }
})






submit.addEventListener('click', () => {

    let guess = parseInt(numInput.value);
    if (isNaN(guess) || guess > intMax || guess < intMin) {

        showAlert(`Please insert number between ${intMin} to ${intMax}`, "red");
        setTimeout(clearError, 1000);


    } else if (guess != guessNum) {


        guesslength -= 1;
        if (guesslength === 0) {
            gameOver(`Game Over ! You Lost , the correct number was ${guessNum}`, 'red');
        } else {
            showAlert(`You're number isn't correct | You can ${guesslength} time guessing`, 'orange');
            setTimeout(clearError, 1000);
        }


    } else {
        showAlert(`${guessNum} is correct ! You're Win \u{1F44F} `, 'green');

        numInput.disabled = true;

        submit.value = 'Play Again';
        submit.className = 'play-again';


    }



})

function showAlert(error, color) {
    message.textContent = error;
    //borderColor with C
    message.style.color = color;
    numInput.style.borderColor = color;

}




function clearError() {
    message.textContent = "";
    numInput.style.borderColor = "";
    numInput.value = "";
}


function gameOver(msg, color) {
    numInput.disabled = true;
    message.textContent = msg;
    numInput.style.borderColor = color;
    message.style.color = color;


    submit.value = 'Play Again';
    submit.className = 'play-again';

}