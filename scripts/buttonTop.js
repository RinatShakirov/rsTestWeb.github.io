window.addEventListener('load', function(){
	let top = document.querySelector('.top');
	let position;
	let t;
	
	top.addEventListener('click', funcClick);

	document.onscroll = function(event){
		if(window.pageYOffset > 1000){
			top.style.right = '30px';
			top.style.opacity = 1;
			// console.log(event);
		}
		else{
			top.style.right = '-60px';
			top.style.opacity = 0;
		}
	}
	function funcClick(){
		position = window.pageYOffset;
		positionTop();
	}
	
	function positionTop(){
		if(position > 0){
			window.scrollTo(0, position);
			position = position - 10;
			t = setTimeout(positionTop, 1);
			// console.log(t);
		}
		else{
			clearTimeout(t);
		}
	}
});

