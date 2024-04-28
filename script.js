function choice(userChoice) {
    var confirmation = confirm("Are you absolutely sure?")
    if(confirmation == true){
        var result = document.getElementById("result");
        userChoice.style.backgroundColor = "darkgray";
        var choices = ["rock", "paper", "scissors"];
        //computer chooses
        var computerChoice = choices[Math.floor(Math.random() * choices.length)];

        //highlight the computers choice
        if(computerChoice == "rock"){
            document.getElementById("computerRock").style.backgroundColor = "darkgray";
        }
        if(computerChoice == "paper"){
            document.getElementById("computerPaper").style.backgroundColor = "darkgray";
        }
        if(computerChoice == "scissors"){
            document.getElementById("computerScissors").style.backgroundColor = "darkgray";
        }

        //compare players choice with computers choice
        if (userChoice.id == computerChoice) {
            result.innerHTML = "It is a tie :|";
            result.style.margin = "10px";
            result.style.fontFamily = "Verdana, Geneva, Tahoma, sans-serif";
            result.style.fontSize = "30px";
            result.style.fontWeight = "bold";
            result.style.color = "white";
            result.style.textShadow = "1px 1px 4px black";
            result.style.marginLeft = "33%";
        } else if (
            (userChoice.id == "rock" && computerChoice == "scissors") ||
            (userChoice.id == "paper" && computerChoice == "rock") ||
            (userChoice.id == "scissors" && computerChoice == "paper")
        ) {
            result.innerHTML = "Congratulations! You won :)";
            result.style.margin = "10px";
            result.style.fontFamily = "Verdana, Geneva, Tahoma, sans-serif";
            result.style.fontSize = "30px";
            result.style.fontWeight = "bold";
            result.style.color = "white";
            result.style.textShadow = "1px 1px 4px black";
            result.style.marginLeft = "33%";
        } else {
            result.innerHTML = "Unfortunately you lost :(";
            result.style.margin = "10px";
            result.style.fontFamily = "Verdana, Geneva, Tahoma, sans-serif";
            result.style.fontSize = "30px";
            result.style.fontWeight = "bold";
            result.style.color = "white";
            result.style.textShadow = "1px 1px 4px black";
            result.style.marginLeft = "33%";
        }
        //after 2 seconds the highlighted buttons changes back to default
        setTimeout(function() {
            userChoice.style.backgroundColor = "";
            document.getElementById("computer" + computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)).style.backgroundColor = "";
            document.getElementById("result").innerHTML = "";
        }, 2000);
    }
}
