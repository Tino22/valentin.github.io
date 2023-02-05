
//alert("Beep boop");

//alert to say something is happenning when button is clicked
const mystButton = document.getElementById("mysteryButton");
const somethingIsHappening = () => {
    alert("Something is happening!");
}

//change the background to pink!
const allContent = document.getElementById("content");
const changeToPink = () => {
    allContent.style.backgroundColor = "pink";
    mystButton.style.backgroundColor = "skyblue";
};


mystButton.addEventListener("click", somethingIsHappening);
mystButton.addEventListener("click", changeToPink);

