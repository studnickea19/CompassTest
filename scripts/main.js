$(document).ready(function(){

	$('project-details').hide();

	$('div.language-slider, img.details-button').mouseenter(function(){
		$(this).css("background-color", "#CACFD2");
	}).mouseleave(function(){
		$(this).css("background-color", "#D7DBDD");
	});

	$('div.details-button').click(function(){
		$(this).closest('div.project-details').toggle();
	});








});


