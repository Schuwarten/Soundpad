
function tocaSom(seletorAudio){
    const elemento = document.querySelector(seletorAudio);

   
    if(elemento && elemento.localName === 'audio'){
            elemento.play();
       
      }
    else{
        console.log('Elemento não encontrado');
      }
    
}

const listaTeclas = document.querySelectorAll('.tecla');



for (let contador=0; contador < listaTeclas.length; contador++){

    const tecla= listaTeclas[contador];
    const instrumento = tecla.classList[1]; 
    const som = `#som_${instrumento}` ;

    tecla.onclick = function(){
        tocaSom(som); 

    }
    
    tecla.onkeydown = function(evento){

        if(evento.code === 'Space' || evento.code ==='Enter'){
        tecla.classList.add('ativa');
    }
}
    tecla.onkeyup = function(){
        tecla.classList.remove('ativa');
    }
}

