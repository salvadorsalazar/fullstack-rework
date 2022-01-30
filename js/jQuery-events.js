"use strict";

// js equivalent of $(document).ready is window.onload
// function init(){
// all the code in here
//}
// window.onload = init;

$(document).ready(function () {
    // call the jQuery function with $
    // pass it a selector
    // this returns a jQuery object
    // chain a jQuery method on to it
    // pass the jQuery method an anonymous function
    // the function contains in its code block the code that you want to execute when the user triggers the event listener
    $("#clickMe").click(function(){
        alert("You clicked me!");
    });

    // an element gets clicked
    // the event listener attached to that element "hears" the click event and passes on to the JavaScript interpreter the code that is attached to it
    // the interpreter runs the function specified the listener
    // the user sees something happen

    $("#clickMeToo").on('click', function(){
        alert("Yay, I got clicked too!");
    });

    // types of events
    // load events (load, ready, unload)
    // browser events (resize, scroll, error)
    // form events (focus, blur, select, submit, change)
    // keyboard
    // mouse events (click, doubleclick, mousedown, mouseup, mouseenter, mouseleave, mouseover, mousemove)

    // $(".simple-box").hover(
    //   function(){
    //       $(this).css('outline', '8px ridge rebeccapurple');
    //   },
    //   function(){
    //       $(this).css('outline', 'none');
    //   }
    // );

    $(".simple-box").hover(
        function(){
            $(this).addClass("outline");
        },
        function(){
            $(this).removeClass("outline");
        }
    );

    $(".simple-box").mouseenter(function(){
        $(this).css("background-color", "hotpink");
    });
    $(".simple-box").mouseleave(function(){
        $(this).css("background-color", "white");
    });

    // $(document).keydown(function(){
    //    alert("key down!");
    // });
    // $(document).keyup(function(){
    //    alert("key up");
    // });

    $(document).keyup(function(event){
        console.log(event.keyCode);
        if (event.keyCode === 76 ){
            console.log("l");
        }
    });

    // $(document).on('keyup', function(){
    //     alert("key up");
    // });

    // keypress is like keydown, except it doesn't get triggered on the  modifier keys: control, option, command, shift, delete, fn

    $("#create-an-element").click(function(){
        $(this).after("<button class='does-it-work'>Try clicking me</button>");
    });
    // this will not work:
    // $(".does-it-work").click(function(){
    //    alert("You wish this would work, but it doesn't");
    // });

    // $(document).on('click', '.does-it-work', function(){
    //    alert("now I can add an event listener to a dynamically created element.");
    // });

    $("#dynamic").on('click', '.does-it-work', function(){
        alert("now I can add an event listener to a dynamically created element.");
    });

});