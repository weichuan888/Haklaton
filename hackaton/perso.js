
var perso = document.getElementById('bordel');

perso.addEventListener('click', function(){


	var pleinEcran = document.createElement('div');	
	peinEcran.id= 'pleinEcran';
	//pleinEcran.height = 100%;
	//pleinEcran.width = 100%;
	


	var video = document.createElement('video');
	video.height = 100%;
	video.width = 100%;
	video.style.autoplay= true;
	video.style.controls = true;


	var source = document.createElement('source');
	source.src = "video.mp4";
	source.type = "type/mp4";

	video.appendChild(source);
	pleinEcran.appendChild(video);
	body.appendChild(pleinEcran);

})


/* doit pouvoir dinamiquement renvoyer les points 

doit pouvoir -> petites fotos sur la ligne on change juste leur padding

reprendre la carte png l'agrandir 
trouver la position x et y  des points 
les rajouter dinamiquement avec js
les rendres clicable grace à un id dynamique 
 renvoyer la vidéo en grand format grace à l'attribut grand écran du lecteur

*/

var point = document.createElement('a');
point.style.zIndex = 5;
var image = document.createElement('img');
image.href= 'point.png';
point.appendChild(image);


// la placer à un point précis

//point.positionX = 456;


body.appendChild(point);

// les laisser visible avec une opacity?