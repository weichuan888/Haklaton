// document.querySelector("#carretrois").addEventListener("click", function() {
//   document.querySelector("#carretrois").class.toggle("big");
//   console.log("patat");
// });
var div = document.getElementById('carretrois');
// var toggle = document.getElementById('carretrois');
    div.addEventListener("click",function(callback){

  // div.classList.toggle("foo");


            // div.classList.toggle("carretrois");

// div.style.backgroundColor = 'red';

// }
// if(div.style.display=="block") {
//   div.style.display="none"
// }
// else (div.style.display = "block");
// }
  });

// $("#carredeux").click(function() {
//   $(".chemin").toggleClass("pushed");
// });

// function myFunction() {
//     var x = document.getElementById("carredeux");
//     if (x.style.display === "none") {
//         x.style.display = "block";
//     } else {
//         x.style.display = "none";
//     }
// }
// function classToggle() {
//     this.classList.toggle('carredeux1');
//     this.classList.toggle('carredeux2');
// }
// document.querySelector('#carredeux').addEventListener('click', classToggle);


function a1(a4){
  var a5 = document.getElementById(a4);
  if(a5.style.display=="block") {
    a5.style.display="none"
  }
  else (a5.style.display = "block");
}


var connard = document.querySelector('button');
var green = false;
connard.addEventListener('click', function() {
  if(green) {
    document.body.style.backgroundColor="white";
    green = false;
  }else {
    document.body.style.backgroundColor = "blue";
    document.body.style.width = "100%";
    document.body.style.height = "100%";
    document.body.style.transition= "width 2s, height 2s";
    green = true;
  }
})

// Get the button, and when the user clicks on it, execute myFunction
document.getElementById("myBtn").onclick = function() {myFunction()};

/* myFunction toggles between adding and removing the show class, which is used to hide and show the dropdown content */
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}
















// $(".entete").click(function () {
// var entete = $(this);
// //On récupère le contenu avec la fonction next, qui récupère l'élément suivant
// var contenu = $(entete).next();
// //Ouvre le contenu s'il est masqué, sinon le masque avec un effet de glissement
// $(contenu).slideToggle(500, function () {
// //On change le texte de l'entête suivant si le contenu est affiché ou non
// $(entete).text(function () {
// return $(contenu).is(:visible) ? Masquer : Afficher;
// });
// });
// });
