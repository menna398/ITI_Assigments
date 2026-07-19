var player1 = "Paper";
var player2 = "Paper";
var result="";

//Rock , Paper , Scissors
if (player1 === player2) {
    result = "It's A Tie";
}
else if ( (player1 === "Rock" && player2 === "Scissors") || (player1 === "Paper" && player2 === "Rock") || (player1 === "Scissors" && player2 === "Paper")) {
    result = "player1 Wins!";
}
else {
    result = "player2 Wins!";
}

console.log(result);