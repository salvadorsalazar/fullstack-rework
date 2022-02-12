$(document).ready(function(){
    $("#button1").click(function(){
        var nextImage = $(this).parent().next().children().first();
        var nextImageSrc = nextImage.attr('src');
        var thisSrc = $(this).prev().attr('src');
        $(this).prev().attr('src', nextImageSrc);
        nextImage.attr('src', thisSrc);
    });
    $("#button2").click(function(){

    });
    $("#button3").click(function(){

    });
});