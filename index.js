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

console.log(getComputerChoice())


function getHumanChoice () {
    sign = window.prompt("Insert Choice");
}

if (sign === "Rock") {
    console.log(1);
} else if (sign === "Paper") {
    console.log(2);
    }