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




// Recebendo elementos do html
const botaozinho = document.querySelectorAll('.botaozinho')
const nicolas = document.querySelectorAll('.nicolas')
let aberto = [false, false]
// Função que serve pra usar o índice 0 e 1
for (let indice = 0; indice < botaozinho.length; indice++) {
  // recebendo o evento de clicar do botãozinho 0 e 1 e chamando a função clicar
  botaozinho[indice].addEventListener('click', clicar)
  function clicar() {
    if (aberto[indice] === false) {
      fechartodas()
      nicolas[indice].classList.remove('hide')
      aberto[indice] = true
    }
    else if (aberto[indice] === true) {
      nicolas[indice].classList.add('hide')
      aberto[indice] = false
    }
  }
}
function fechartodas() {
  nicolas[0].classList.add('hide')
  aberto[0] = false
  nicolas[1].classList.add('hide')
  aberto[1] = false
}



