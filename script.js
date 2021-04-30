const dino = document.querySelector('.dino')


//captura o evento das teclas "espaço" e "seta pra cima"
function handlekeyUp(event){
    if(event.keyCode === 32 || event.keyCode === 38){
        console.log('pressionou espeço');
    }
}


//cria o evento do pulo do dino        
document.addEventListener('keyup', handlekeyUp)