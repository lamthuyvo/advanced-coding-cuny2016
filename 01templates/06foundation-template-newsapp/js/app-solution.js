$(document).ready(function(){

	// this is where your pseudocode and jquery goes!
	// make a selection option for each row in your data set, i.e. make a dropdown menu
	_.each(foodWasteData, function(value, index){
		$('.dropdown').append('<option class="item" data-value="'+value.food_group+'">'+value.food_group+'</option>')
	})
	
	// activate semantic-ui
	$('.dropdown').dropdown();



});
