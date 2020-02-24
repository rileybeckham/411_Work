var firstNumber = -1;
var secondNumber = -1;
var score = 0;
var allFound = 0;
// JSON declaration
var player = { "firstname": "", "lastname": "", "age": 0, "score": 0 };
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


//function that changes the image based on what number was pressed
function flipImage(number) {
    if (firstNumber >= 0) {
        secondNumber = number;
        document.getElementById(imageTags[number]).src = cards[secondNumber];

    }
    else if (firstNumber < 0) // make the first image appear
    {
        firstNumber = number;
        document.getElementById(imageTags[firstNumber]).src = cards[firstNumber];

    }

    // check to see if the images do not match
    if (cards[secondNumber] != cards[firstNumber] && firstNumber >= 0 && secondNumber >= 0) {
        score++;
        setTimeout(imagesDisappear, 1000); // calls a method after 1 second
    }
    // check to see if the images do match
    else if (cards[secondNumber] == cards[firstNumber] && firstNumber >= 0 && secondNumber >= 0) {
        score++;
        allFound++;

        firstNumber = -1;
        secondNumber = -1;
        if (allFound == cards.length / 2) {
            player.score = score;
            localStorage.setItem("playerInfo", JSON.stringify(player));
            window.location = "MainEnd.html";
        }
    }
}

function imagesDisappear() {

    console.log(firstNumber);
    document.getElementById(imageTags[firstNumber]).src = backOfCard;
    document.getElementById(imageTags[secondNumber]).src = backOfCard;
    firstNumber = -1;
    secondNumber = -1;
}



//add to JSON from input field.
function addToPlayer() {
    var firstName = document.getElementById("txtFirstName").value;
    var lastName = document.getElementById("txtLastName").value;
    var age = document.getElementById("txtAge").value;
    
    player.firstname = firstName;
    player.lastname = lastName;
    player.age = age;
    localStorage.setItem('playerInfo', player);
    localStorage.setItem('playerInfo', JSON.stringify(player));
    window.location = "Main.html";
}

// get the information out of JSON
function playerInfo() {
    var playerInformation = localStorage.getItem("playerInfo");
    player = JSON.parse(playerInformation);
    var str = "Name: " + player.firstname + " " + player.lastname + "<br>" +
        "Age: " + player.age + "<br>" +
        "Score: " + player.score;
    if (document.getElementById("endInformation") != null) {
        document.getElementById("endInformation").innerHTML = str;
    }


}