var randomNum = Math.floor(Math.random() * 6) + 1;
var randomNum2 = Math.floor(Math.random() * 6) + 1;

document.querySelector("img.img1").setAttribute("src", "./images/dice"+randomNum+".png");
document.querySelector("img.img2").setAttribute("src", "./images/dice"+randomNum2+".png");

if (randomNum > randomNum2) {
    document.querySelector("h1").innerHTML = "Player 1 Wins";
}
else if (randomNum2 > randomNum) {
    document.querySelector("h1").innerHTML = "Player 2 Wins";
}
else 
    document.querySelector("h1").innerHTML = "Draw!"