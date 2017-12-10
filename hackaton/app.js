
var point = document.createElement('img');
point.className = 'yop';
point.src= 'Webp.net-resizeimage (1).png';


// la placer à un point précis

//point.positionX = 456;


var body = document.getElementById('corp');
body.appendChild(point);

point.addEventListener('click', function(){

// faire tout dans le css
	var pleinEcran = document.createElement('div');	
	pleinEcran.id= 'pleinEcran';

	var fermer = document.createElement('img');
	fermer.id = 'fermer';
	fermer.src = 'x.png';
	pleinEcran.appendChild(fermer);
	var video = document.createElement('video');
	video.style.height = '100%';
	video.style.width = '100%';
	video.autoplay= true;
	video.controls = true;


	var source = document.createElement('source');
	source.src = "Bob_Marley_-_Don't_worry_be_Happy.mp4";
	source.type = "video/mp4";

	var body = document.getElementById('corp');
	video.appendChild(source);
	pleinEcran.appendChild(video);
	body.appendChild(pleinEcran);

	pleinEcran.addEventListener('click', function(){


		body.removeChild(pleinEcran);


	});

});


