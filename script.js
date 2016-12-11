// Author: Nick Jackson

var time = 0;
var running = 0;

function startPause()
{
	if (running == 0){
		
		running = 1;
		time = 0;
		increment();
		document.getElementById("startPause").innerHTML = "Pause";
	} else{
		running = 0;
		document.getElementById("startPause").innerHTML = "Start";
	}
}

function reset()
{
	running = 0;
	time = 0;
	document.getElementById("startPause").innerHTML = "Start";
	document.getElementById("output").innerHTML = "Ready";
}

function increment()
{
	if (running == 1){
		setTimeout(function(){
			time++;
			var mins = Math.floor(time / 10 / 60);
			var secs = Math.floor(time / 10 % 60);
			var tenths = time % 10;

			if(mins >= 1){
			 document.getElementById("output").innerHTML = mins + ":" + secs + "." + tenths;
			 increment();
			}
			if(mins < 1){
			  document.getElementById("output").innerHTML = secs + "." + tenths;
			  increment();
			}
		},100)
		
	}
	
}
