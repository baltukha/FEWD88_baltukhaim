$(document).ready(function() {
	function showTime() {
		var timeNow = new Date();
		var hours = timeNow.getHours();
		var minutes = timeNow.getMinutes();
		var seconds = timeNow.getSeconds();
		var am = "AM";
		
		if (hours == 0) {
			hours = 12
		}	else if (hours > 12) {
			hours = hours - 12;
			am = "PM"
		}	else if (hours < 12) {
			hours = "0" + hours;
		}

		if (minutes < 10) {
			minutes = "0" + minutes;
		}

		if (seconds < 10) {
			seconds = "0" + seconds
		}

		var timeA = $('#clockA')[0];
		timeA.innerText = hours + ":" + minutes + ":" + seconds + " " + am;
		
		var timeB = $('#clockB')[0];
		timeB.innerText = (hours - 3) + ":" + minutes + ":" + seconds + " " + am;

		var timeC = $('#clockC')[0];
		timeC.innerText = (hours + 4) + ":" + minutes + ":" + seconds + " " + am;

		var timeD = $('#clockD')[0];
		timeD.innerText = (hours - 7) + ":" + minutes + ":" + seconds + " " + am;

		// find a way to account for diff time zones and var's //
		// include more var's to account for diff time zones? //
		
		setInterval(showTime, 1000);

	}

	showTime();

});
