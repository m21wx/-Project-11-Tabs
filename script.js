	
	
		let tabsbtn = document.querySelectorAll('ul li')
		let tabsTextp = document.querySelectorAll('.text p')
		function removeActive(){
			tabsbtn.forEach(e=>{
				e.classList.remove('active')
			})
		}
		tabsbtn.forEach(e =>{
			
				e.addEventListener('click',(el)=>{
					removeActive()
					e.classList.add('active')
					tabsTextp.forEach(e=>{
						e.style.display='none';
					})
					
						document.getElementById(el.currentTarget.dataset.textp).style.display='block';
					})	

					
				})
	
					
					 		
			
			
		
			