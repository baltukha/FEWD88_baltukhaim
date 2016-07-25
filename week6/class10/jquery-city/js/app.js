// 1. Create .click() handlers for each of the thumbnails: #first, #second, #third, #fourth
// 2. Use .attr() to change the `src` attribute of #bigimage to correspond to image that was clicked

// $("#first").click(function(){
// 	$("#bigimage").attr('src', 'src="img/1.jpg')
// });

// $("#second").click(function(){
// 	$("#bigimage").attr('src', 'src="img/2.jpg')
// });

// $("#third").click(function(){
// 	$("#bigimage").attr('src', 'src="img/3.jpg')
// });

// $("#fourth").click(function(){
// 	$('#bigimage').attr('src', 'src="img/4.jpg')
// });

var currentImage;

$('#first').click(function(){

	currentImage = $('#first').attr('src');
	$('#bigimage').attr('src', currentImage);
});

$('#second').click(function(){
	currentImage = $('#second').attr('src');
	$('#bigimage').attr('src', currentImage);
});

$('#third').click(function(){
	currentImage = $('#third').attr('src');
	$('#bigimage').attr('src', currentImage);
});

$('#fourth').click(function(){
	currentImage = $('#fourth').attr('src');
	$('#bigimage').attr('src', currentImage);
});