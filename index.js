// document.querySelector("button").addEventListener("click",handleClick);

/* function handleClick() {
    alert("I got clicked");
} */

//anonymous function
/* document.querySelector("button").addEventListener("click", function () {
    alert("i got clicked");

    //what to do when click detected.
}); */

var drumButtons = document.querySelectorAll(".drum");

for(var i=0; i<drumButtons.length; i++) {
    drumButtons[i].addEventListener("click", function () {
        alert("I got clicked!");
    });
}
