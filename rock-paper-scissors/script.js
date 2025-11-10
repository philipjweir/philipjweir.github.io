document.querySelector("button").addEventListener("click", function () {
    var playerChoice = document.getElementById("game").value;

    var rock = "Rock";
    var paper = "Paper";
    var scissors = "Scissors";

    var choices = [rock, paper, scissors];

    // CPU random choice
    var cpuChoice = choices[Math.floor(Math.random() * 3)];

    var result = "";

    if (playerChoice === cpuChoice) {
        result = "It's a tie! Go again.";
    } 
    else if (
        (playerChoice === rock && cpuChoice === scissors) ||
        (playerChoice === rock && cpuChoice === rock) ||
        (playerChoice === scissors && cpuChoice === scissors)
    ) {
        result = "You win!";
    } else {
        result = "You lose, try again!";
    }

    alert(result);
});