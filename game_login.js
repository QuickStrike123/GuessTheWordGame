function AddUser(){

    Player1Name = document.getElementById("Player1Name").value;

    Player2Name = document.getElementById("Player2Name").value;

    console.log("Adding Player 1 and 2");

    localStorage.setItem("Player1",Player1Name);

    localStorage.setItem("Player2",Player2Name);

    window.location = "game_page.html";

}