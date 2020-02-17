//array of images
var imageTags = ['image1', 'image2', 'image3', 'image4', 'image5', 'image6', 'image7', 'image8', 'image9', 'image10'];
//Back of the cards or Blank image
var backOfCard = "imgs/money.jpg";
//create an empty array for front of cards or actaul imgs
var cards = new Array();

function getBackOfCards() {
    //random img function
    createRandomImageArray();
    for (var i = 0; i < imageTags.length; i++) {
        document.getElementById(imageTags[i]).src = backOfCard;
    }
}

function createRandomImageArray() {
    //real imgs
    var cardFront = ['imgs/pancake.jpg', 'imgs/waffle.jpg', 'imgs/pizza.jpg', 'imgs/sandwhich.jpg', 'imgs/gravestone.jpg'];
    var count = [0, 0, 0, 0, 0];
    //check to see if cards if full
    while (cards.length < 10) {
        //random number between total and 0
        var randomNumber = Math.floor(Math.random() * cardFront.length)
        //checks if the total number of each img is less than 2, if so then add the img to the cards array
        if (count[randomNumber] < 2) {
            cards.push(cardFront[randomNumber]);
            //incremement
            count[randomNumber] = count[randomNumber] + 1;
        }
    }
}


//function that just changesthe image based on what number was pressed
function flipImage(number) {
    document.getElementById(imageTags[number]).src = cards[number];


}