$(document).ready(function(){

	// $('#button-2').onClick(function() {
	// $('.container').animate({
	// 		backgroundColor="black"
		
	// 	}, 1000 );
	// });
	
	// $('#button-4').click(function() {
	// 	$('#button-3').animate({
	// 		opacity: 0.4,
	// 		marginLeft: '0.6in',
	// 		fontSize: '24px',
	// 		borderWidth: '10px'
		
	// 	}, 1000 );
	// });

	// $('#button-4').mouseover(function() {
	// 	$('.item').animate({
	// 		marginLeft: '1in',
		
	// 	}, 1000 );
	// });

	// 
    $("#button-13").draggable();
  });

		$('#button-34').click(function openWin() {
    myWindow = window.open("http://www.starwars.com/", "_blank", "width=600, height=450");
});
var myWindow;
	$('#button-40').click(function openWin() {
    myWindow = window.open("", "myWindow", "width=300,height=300");
    myWindow.document.write("<p>hehe psych</p>");
});
		$('#button-41').click(function closeWin() {
    myWindow.close();
});
		$( function() {
    $( "#button-47" ).draggable();
  } );

        var counter = $('#TextBox').val();
        $('#AddButton').click( function() {
            var counter = $('#TextBox').val();
            counter++ ;
            $('#TextBox').val(counter);
    });