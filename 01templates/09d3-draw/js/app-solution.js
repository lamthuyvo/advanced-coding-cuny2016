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

		// make a rectangle for each data point
	   	svg.selectAll("rect")
		   .data(data)
		   .enter()
		   .append("rect")
		   .attr("x", function(d, i) {
		   		return i * (width / data.length);
		   })
		   .attr("y", function(d) {
		   		return height - (d.loss_retail_percent * 10);
		   })
		   .attr("width", width / data.length -2)
		   .attr("height", function(d) {
		   		return d.loss_retail_percent * 10;
		   })
		   .attr("fill", "teal");

	});


	


});
