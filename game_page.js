function send(){
number1=document.getElementById("word_1").value;
number2=document.getElementById("word_2").value; 
actual_answer+parsInt(number1)* parsInt(number2)
}

question_number="<h4>"+nmber1  +"X" +number2 + "</h4>"
input_box ="<br>Answer:<input type=text id=input_check_box>";
check_button="<br><br><button class='btn btn-info onclick='check</button>";
row= question_number + input_box + check_button;

document.getElementById("output").innerHTML=row;

document.getElementById1("number1").value="";
document.getElementById1("number1").value="";

