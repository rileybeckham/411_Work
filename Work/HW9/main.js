$(document).ready(function () {
    $("button").click(function () {
        $("#color").plugIn();
        $("#color").load("color.json", function(responseText) {
            var data = JSON.parse(responseText);
            $("#color").html("color: " + data.color + "<br>category: "
                + data.category + "<br>type: " + data.type + "<br>rga: " +
                data.code.rgba + "<br>hex: " + data.code.hex);
        });
    });
});

$.fn.plugIn = function () {
    this.css("background-color", "black");
    this.css("color", "white");
};