$(document).ready(function () { 

    // let boxes = document.querySelectorAll(".box");
    let boxes = $(".box"); 

    let currentIndex = 0;

    let intervalId = null;

    function changeColor() {
        // boxes.forEach((box) => {
        //     box.style.backgroundColor = "white";
        // });

        // boxes[currentIndex].style.backgroundColor = "red";

        // let previousIndex = (currentIndex - 1 + boxes.length) % boxes.length;
        // boxes[previousIndex].style.backgroundColor = "green";
        
        // previousIndex = (currentIndex - 2 + boxes.length) % boxes.length;
        // boxes[previousIndex].style.backgroundColor = "blue";
        
        // previousIndex = (currentIndex - 3 + boxes.length) % boxes.length;
        // boxes[previousIndex].style.backgroundColor = "yellow";
        
        // previousIndex = (currentIndex - 4 + boxes.length) % boxes.length;
        // boxes[previousIndex].style.backgroundColor = "pink";
        
        // previousIndex = (currentIndex - 5 + boxes.length) % boxes.length;
        // boxes[previousIndex].style.backgroundColor = "violet";
        
        // currentIndex = (currentIndex + 1) % boxes.length;
///////////////////////////////////////////////////////////////////////////////////////
         boxes.css("background-color", "white");

         boxes.eq(currentIndex).css("background-color", "red");
 
         let previousIndex = (currentIndex - 1 + boxes.length) % boxes.length;
         boxes.eq(previousIndex).css("background-color", "green");
 
         previousIndex = (currentIndex - 2 + boxes.length) % boxes.length;
         boxes.eq(previousIndex).css("background-color", "blue");
 
         previousIndex = (currentIndex - 3 + boxes.length) % boxes.length;
         boxes.eq(previousIndex).css("background-color", "yellow");
 
         previousIndex = (currentIndex - 4 + boxes.length) % boxes.length;
         boxes.eq(previousIndex).css("background-color", "pink");
 
         previousIndex = (currentIndex - 5 + boxes.length) % boxes.length;
         boxes.eq(previousIndex).css("background-color", "violet");
 
         currentIndex = (currentIndex + 1) % boxes.length;


    }

    // setInterval(changeColor, 1000);
    
    // Start Animation
    function startAnimation() {
        if (!intervalId) { // Check if function is already running
            intervalId = setInterval(changeColor, 1000);
        }
    }

    // Stop Animation
    function stopAnimation() {
        clearInterval(intervalId);
        intervalId = null;
    }

    // document.getElementById("startBtn").addEventListener("click", startAnimation);
    // document.getElementById("stopBtn").addEventListener("click", stopAnimation);
    $("#startBtn").click(startAnimation);
    $("#stopBtn").click(stopAnimation);
 
});