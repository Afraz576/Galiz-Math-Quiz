player_1_name=localStorage.getItem("player1_name");
player_2_name=localStorage.getItem("player2_name");
player_1score= 0;
player_2score=0;
document.getElementById("player1_name").innerHTML=player_1_name+":";
document.getElementById("player2_name").innerHTML=player_2_name+":";
document.getElementById("player1_score").innerHTML=player_1score;
document.getElementById("player2_score").innerHTML=player_2score;
document.getElementById("player_question").innerHTML="Question Turn-"+player_1_name;
document.getElementById("player_answer").innerHTML="Answer Turn-"+player_2_name;

function send(){
    getNumber1=document.getElementById("number1").value;
    getNumber2=document.getElementById("number2").value;
    actualanswer=parseInt(getNumber1)*parseInt(getNumber2);
    question="<h4>"+getNumber1+" X "+getNumber2+"</h4>";
    inputbox="<br> Answer:<input type='text' id='inputbox'>";
    checkbutton="<br><br><button class='btn btn-info' onclick='check()'>Check</button>";
    row=question+inputbox+checkbutton;
    document.getElementById("output").innerHTML=row;
    document.getElementById("number1").value="";
    document.getElementById("number2").value="";
}

question_turn="player_1";
answer_turn="player_2";

function check(){
    get_answer=document.getElementById("inputbox").value;
    
    if(get_answer==actualanswer){
      if(answer_turn=="player_1"){
        player_1score=player_1score+1;
        document.getElementById("player1_score").innerHTML=player_1score;
    }
else{
    player_2score=player_2score+1;
        document.getElementById("player2_score").innerHTML=player_2score;
}
}
if(question_turn=="player_1"){
    question_turn="player_2";
    document.getElementById("player_question").innerHTML="Question turn-"+player_2_name;
}
else {
    question_turn="player_1";
    document.getElementById("player_question").innerHTML="Question turn-"+player_1_name;
}
if(answer_turn=="player_1"){
    answer_turn="player_2";
    document.getElementById("player_answer").innerHTML="Answer turn-"+player_2_name;
}
else {
    answer_turn="player_1";
    document.getElementById("player_answer").innerHTML="Answer turn-"+player_1_name;
}
document.getElementById("output").innerHTML="";
}