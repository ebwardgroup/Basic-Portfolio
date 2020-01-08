document.getElementById("add").addEventListener("click", function(){
    var count =  Number(document.getElementById("count").innerText) + 1;
    document.getElementById("count").innerText = count;  
    if (count < 0){
        document.getElementById("count").style.color = "red"
    } else {
        document.getElementById("count").style.color = "black"
    }           
})

document.getElementById("subtract").addEventListener("click", function(){
    var count =  Number(document.getElementById("count").innerText) - 1;
    document.getElementById("count").innerText = count;
    if (count < 0){
        document.getElementById("count").style.color = "red"
    } else {
        document.getElementById("count").style.color = "black"
    }            
})
document.getElementById("reset").addEventListener("click", function(){
    document.getElementById("count").innerText = 0;           
})