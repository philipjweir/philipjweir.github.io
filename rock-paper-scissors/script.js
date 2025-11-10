document.querySelector("button").addEventListener("click", function () {
    var playerChoice = document.getElementById("game").value;

    var rock = "rock";
    var paper = "paper";
    var scissors = "scissors";

    var choices = [rock, paper, scissors];

    // CPU random choice
    var cpuChoice = choices[Math.floor(Math.random() * 3)];

    var result = "";

    if (playerChoice === cpuChoice) {
        result = "It's a tie! Go again.";
    } 
    else if (
        (playerChoice === rock && cpuChoice === scissors) ||
        (playerChoice === paper && cpuChoice === rock) ||
        (playerChoice === scissors && cpuChoice === paper)
    ) {
        result = "You win!";
    } else {
        result = "You lose, try again!";
    }

    alert(result);
});
