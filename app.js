let userScore = 0;
let computeScore = 0;
const userScore_span = document.getElementById("userScore");
const computerScore_span = document.getElementById("computerScore")
//const scoreBoard_div = document.querySelector(".scoreBoard")
const result_div_p = document.querySelector(".result > p");
const rock_div = document.getElementById("rock");
const paper_div = document.getElementById("paper");
const scissors_div = document.getElementById("scissors");

main();

function main() {
    rock_div.addEventListener('click',  () => game("rock"));

    paper_div.addEventListener('click', () => game("paper"));

    scissors_div.addEventListener('click', () => game("scissor"));
}

function game(userChoice) {
    const computerChoice = getComputerChoice();
    switch (userChoice+computerChoice) {
        case "rockscissor": case "paperrock": case "scissorpaper":
            win(userChoice, computerChoice)
            break;
        case "rockpaper": case "paperscissor": case "scissorrock":
            lose(userChoice, computerChoice)
            break;
        case "rockrock": case "paperpaper": case "scissorscissor":
            draw(userChoice, computerChoice)
            break;
    }

}

function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissor'];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

function win(userChoice, computerChoice) {
    userScore++;
    userScore_span.innerHTML = userScore;
    const userChoice_div = document.getElementById(userChoice);
    result_div_p.innerHTML = capitalizeFirstLetter(userChoice) + " beats " + capitalizeFirstLetter(computerChoice) + ". You win!";
    userChoice_div.classList.add("greenGlow");
    setTimeout(() => userChoice_div.classList.remove("greenGlow"), 300);
}

function lose(userChoice, computerChoice) {
    computeScore++;
    computerScore_span.innerHTML = computeScore;
    const userChoice_div = document.getElementById(userChoice);
    result_div_p.innerHTML = capitalizeFirstLetter(userChoice) + " loses to " + capitalizeFirstLetter(computerChoice) + ". You Lose!";
    userChoice_div.classList.add("redGlow");
    setTimeout(() => userChoice_div.classList.remove("redGlow"), 300);
}

function draw (userChoice, computerChoice) {
    const userChoice_div = document.getElementById(userChoice);
    result_div_p.innerHTML = capitalizeFirstLetter(userChoice) + " equals " + capitalizeFirstLetter(computerChoice) + ". Its a draw!";
    userChoice_div.classList.add("grayGlow");
    setTimeout(() => userChoice_div.classList.remove("grayGlow"), 300);
}

function capitalizeFirstLetter(word) {
    return word.charAt(0).toUpperCase() + word.slice(1)
}