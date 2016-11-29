// how to make rectangles
svg.selectAll("rect")
   .data(data)
   .enter()
   .append("rect")
   .attr("x", function(d, i) {
   		// this determines where the rectangle left upper corner's x-coordinate is
   })
   .attr("y", function(d) {
   		// this determines where the rectangle left upper corner's y-coordinate is
   })
   .attr("width", function(d) {
   		// this determines the height
   })
   .attr("height", function(d) {
   		// this determines the width
   });



// how to make circles
svg.selectAll("circle")
   .data(data)
   .enter()
   .append("circle")
   .attr("cx", function(d, i) {
   		// this determines where the circle center x-coordinate is
   })
   .attr("cy", function(d) {
   		// this determines where the circle center y-coordinate is
   })
   .attr("r", function(d) {
   		// this determines the radius
   });


// to make a line graph you NEED to use another helper function that 
var line = d3.line()
    .x(function(d) { return x(d.thevalueyouwanttoplotforx); })
    .y(function(d) { return y(d.thevalueyouwanttoplotfory); });


svg.append("path")
      .data(data)
      .attr("class", "line")
      .attr("d", line);
