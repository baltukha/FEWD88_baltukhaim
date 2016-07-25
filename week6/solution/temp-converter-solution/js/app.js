var rawTemp = "0";
var rawUnit = "F";
var convertedTemp = "0";
var convertedUnit = "C";

$('#submit').click(function(e){
	rawTemp = parseInt($('#temp').val());
	rawUnit = $("input[type='radio']:checked").val();

	console.log(
		'rawTemp: ' + rawTemp + '\n' + 
		'rawUnit: ' + rawUnit + '\n' + 
		'convertedTemp: ' + convertedTemp + '\n' +
		'convertedUnit: ' + convertedUnit
	);

	if(rawUnit === 'F'){
		convertedUnit = 'C';
		convertedTemp = (rawTemp - 32) / 1.8;
		$('#output').html(convertedTemp.toPrecision(3) + String.fromCharCode(176) + convertedUnit);
	}else if(rawUnit === 'C'){
		convertedUnit = 'F';
		convertedTemp = (rawTemp * 1.8) + 32;
		$('#output').text(convertedTemp.toPrecision(3) + String.fromCharCode(176) + convertedUnit);
	}
	e.preventDefault();
});
