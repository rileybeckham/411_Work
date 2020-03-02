
//class variables
var myViewFinderArray = new Array();
var img = document.createElement("img");

class ViewFinder {
    constructor(title, description, author, imageYear, image) {
        this.title = title;
        this.image = image;
        this.description = description;
        this.author = author;
        this.imageYear = imageYear;
    }

    toString() {
        return "Title: "+ this.title + ",  Description: " + this.description + ",  Author: " + this.author + ",  Image Year: " + this.imageYear;    
    }
}

function initializeArray() {
    var myViewFinder = new ViewFinder("sunset", "A really nice sunset", "Tyler Clawson", "2020", "TClaw_Sunset.jpg");
    var myViewFinder1 = new ViewFinder("zebra", "Zebra parent and child", "Jürgen Bierlein", "2020", "Zebras.jpg");
    var myViewFinder2 = new ViewFinder("Watch", "My Melbourne lonsdale automatic", "Riley Beckham", "2020", "Watch.jpg");
    var myViewFinder3 = new ViewFinder("Bee", "Honey Bee extracting pollen", "Jürgen", "2020", "Bee.jpg");
    var myViewFinder4 = new ViewFinder("Humming Bird", "A Beautiful male hummingbird", "Domenic Hoffmann", "2018", "hummingbird.jpg");

    myViewFinderArray.push(myViewFinder);
    myViewFinderArray.push(myViewFinder1);
    myViewFinderArray.push(myViewFinder2);
    myViewFinderArray.push(myViewFinder3);
    myViewFinderArray.push(myViewFinder4);
}

function accessInformation() {
    let rand = Math.floor(Math.random() * myViewFinderArray.length);
    document.getElementById("title").innerHTML = myViewFinderArray[rand].toString();
    img.src = myViewFinderArray[rand].image;
    var src = document.getElementById("img");
    src.appendChild(img);
}
