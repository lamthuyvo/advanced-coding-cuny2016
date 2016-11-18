$(document).ready(function(){

	// set the specs
	var width = 900;
	var height = 450;

	// create SVG element
	var svg = d3.select("#chart")
	            .append("svg")
	            .attr("width", width)
	            .attr("height", height);

	
	// loading data
	var data = d3.csv("js/data.csv", function(error, data) {

		// define the newly transformed data set (from csv into a data object)
		foodWasteData = data; 

		// make a rectangle for each data point, giving each rectangle an x-coordinate, a y-coordinate, a width and a height (optional, give it a fill)
	   	

	});


	


});
