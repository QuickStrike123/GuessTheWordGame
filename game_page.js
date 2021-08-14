Player1Name = localStorage.getItem("Player1");

Player2Name = localStorage.getItem("Player2");

Player1Score = 0;

Player2Score = 0;

document.getElementById("Player1Name").innerHTML = Player1Name + " : ";

document.getElementById("Player2Name").innerHTML = Player2Name + " : ";

document.getElementById("Player1Score").innerHTML = Player1Score;

document.getElementById("Player2Score").innerHTML = Player2Score;

document.getElementById("PlayerQuestion").innerHTML = "Question Turn = " + Player1Name;

document.getElementById("PlayerAnswer").innerHTML = "Answer Turn = " + Player2Name;

function Send() {

    GetWord = document.getElementById("Word").value;

    GetWordLC = GetWord.toLowerCase();

    console.log("Word In LowerCase = " + GetWordLC);

    CharAt1 = GetWordLC.charAt(1);

    console.log(CharAt1);

    wordlength_2 = Math.floor(GetWordLC.length/2);
    
    CharAt2 = GetWordLC.charAt(wordlength_2);

    console.log(CharAt2);

    lengthminus1 = GetWordLC.length - 1;
    
    CharAt3 = GetWordLC.charAt(lengthminus1);

    console.log(CharAt3);

    removecharat1 = GetWordLC.replace(CharAt1,"*");

    removecharat2 = removecharat1.replace(CharAt2,"*");

    removecharat3 = removecharat2.replace(CharAt3,"*");

    console.log(removecharat3);

    QuestionWord = "<h4 id=word_display> Q. " + removecharat3 + "</h4>";

    inputBox = "<br> Answer: <input type = 'text' id = 'input_CheckBox'>";

    checkbutton = "<br> <br> <button class='btn btn-info' onclick='Check()' > Check </button>";

    Row = QuestionWord + inputBox + checkbutton;

    document.getElementById("Output").innerHTML = Row;

    document.getElementById("Word").value = "";

}

QuestionTurn = "Player1";

AnswerTurn = "Player2";

function Check() {

    PlayerAnswer = document.getElementById("input_CheckBox").value;

    PlayerAnswer = PlayerAnswer.toLowerCase();
    
    if (PlayerAnswer == GetWordLC) {
        
        if (AnswerTurn == "Player1") {

            Player1Score += 1;

            document.getElementById("Player1Score").innerHTML = Player1Score;
            
        } else {

            Player2Score += 1;

            document.getElementById("Player2Score").innerHTML = Player2Score;
            
        }
        
    }

    if (QuestionTurn == "Player1") {

        QuestionTurn = "Player2";

        document.getElementById("PlayerQuestion").innerHTML = "Question Turn = " + Player2Name;
        
    } else {

        QuestionTurn = "Player1";

        document.getElementById("PlayerQuestion").innerHTML = "Question Turn = " + Player1Name;
        
    }

    if (AnswerTurn == "Player1") {

        AnswerTurn = "Player2";

        document.getElementById("PlayerAnswer").innerHTML = "Answer Turn = " + Player2Name;
        
    } else {

        AnswerTurn = "Player1";

        document.getElementById("PlayerAnswer").innerHTML = "Answer Turn = " + Player1Name;
        
    }

    document.getElementById("Output").innerHTML = "";
    
}