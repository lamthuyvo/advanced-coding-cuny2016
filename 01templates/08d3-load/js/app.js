$(document).ready(function(){

	
	var data = d3.csv("js/data.csv", function(error, data) {
		

		// a line that you put into your code to tell yourself if something is wrong with your data
		if (error) throw error;

		// define the newly transformed data set (from csv into a data object)
		foodWasteData = data; 

		// select the div to which you want to bind your data
		var chart = d3.select("#chart");

		// make a paragraph for every dataset
		var paragraphs = chart.selectAll("p")
							.data(foodWasteData)
						  	.enter()
						  	.append("p")
						  	.text(function (d) {
						  		return d.food_group;
						  	});

		// make rectangles instead of paragraphs
  
	});

	


});
