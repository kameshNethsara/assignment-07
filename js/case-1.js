
//Vanila Script Code --> comment code
//jQuery Code --> working code

$(document).ready(function () { //jQuery Opening Tag

    let letterList = ["A", "B", "C", "D", "E", "F"];
    let letters = document.querySelectorAll(".letter");
    let currentIndex = 0;
    let intervalId = null;

    function changeLetters() {
        /*
        letters.forEach((letter,index) => {
            letter.innerHTML = letterList[(currentIndex + index) % letterList.length]
        });
        currentIndex++;
        */
        $(".letter").each(function (index) {
            $(this).text(letterList[(currentIndex + index) % letterList.length]);
        });
        currentIndex++;
    }


    // Start Animation
    function startAnimation() {
        if (!intervalId) { // Check if function is already running
            intervalId = setInterval(changeLetters, 1000);
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