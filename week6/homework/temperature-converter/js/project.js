// // create input box, button, celcius and F radio buttons, and an output box for the conversion


// // you need to store value of input and value of radio button
// // 
// // grab the following:
// // -input
// // -radio buttons
// // -button

var begTemp = "0";
var begUnit = "F";
var newTemp = "0";
var newUnit = "C";

$('#submit').click(function(e){
	alert('hi')
	begTemp = parseInt($('#input').val());
	begUnit = $("input[type='radio']:checked").val();

	console.log(
		'begTemp: ' + begTemp + '\n' + 
		'begUnit: ' + begUnit + '\n' + 
		'newTemp: ' + newTemp + '\n' +
		'newUnit: ' + newUnit
	);

	if(begUnit === 'F'){
		newUnit = 'C';
		newTemp = (begTemp - 32) / 1.8;
		$('#conversion').html(newTemp + newUnit);
	}else if(begUnit === 'C'){
		newUnit = 'F';
		newTemp = (begTemp * 1.8) + 32;
		$('#conversion').html(newTemp + newUnit);
	}
		e.preventDefault();
});

// // Conversion not happening - tried to cross check with solution but can't seem to 
// find my mistake! Alert button shows that
// // the submit is working and i've tested the #conversion text output which is fine.
// Must be something with the if else staements..