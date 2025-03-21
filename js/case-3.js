$(document).ready(function () { 

    let boxes = $(".box"); 
    let currentIndex = 0;
    let direction = 1;  // 1 for right, -1 for left
    let intervalId = null;
    let stepCount = 0;  // To count steps
    let audio = document.querySelector("audio");

    function changeColor() {
        // Reset all boxes to white before applying new colors
        boxes.css("background-color", "white");

        // Set colors based on the pattern
        boxes.eq(currentIndex).css("background-color", "red"); // Current box - Red
        
        let prevIndex1 = (currentIndex - 1 + boxes.length) % boxes.length;
        let nextIndex1 = (currentIndex + 1) % boxes.length;
        boxes.eq(prevIndex1).css("background-color", "pink"); // Left box add color pink
        boxes.eq(nextIndex1).css("background-color", "violet"); // Right box add color violet
        
        let prevIndex2 = (currentIndex - 2 + boxes.length) % boxes.length;
        let nextIndex2 = (currentIndex + 2) % boxes.length;
        boxes.eq(prevIndex2).css("background-color", "gray"); // Two boxes left add color gray
        boxes.eq(nextIndex2).css("background-color", "brown"); // Two boxes right add color brown

        // Move the light in the correct direction
        currentIndex += direction;
        stepCount++; // Increment step count

        // Reverse direction (between begin - end)
        if (currentIndex === boxes.length - 1 || currentIndex === 0) {
            direction *= -1;
        }
    }

    // Start Animation
    function startAnimation() {
        if (!intervalId) {
            intervalId = setInterval(changeColor, 100);
            audio.loop = true;
            audio.play();
        }
    }

    // Stop Animation
    function stopAnimation() {
        clearInterval(intervalId);
        intervalId = null;
        audio.pause();
        audio.currentTime = 0;
    }

    // Add event listeners using jQuery
    $("#startBtn").click(startAnimation);
    $("#stopBtn").click(stopAnimation);

});
