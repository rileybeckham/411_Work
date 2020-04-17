var canvas;
var ctx;
var x = 50;
var y = 50;
var square1, square2;
var direction;
var questions;
var squareArray = [];
var circArray = [];
var score = 0;
$(document).ready(function() {

    setup();

    $(this).keypress(function(event) {
        getKey(event);

    });
});



function setup() {
    canvas = document.getElementById("myCanvas");
    ctx = canvas.getContext("2d");

    // create two objects
    square1 = new Square(100, 100, 50, 50, "#0000FF");

    /////////
    //circ1 = new Circle(75, 75, 45, "#0000FF");
    ////////////

    // square2 = new Square(400,400,100,100,"#00FF00");
    $.getJSON("data/squares.json", function(data) {

        for (var i = 0; i < data.squares.length; i++) {
            squareArray.push(new Square(data.squares[i].x, data.squares[i].y, data.squares[i].h, data.squares[i].w, data.squares[i].color));

            // there was a mispelling here with the last circles
            //circArray.push(new Circle(data.circles[i].x, data.circles[i].y, data.circles[i].r, data.circles[i].color));
        }
        draw();
    });
     $.getJSON("data/circles.json", function(data) {
         console.log("HI " + data.circles.length);
         for (var i = 0; i < data.circles.length; i++) {
             circArray.push(new Circle(data.circles[i].x, data.circles[i].y, data.circles[i].r, data.circles[i].color));
         }
         draw();
     });




}

function getKey(event) {
    var delsquare;
    var delcirc;
    var char = event.which || event.keyCode;
    var actualLetter = String.fromCharCode(char);
    if (actualLetter == "w") {
        moveUp();
        direction = "up";
    }
    if (actualLetter == "s") {
        moveDown();
        direction = "down";
    }
    if (actualLetter == "a") {
        moveLeft();
        direction = "left";
    }
    if (actualLetter == "d") {
        moveRight();
        direction = "right";
    }
    //var test = hasCollided(square1,square2);
    var test2 = false;
    var test3 = false;
    for (var i = 0; i < squareArray.length; i++) {

        test2 = hasCollided(square1, squareArray[i]);
        if (test2 == true) {
            delsquare = i;
            break;
        }


        //console.log(test2);
    }
    for (var i = 0; i < circArray.length; i++) {

        test3 = hasCollided(square1, circArray[i]);
        if (test3 == true) {
            delcirc = i;
            break;
        }
    }
    if (test2) {

        score++;
        squareArray.splice(delsquare, 1);
        if (direction == "left") {
            moveRight();
        } else if (direction == "right") {
            moveLeft();
        } else if (direction == "up") {
            moveDown();
        } else if (direction == "down") {
            moveUp();
        }
    }
    if (test3) {

        score++;
        circArray.splice(delcirc, 1);
        if (direction == "left") {
            moveRight();
        } else if (direction == "right") {
            moveLeft();
        } else if (direction == "up") {
            moveDown();
        } else if (direction == "down") {
            moveUp();
        }
    }
    draw();

}

function moveUp() {
    square1.y -= 10;
}

function moveDown() {
    square1.y += 10;
}

function moveRight() {
    square1.x += 10;
}

function moveLeft() {
    square1.x -= 10;
}

function draw() {
    ctx.clearRect(0, 0, 800, 600);
    ctx.fillStyle = square1.mainColor;
    ctx.fillRect(square1.x, square1.y, square1.width, square1.height);

    // ctx.fillStyle = square2.mainColor;
    //ctx.fillRect(square2.x, square2.y, square2.width, square2.height);
    for (var i = 0; i < squareArray.length; i++) {
        ctx.fillStyle = squareArray[i].mainColor;
        ctx.fillRect(squareArray[i].x, squareArray[i].y, squareArray[i].width, squareArray[i].height);
    }
    for (var i = 0; i < circArray.length; i++) {
        ctx.fillStyle = circArray[i].mainColor;
        ctx.beginPath();
        ctx.arc(circArray[i].x, circArray[i].y, circArray[i].r, circArray[i].startPoint, circArray[i].endPoint);
        ctx.fill();
    }

    ctx.font = "30px Arial";
    ctx.fillText("Score: " + score, 10, 50);

}


function hasCollided(object1, object2) {
    return !(
        ((object1.y + object1.height) < (object2.y)) ||
        (object1.y > (object2.y + object2.height)) ||
        ((object1.x + object1.width) < object2.x) ||
        (object1.x > (object2.x + object2.width))
    );
}

// no need for this class since you had it in another file that was included
/*class Circle {
    constructor(xCord, yCord, radius, color) {
        this.xCord = xCord;
        this.yCord = yCord;
        this.radius = radius;
        this.startPoint = 0;
        this.endPoint = 2 * Math.PI;
        this.color = color;
    }
    get x() {
        return this.xCord;
    }
    set x(x) {
        this.xCord = x;
    }
    get y() {
        return this.yCord;
    }
    set y(y) {
        this.yCord = y
    }
    get r() {
        return this.radius;
    }
    set r(r) {
        this.radius = r;
    }
    get startPoint() {
        return this.startPoint;
    }
    set startPoint(startPoint) {
        this.startPoint = startPoint;
    }
    get endPoint() {
        return this.endPoint;
    }
    set endPoint(endPoint) {
        this.endPoint = endPoint;
    }
    get color() {
        return this.color;
    }
}*/