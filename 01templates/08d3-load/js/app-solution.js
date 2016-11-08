$(document).ready(function(){

	
	// loading data
	var data = d3.csv("js/data.csv", function(error, data) {

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

	});


	


});
