// alert('app.js attached');

$('#stopButton').click(function(){
	reset();
	$('#stopLight').css('background-color', 'red');
});

$('#slowButton').click(function(){
	reset();
	$('#slowLight').css('background-color', 'yellow');
});

$('#goButton').click(function(){
	reset();
	$('#goLight').css('background-color', 'green');
});

function reset(){
	$('#stopLight').css('background-color', 'gray');
	$('#slowLight').css('background-color', 'gray');
	$('#goLight').css('background-color', 'gray');
}