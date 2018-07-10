$(document).ready(function(){

	// $('.project-details').hide();

	//Technical Skills Hover Effect
	$('div.language-slider, img.details-button').mouseenter(function(){
		$(this).css("background-color", "#CACFD2");
	}).mouseleave(function(){
		$(this).css("background-color", "#D7DBDD");
	});

	//Project Details Button Animation
	$('.bff').click(function() {	
 		$(this).closest('.project-details').next().toggle();
 		$('.project-details').hide();
 	}, function() {
 		$('.project-details').toggle();
  	});



	//Div is hidden
	//click button
	//closest div (details) is toggled
//closest div to details is hidden





	// $('div.details-button').click(function(){
	// 	$(this).closest('div.project-details').next().toggle();
	// });

	// // $('div.details-button').on('click', event => {
 // //    $(event.currentTarget).closest('.product-details').next().toggle()
 // //  }); 
 	








});


