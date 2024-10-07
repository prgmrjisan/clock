	
		function showTime(){
		
		
 			var d = new Date();
			var h = d.getHours();
			var m = d.getMinutes();
			var s = d.getSeconds();
			var session = "pm ";
			
			if(h > 12){
				h = h - 12;
				//h = 13 - 12= 1 hour; result
				
			}
			
			if(h >= 12){
					session = "am";
			}
			
			h = h < 10 ? "0"+h : h;
			m = m < 10 ? "0"+m : m;
			s = s < 10 ? "0"+s : s;
			
			
			var time = h + " : " + m + " : " + s + " : " + session;
			document.getElementsByTagName('h1')[0].innerText = time;
			setTimeout(showTime,1000)
		}
		
		
