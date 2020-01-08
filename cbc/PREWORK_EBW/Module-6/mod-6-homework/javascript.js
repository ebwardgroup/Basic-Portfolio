// document.getElementById("shrinkBtn").addEventListener("mouseover", function(){

//     document.getElementById("box").style.height = "25px";

// });

// document.getElementById("growBtn").addEventListener("click", function(){

//     document.getElementById("box").style.height = "250px";

// });

// document.getElementById("resetBtn").addEventListener("click", function(){

//     document.getElementById("box").style.height = "150px";

// });


document.getElementById("button1").addEventListener("click", function(){
    document.getElementById("box").style.height = "300px";
});
document.getElementById("button2").addEventListener("click", function(){
    document.getElementById("box").style.backgroundColor = "blue";
});
document.getElementById("button3").addEventListener("click", function(){
    document.getElementById("box").style.opacity = 0.3;
});
document.getElementById("button4").addEventListener("click", function(){
    document.getElementById("box").style.opacity = 1;
    document.getElementById("box").style.backgroundColor = "orange";
    document.getElementById("box").style.height = "150px";
})
