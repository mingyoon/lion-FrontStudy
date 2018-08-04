/* global $ */

$(document).ready(function(){
    $('.gridBox').click(function(){
        var index = $('.gridBox').index(this) + 1;
        $('.modalElement img').attr('src','box'+index+'.jpg');
        $('.black-background, .modalElement').fadeIn();
    });
    $('.black-background, .modalElement').click(function(){
        $('.black-background, .modalElement').fadeOut();
    });
    
    $('.mobileMenuBtn').click(function(){
        $('.m-background').fadeIn();
        $('.mobileMenu').animate({
            left: 0
        }, 500);
    });
    $('.m-background').click(function(){
        $('.m-background').fadeOut();
        $('.mobileMenu').animate({
            left: '-100%'
        }, 500);
    });

});

