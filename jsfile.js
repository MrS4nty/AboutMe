(function(){
  
	var icon = '<img class="sg" src="https://i.ibb.co/CBw1B4S/images.jpg">';
	document.head.insertAdjacentHTML('beforeend','<style>.sg { width: 50px; height: 50px; position: fixed; bottom: 10px; right: 10px; border-radius: 50%;}</style>'); 
  
	var a = document.createElement('a');
	a.setAttribute('href','https://mrs4nty.github.io/AboutMe/');
	a.setAttribute('target','_blank');
	a.innerHTML = icon;
    
	
 	document.body.appendChild(a);
	})();
