/*global $*/
//Do suggestions
$(document).ready(function() {
    var typeJoke;

    $("#foodJoke").click(function(e) {
        e.preventDefault();
        typeJoke = "food";
        outputJoke();
    });

    $("#sportJoke").click(function(e) {
        e.preventDefault();
        typeJoke = "sport";
        outputJoke();
    });

    $("#historyJoke").click(function(e) {
        e.preventDefault();
        typeJoke = "history";
        outputJoke();

    });

    $("#musicJoke").click(function(e) {
        e.preventDefault();
        typeJoke = "music";
        outputJoke();

    });

    $("#travelJoke").click(function(e) {
        e.preventDefault();
        typeJoke = "travel";
        outputJoke();

    });

    $("#devJoke").click(function(e) {
        e.preventDefault();
        typeJoke = "dev";
        outputJoke();
    });

    function outputJoke() {
        var myurl = "https://api.chucknorris.io/jokes/random?category=" + typeJoke;
        console.log(myurl);
        $.ajax({
            url: myurl,
            dataType: "json",
            success: function(parsed_json) {
                var joke = parsed_json['value'];
                var everything = joke;
                $("#joke").html(everything);
            }
        });
    }
});
