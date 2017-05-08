var colors = ['#FF0000',  '#7A0000',  '#c3000d',  '#dc143c',  '#FF33CC', '#fc4f08', '#FF9900', 'yellow', '#FFC924', '#33CC33', '#0F3D0F',  '#48E8C8', '#00997A', '#0066FF', '#000080', '#2E1F4C', '#661452',  '#472400',  'white', '#c0c0c0', 'black']

for(var i = 0, n = colors.length; i < n; i++){
	var swatch = document.createElement('div');
	swatch.className = 'swatch';
	swatch.style.backgroundColor = colors[i];
	swatch.addEventListener('click', setSwatch);
	document.getElementById('colors').appendChild(swatch);
}

function setColor(color){
	context.fillStyle = color;
	context.strokeStyle = color;
	var active = document.getElementsByClassName('active')[0];
	if (active){
		active.className = 'swatch';
	}
}

function setSwatch(e){
	var swatch = e.target;
	setColor(swatch.style.backgroundColor);
	swatch.className += ' active';
}

