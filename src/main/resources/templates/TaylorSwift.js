function caliculateAge(){
					const dob= new Date("1989-12-13");
					const now= new Date();
					let y= now.getFullYear()-dob.getFullYear();
					let m= now.getMonth()-dob.getMonth();
					let d= now.getDate()-dob.getDate();
					if(m<0 || (m==0 && d<0)){
						y--;
						m+=12;
					}
					if(d<0){
						m--;
						d+=new Date(now.getFullYear(),now.getMonth(),0).getDate();

					}
					const tsb=now-dob;
					const dsb=Math.floor(tsb/(1000*60*60*24));
					const msb=m+(y*12);
					const mnsb=Math.floor(tsb/(1000*60));
					const ssb=Math.floor(tsb/(1000));
					document.getElementById("dob").textContent+=dob.toDateString();
					document.getElementById("dob").textContent+="( ("+`${y} years, ${m} months, and ${d} days`+"), ("+ dsb+" Days"+"), ("+msb+" Months"+"), ("+mnsb+" Minutes"+"), ("+ssb+" Seconds"+")";
					document.getElementById("cpr").textContent+=" "+`${now.getFullYear()}`+" Narala Jithendra";
				}