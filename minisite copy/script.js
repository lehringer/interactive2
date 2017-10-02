$(document).ready(function(){

$('.box1').mouseover('click touchstart', function() {
    $(this).animate({
        filter-blur: '15px' }, "slow");
        backgroundcolor: "#ffcc00"}, "slow");

    }, 120); 
    
});

$('.box1').mouseout('click touchstart', function() {
    $('this').animate({
        opacity: '1';
        
    }, 120); 





});