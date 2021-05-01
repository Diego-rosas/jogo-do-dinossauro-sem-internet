const dino = document.querySelector('.dino')
const background = document.querySelector('.background');
const botao = document.querySelector('#botao').value;
let isJumping = false;
let position = 0;


//captura o evento das teclas "espaço" e "seta pra cima"
function handlekeyUp(event){
    if(event.keyCode === 32 || event.keyCode === 38){
        if(!isJumping){
            jump();
        }
    }
}

/*
function puloBotao(){  handle
    if(botao == 32){
        if(!isJumping){
            jump();
        }
    }
    
}*/

//cria o pulo do dino
function jump(){
   

    isJumping = true;

   let upInterval = setInterval(() => {
        if (position >= 150 ) {      //sobe até 150px
            clearInterval(upInterval);  //limpa o intervalo e faz parar de subir
//  descendo
            let downInterval = setInterval(() => {
            if (position <= 0) {
                clearInterval(downInterval);
                isJumping = false;
            }   else {
                    position -= 20;
                    dino.style.bottom = position + 'px';
                }    
            },15)  
        }   else { 
//  subindo    
            position += 20;
            dino.style.bottom = position + 'px';
        }
    },15);
}

//cria o cactus
function createCactus(){
    const cactus = document.createElement('div'); //cria uma div no html e atribui a cariavel cactus
    let cactusPosition = 1150;
    let randomTime = Math.random() * 6000; 

    cactus.classList.add('cactus'); // cria uma class para a div cactus 
    background.appendChild(cactus);
    cactus.style.left = 1150 + 'px';

    let leftInterval = setInterval(() => {
       if(cactusPosition < -60) {
           clearInterval(leftInterval);
           background.removeChild(cactus);
       } else if(cactusPosition > 0 && cactusPosition < 60 && position < 60){
            //  Game over
            clearInterval(leftInterval);
           document.body.innerHTML = '<h1 class="game-over">Fim de Jogo!</h1>'    
       } else {
            cactusPosition -= 10;
            cactus.style.left = cactusPosition + 'px'
       }    

    },20);

    setTimeout(createCactus, randomTime);
}

createCactus();
//ouve o evento do apertar soltar as teclas        
document.addEventListener('keyup', handlekeyUp);