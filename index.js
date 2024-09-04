let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");

const msg = document.querySelector("#msg");
const userscorepara = document.querySelector("#user-score");
const compscorepara = document.querySelector("#comp-score");



const genCompChoice = () => {
    const options = ["rock", "paper", "scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
};
const drawGame = () => {
    // console.log("game was draw!.");
    msg.innerText = "Game was Draw. play again.";
    msg.style.backgroundColor = "rgb(246, 217, 103)";
}

const showWinner = (userWin, userchoice, compChoice) => {
    if (userWin) {
        userScore++;
        userscorepara.innerText = userScore;
        // console.log("you win!");
        msg.innerText = `You win! ${userchoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    } else {
        compScore++;
        compscorepara.innerText = compScore;
        // console.log("you lose.");
        msg.innerText = `You lose. ${compChoice} beats your ${userchoice}`;
        msg.style.backgroundColor = "red";
    }

}

const playGame = (userchoice) => {
    console.log("user choice =", userchoice);
    //Generate computer choice
    const compChoice = genCompChoice();
    console.log("comp choice =", compChoice);

    if (userchoice === compChoice) {
        drawGame();
    } else {
        let userWin = true;
        if (userchoice === "rock") {
            userWin = compChoice === "paper" ? false : true;
        } else if (userchoice === "paper") {
            userWin = compChoice === "scissors" ? false : true;
        } else {
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin, userchoice, compChoice);
    }
};

choices.forEach((choice) => {
    console.log(choice);
    choice.addEventListener(
        "click", () => {
            const userchoice = choice.getAttribute("id");
            // console.log("choice was clicked", userchoice);
            playGame(userchoice, );

        });

});