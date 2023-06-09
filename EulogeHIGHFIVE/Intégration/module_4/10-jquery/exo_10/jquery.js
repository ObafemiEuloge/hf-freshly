$(document).ready(function(){
    $("article").css("color", "green");

    $("#css").click(function(){
        $("article").css("color", "blue");
    });

    $("#html").click(function(){
        $("article").text("Hello World !").css("font-style", "italic");
        
    });
    $("#toggle").click(function(){
           $("article").toggle('fast');
    });
    $("#slide").click(function(){
           $("article").slideToggle();
    });
});