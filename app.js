'use strict';
$(document).ready(function() {

    // while($(window).width() >= 768 || $(window).width() <= 960){
    //     console.log('i am disktop');
    // }
    $(window).resize(() =>{
        if($(window).width() >= 768) {
            // console.log('i am disktop');
            $("section").css("background-color", "maroon");
            $("aside").css("background-color", "maroon");
            $("nav").css("background-color", "maroon");

        } 
        if($(window).width() >= 480 && $(window).width() <= 767){
            // console.log('hi i am mobile');
            $("section").css("background-color", "green");
            $("aside").css("background-color", "green");
            $("nav").css("background-color", "green");
        }
    });
});