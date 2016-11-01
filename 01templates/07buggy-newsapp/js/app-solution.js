$(document).ready(function(){

	// set variables for dates
	var electionDate = new Date("11/8/2016").setHours(0,0,0,0);
	var todaysDate = new Date().setHours(0,0,0,0);

	// if today's date is the election date
	if(electionDate== todaysDate){
		// if it's election day
		$("#result").html('<p>HUZZAH! It\'s election day. You will finally be anxiety-free tonight!</p>');
	
	} else if (electionDate > todaysDate){
		// if it's not election day yet
		$("#result").html('<p>Not yet! Hang in there!</p>');

	} else if (electionDate < todaysDate){
		// if it's past election day
		$("#result").html('<p>You made it through this terrible election. #icant2016</p>');
	}

	$('#appbutton').on("click", function(){
		if(electionDate== todaysDate){
		// if it's election day
		$("#result").html('<p>HUZZAH! It\'s election day. You will finally be anxiety-free tonight!</p>');
		
		} else if (electionDate > todaysDate){
			// if it's not election day yet
			$("#result").html('<p>Not yet! Hang in there!</p>');

		} else if (electionDate < todaysDate){
			// if it's past election day
			$("#result").html('<p>You made it through this terrible election. #icant2016</p>');
		}
	})


});
