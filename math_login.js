var Player1Name = "";
var Player2Name = "";

function adduser() {
    Player1Name = document.getElementById("player1_name_input").value;
    Player2Name = document.getElementById("player2_name_input").value;

    localStorage.setItem("Player 1 Name", Player1Name);
    localStorage.setItem("Player 2 Name", Player2Name);

    window.location = "math_page.html";
}