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
const botaozinho = document.querySelector('#botaozinho') 
botaozinho.addEventListener('click', clicar)
function clicar() {
  if (aberto === false) {
    nicolas[0].classList.remove('hide')
    aberto = true
    nicolas[0].style.display = 'block'
  } 
  else if (aberto === true) {
    nicolas[0].classList.add('hide')
    aberto = false
    nicolas[0].style.display = 'none'
  }





  
}

const nicolas = document.querySelectorAll('.nicolas')
for (let indice = 0; indice < nicolas.length; indice++) {
  console.log(nicolas[indice])
}