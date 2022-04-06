function send() {
   number1 = document.getElementById("NUMBER1").value
   number2 = document.getElementById("NUMBER2").value
   actual_number = parseInt(number1)*parseInt(number2)
   question_number = "<h4>" + number1 + "X" + number2 + "</h4>"
   input_box = "<br>Answer:<input id = 'input_check_box' type = 'number'>"
    check_button = "<br><br><button id = 'check' class = 'btn btn-info' onclick = 'check()'>Check</button> "
    row = question_number + input_box + check_button
    document.getElementById("output").innerHTML = row
    document.getElementById("NUMBER1").value = ""
    document.getElementById("NUMBER2").value = ""
}