// function showImage() {
//   let img = document.getElementById('secimg')
//   img.innerHTML += img
//   img.src = '../images/image-hero-desktop.png'
// }

// var img = document.createElement("img"); 
 
// img.src = '../images/image-hero-desktop.png';
// var src = document.getElementById("x"); 
 
// src.appendChild(img); 



// var img = new Image(); 
// var div = document.getElementById('x'); 
 
 
// img.onload = function() { 
 
//   div.innerHTML += '<img src="'+img.src+'" />';  
 
// }; 
 
 
 

// var img = document.createElement("img"); 
 
// img.src = '../images/image-hero-desktop.png'; 
// var src = document.getElementById("secimg"); 
 
// src.appendChild(img); 



// var img = new Image(); 
// var div = document.getElementById('secimg'); 
 
 
// img.onload = function() { 
 
//   div.innerHTML += '<img src="'+img.src+'" />';  
 
// }; 
 
 
// img.src = '../images/image-hero-desktop.png'; 

let aberto = false
const botaozinho = document.querySelectorAll('.botaozinho') 
const nicolas = document.querySelectorAll('.nicolas')
for (let indice = 0; indice < botaozinho.length; indice++) {
  botaozinho[indice].addEventListener('click', clicar)
function clicar() {
  if (aberto === false) {
    nicolas[indice].classList.remove('hide')
    aberto = true
    nicolas[indice].style.display = 'block'
  } 
  else if (aberto === true) {
    nicolas[indice].classList.add('hide')
    aberto = false
    nicolas[indice].style.display = 'none'
  }
}
}




