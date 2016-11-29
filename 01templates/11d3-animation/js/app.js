$(document).ready(function(){

	// set the specs
	var width = 900;
	var height = 450;
	var marginLeft= 50;
	var marginRight;
	var marginTop;
	var marginBottom = 20;

	// create SVG element
	var svg = d3.select("#chart")
	            .append("svg")
	            .attr("width", width)
	            .attr("height", height);

	// define your scales
	var xScale = d3.scaleLinear()
					// determine the minimum and maximum data value
					.domain([0,10])
					// determine where in pixels your graphic starts and ends
					.range([marginLeft,width-marginLeft])

	var yScale = d3.scaleLinear()
					.domain([0,20])
					.range([height-marginBottom,20])


	// define your axes
	var xAxis = d3.axisBottom(xScale);

	var yAxis = d3.axisLeft(yScale)
					.tickFormat(function(d, i){
						return  d + "K lbs";
					})
					.tickValues([0, 5, 10, 15,20])
					

	// create your axes
	// first the xAxis
	svg.append("g")
	    .attr("transform", "translate(0," + (height - marginBottom) + ")")
	    .call(xAxis);

	// then the yAxis
	svg.append("g")
	    .attr("transform", "translate("+ marginLeft +",0)")
	    .call(yAxis);
	
	// loading data

	// make a rectangle for each data point
   	svg.selectAll("circle")
	   .data(foodWasteData)
	   .enter()
	   .append("circle")
	   // MAKE THE CIRCLE CHANGE COLORS WHEN YOU HOVER OVER IT
	   .attr("cx", function(d) {
	   		return xScale(d.loss_retail_b_pounds);
	   })
	   .attr("cy", function(d) {
	   		return yScale(d.loss_consumer_b_pounds);
	   })
	   .attr("r", function(d,i){
	   		return Math.sqrt(d.supply_b_pounds/Math.PI)*4;
	   })
	   // ADD A TRANSITION
	   .attr("fill", "teal")
	   .attr("opacity", 0.7);



});
