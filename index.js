
var randomNumber = Math.floor(Math.random() * 2) + 1; //1-2

var randomDiceImage = "Image" + randomNumber + ".jpg"; 

var randomImageSource = "images/" + randomDiceImage; //images/Images"1-2".jpg

var image1 = document.querySelector("img");

image1.setAttribute("src", randomImageSource);




//If player 1 wins
// if (randomNumber1 =1) {
//   document.querySelector("h1").innerHTML = "🚩 Heads Win";
// }

// else {
//   document.querySelector("h1").innerHTML = "🚩 Tails win";
// }
