const dino = document.querySelector('.dino')


//captura o evento das teclas "espaço" e "seta pra cima"
function handlekeyUp(event){
    if(event.keyCode === 32 || event.keyCode === 38){
        jump();
    }
}

//cria o pulo do dino
function jump(){
   let position = 0;
   
   let upInterval = setInterval(() => {
        if (position >= 150 ) {      //sobe até 150px
            clearInterval(upInterval);  //limpa o intervalo e faz parar de subir
//  descendo
            let downInterval = setInterval(() => {
            if (position <= 0) {
                clearInterval(downInterval);
            }   else {
                    position -= 20;
                    dino.style.bottom = position + 'px';
                }    
            },20)  
        }   else { 
//  subindo    
            position += 20;
            dino.style.bottom = position + 'px';
        }
    },20);
}

//ouve o evento do apertar soltar as teclas        
document.addEventListener('keyup', handlekeyUp)