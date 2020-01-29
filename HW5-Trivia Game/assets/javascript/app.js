$(document).ready(function(){ 

var score = 0;
var array = ["radio1", "radio2", "radio3", "radio4", "radio5", "radio6", "radio7"];

///if button clicked = 1, add to... 
// value of x = 1, score ++

setTimeout(function () { alert("Time's up!"); }, 15 * 1000);

for (let i = 0; i < array.length; i++) {
  const value = array[i];

}

document.getElementById("form1").onsubmit=function() {
    radio1 = parseInt(document.querySelector('input[name = "radio1"]:checked').value);
    radio2 = parseInt(document.querySelector('input[name = "radio2"]:checked').value);
    radio3 = parseInt(document.querySelector('input[name = "radio3"]:checked').value);
    radio4 = parseInt(document.querySelector('input[name = "radio4"]:checked').value);
    radio5 = parseInt(document.querySelector('input[name = "radio5"]:checked').value);
    radio6 = parseInt(document.querySelector('input[name = "radio6"]:checked').value);
    radio7 = parseInt(document.querySelector('input[name = "radio7"]:checked').value);
    return false; 
  }  
  
 document.getElementById("score").innerHTML = score;

 document.getElementById("radio").innerHTML = value;
$(on.click).radio > 0; return value;


})
