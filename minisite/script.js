$(document).ready(function(){

$('.red').click(function() {
  var div=$(".yellow")
    div.animate({opacity: '0.5'}, 3000, "swing");
    div.animate({opacity: '0'}, 3000, "swing");
    div.animate({opacity: '1'}, 3000, "swing");
        
});

$('.yellow').click(function() {
  var div=$(".orange")
    div.animate({opacity: '0.8'}, 2000, );
    div.animate({opacity: '0'}, 3000, );
    div.animate({opacity: '1'}, 2000, );
    div.animate({opacity: '0.8'}, 3000, );
    div.animate({opacity: '0'}, 500, );
    div.animate({opacity: '1'}, 200, );
        
});

$('.orange').click(function() {
  var div=$(".oy")
    div.animate({opacity: '0.8',backgroundColor: "#FF1493"}, 1000, "swing" );
    div.animate({opacity: '1', backgroundColor:"#ff9933"}, 4000, "swing");
        
});

$('.ro').click(function() {
    var div=$(".red")
    div.animate({opacity: '1', }, 50, );
    div.animate({opacity: '0.9', }, 50, );
    div.animate({opacity: '1', }, 50, );
    div.animate({opacity: '0.9', }, 50, );
    div.animate({opacity: '1', }, 50, );
    div.animate({opacity: '0.9', }, 50, );
    div.animate({opacity: '1', }, 50, );
    div.animate({opacity: '0', }, 600, );
    div.animate({opacity: '.3', }, 500, );
    div.animate({opacity: '.5', }, 300, );
    div.animate({opacity: '0.9', }, 50, );
    div.animate({opacity: '1', }, 50, );
    div.animate({opacity: '0.9', }, 50, );
    div.animate({opacity: '1', }, 50, );
    div.animate({opacity: '0.9', }, 50, );
    div.animate({opacity: '1', }, 50, );

    });

$('.oy').click(function() {
  var div=$(".ro")
    div.animate({opacity: '0.9'}, 200, );
    div.animate({opacity: '1'}, 500, );
    div.animate({opacity: '.9'}, 200, );
    div.animate({opacity: '1'}, 200, );
    div.animate({opacity: '0.7'}, 500, );
    div.animate({opacity: '1'}, 200, );
    div.animate({opacity: '0.9'}, 200, );
    div.animate({opacity: '.7'}, 500, );
    div.animate({opacity: '1'}, 200, );
    div.animate({opacity: '0.9'}, 200, );
    div.animate({opacity: '0.7'}, 500, );
    div.animate({opacity: '1'}, 200, );
    div.animate({opacity: '0.9'}, 200, );
    div.animate({opacity: '.7'}, 500, );
    div.animate({opacity: '1'}, 200, );
    div.animate({opacity: '0.9'}, 200, );
    div.animate({opacity: '0.7'}, 500, );
    div.animate({opacity: '1'}, 200, );
        
});

// $('.ro').click(function() {
//   var div=$(".red")
//     div.animate({opacity: '0.8' }, 100, );
//     div.animate({opacity: '1', height: '75px', width: '75px', marginTop: '25px',marginLeft:'45px',marginRight:'50px',marginBottomt:'25px'}, 100, );
//     div.animate({opacity: '0.8' }, 100, )
//     div.animate({opacity: '1', height: '75px', width: '75px', marginTop: '25px',marginLeft:'45px',marginRight:'50px',marginBottomt:'25px'}, 100, );
//     div.animate({opacity: '0.8' }, 100, );
//     div.animate({opacity: '1', height: '75px', width: '75px', marginTop: '25px',marginLeft:'45px',marginRight:'50px',marginBottomt:'25px'}, 100, );
//     div.animate({opacity: '0.8' }, 100, );
//     div.animate({opacity: '1', height: '75px', width: '75px', marginTop: '25px',marginLeft:'45px',marginRight:'50px',marginBottomt:'25px'}, 100, );
//     div.animate({opacity: '0.8' }, 100, );
//     div.animate({opacity: '1', height: '75px', width: '75px', marginTop: '25px',marginLeft:'45px',marginRight:'50px',marginBottomt:'25px'}, 100, );
//     div.animate({opacity: '0.8' }, 100, );
//     div.animate({opacity: '1', height: '75px', width: '75px', marginTop: '25px',marginLeft:'45px',marginRight:'50px',marginBottomt:'25px'}, 100, );
//     div.animate({opacity: '0.8' }, 100, );
//     div.animate({opacity: '1', height: '75px', width: '75px', marginTop: '25px',marginLeft:'45px',marginRight:'50px',marginBottomt:'25px'}, 100, );
//     div.animate({opacity: '0.8' }, 100, );
//     div.animate({opacity: '1', height: '75px', width: '75px', marginTop: '25px',marginLeft:'45px',marginRight:'50px',marginBottomt:'25px'}, 100, );
//     div.animate({opacity: '0.8' }, 100, );
//     div.animate({opacity: '1', height: '75px', width: '75px', marginTop: '25px',marginLeft:'45px',marginRight:'50px',marginBottomt:'25px'}, 100, );
//     div.animate({opacity: '0.8' }, 100, );
//     div.animate({opacity: '1', height: '75px', width: '75px', marginTop: '25px',marginLeft:'45px',marginRight:'50px',marginBottomt:'25px'}, 100, );
//     div.animate({opacity: '0.8' }, 100, );
//     div.animate({opacity: '1', height: '75px', width: '75px', marginTop: '25px',marginLeft:'45px',marginRight:'50px',marginBottomt:'25px'}, 100, );
//     div.animate({opacity: '1', height: '150px', width:'150px', marginTop: '0px',marginLeft:'0px',marginRight:'0px',marginBottomt:'25px'}, 100, );
        


// $('.box1').click(function() {
//     $(this).animate({opacity: '.5'}, 120, "swing");
        
// });
// $('.box1').mouseout('click touchstart', function() {
//     $(this).animate({opacity: '0';}, 500, "swing", ); 


// });
// $('.box1').mouseover('click touchstart', function() {
//     $(this).animate({
//         filter: blur: '15px' }, "slow");
//         background-color: "#ffcc00"}, "slow");

//     }, 120); 
 
// $('.box1').click(function(){
//   $(this).removeClass("box1");
//     setTimeout(function(){
//       $(this).addClass("box2");},1)
// });

// $('.box2').click(function(){
//   $(this).removeClass("box2");
//     setTimeout(function(){
//       $(this).addClass("box1");},1)
// });
});










