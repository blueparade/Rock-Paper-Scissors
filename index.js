function getComputerChoice () {
    let result = Math.floor(Math.random() * 3 + 1);

   if (result === 1) {
        return("Rock");
    } else if (result === 2) {
        return("Paper");
    } else if (result === 3) {
        return("Scissors");
    }
}




function getHumanChoice () {
    let sign = window.prompt("Insert Choice");

    if (sign === "Rock") {
        return("Rock");
    } else if (sign === "Paper") {
        return("Paper");
    } else if (sign === "Scissors") {
        return("Scissors");
    }
}

