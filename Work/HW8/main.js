// JavaScript source code
var foodSelector= "#food";
var allFood = new Array();
class FoodInfo {
    constructor(selector, img) {
        this.selector = selector;
        this.img = img;
    }
    toString() {
        return this.selector + ":" + this.imagePath;
    }
    get theSelector() {
        return this.selector;
    }
    get theImg() {
        return this.img;
    }

}

function initializeArray() {
    var food = new FoodInfo("#food", "pancake.jpg");
    var food1 = new FoodInfo("#food", "waffle.jpg");
    $("#triangle_down").hide();
    $(".new").hide();
    allFood.push(food);
    allFood.push(food1);
}
$(document).ready(function () {
    $(allFood[0].theSelector).attr("src", allFood[0].theImg);

    $("button").click(function () {

        $(".stuff").fadeOut();
        //$("#third").
        $(".new").toggle();
         //setInterval(moveSquare, 1000);

        $("#third").fadeIn();
    });
    $("#square").click(function () {
        setInterval(moveSquare, 1000)
    });
});
//(function(){ alert("Hello"); }, 3000
function moveSquare() {
    $("#square").animate({ left: "90vw" }).animate({ top: "95vh" }).animate({ left: "5vw" }).animate({ top: "50vh" }).fadeTo(250, 5, function () {
        $("#square").hide();
        $("#triangle_down").fadeIn().animate({ left: "90vw" }).animate({ top: "95vh" }).animate({ left: "5vw" }).animate({ top: "50vh" });

    });
}

/* https://www.allphptricks.com/demo/2018/oct/simple-jquery-image-slideshow/ */
function slideSwitch() {
    var $active = $('#slideshow div.active');
    if ($active.length == 0) $active = $('#slideshow div:last');
    var $next = $active.next().length ? $active.next()
        : $('#slideshow div:first');
    $active.addClass('last-active');
    $next.css({ opacity: 0.0 })
        .addClass('active')
        .animate({ opacity: 1.0 }, 1000, function () {
            $active.removeClass('active last-active');
        });
}
$(function () {
    setInterval("slideSwitch()", 3000);
});
//function showUpsideDownTriangle() {
//    $("triangle_down").show();
//}