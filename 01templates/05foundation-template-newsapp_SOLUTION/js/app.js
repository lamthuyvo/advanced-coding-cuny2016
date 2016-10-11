$(document).ready(function(){

	// this is where your pseudocode and jquery goes!

	// make a selection option for each row in your data set, i.e. make a dropdown menu
	_.each(foodWasteData, function(value, index){
		$('#select').append('<option value="'+ value.food_group+'">'+value.food_group+'</option>')
	})
	
	// eventhandler on click

	$('#appbutton').on("click", function(){
		var dropdownValue = $('#select').val();
		
		// result box 1: append the value of the food group
		var correspondingArray = _.find(foodWasteData, function(num){
			return num.food_group == dropdownValue;
		});

		$('#result').append(
			// what you want to append. This only returns a string but you can also append HTML
			correspondingArray.food_group
		);

		// result box 2: append all items after you've sorted them
		// make a new array by sorting other data
		var descSortedArray = _.sortBy(foodWasteData, function(num) {
			    return -num.supply_b_pounds;
			}); 

		// then append the new data array
		// change the text
		_.each(descSortedArray, function(value, index){
			$('#result2').append(value.supply_b_pounds + " ");
		});



	})

	

});
