/*global $*/
//Do suggestions
$(document).ready(function() {
    var typeJoke;

    $("#foodjoke").click(function(e) {
        e.preventDefault();
        typeJoke = "food";
        outputJoke();
    });

    $("#sportjoke").click(function(e) {
        e.preventDefault();
        typeJoke = "sport";
        outputJoke();
    });

    $("#historyjoke").click(function(e) {
        e.preventDefault();
        typeJoke = "history";
        outputJoke();

    });

    $("#musicjoke").click(function(e) {
        e.preventDefault();
        typeJoke = "music";
        outputJoke();

    });

    $("#traveljoke").click(function(e) {
        e.preventDefault();
        typeJoke = "travel";
        outputJoke();

    });

    $("#devjoke").click(function(e) {
        e.preventDefault();
        typeJoke = "dev";
        outputJoke();
    });
    // $("#option-1").click(function(){
    //     $("#overlay1").toggle();
    //     $(this).toggleClass("active-button")
    // });

    // $("#option-2").click(function(){
    //     $("#overlay2").toggle();
    //     $(this).toggleClass("active-button")
    // });

    // $("#option-3").click(function(){
    //     $("#overlay3").toggle();
    //     $(this).toggleClass("active-button")
    // });
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
