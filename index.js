var drumButtons = document.querySelectorAll(".drum");

for(var i=0; i<drumButtons.length; i++) {
    drumButtons[i].addEventListener("click", function () {
        /* var audio = new Audio('sounds/tom-1.mp3');
        audio.play(); */
        this.style.color  = "white";
    });
}
