function countDown(x)
	{
		let today = new Date();
		
		let day = today.getDate();
		let month = today.getMonth()+1;
		let year = today.getFullYear();
		
		let hours = today.getHours();
		if (hours<10) hours = "0"+hours;
		
		let minutes = today.getMinutes();
		if (minutes<10) minutes = "0"+minutes;
		
		let seconds = today.getSeconds();
		if (seconds<10) seconds = "0"+seconds;
		
		if(x==1) {
		$('#clock').html(day+"/"+month+"/"+year+" | "+hours+":"+minutes+":"+seconds);
		setTimeout("countDown(1)",1000);
		}
		else if(x==2) {
			$('#clock').html(hours+":"+minutes+":"+seconds);
			setTimeout("countDown(2)",1000);
		}
	}