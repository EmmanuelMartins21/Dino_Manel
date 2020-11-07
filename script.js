const dino = document.querySelector('.dino');
let pulando = false;
let posicao = 0;
const background = document.querySelector('.background');

function handleKeyup(event){
    if(event.keyCode === 32){
        if(!pulando){
            pular();
        }   
    }
}

function pular(){
    
    pulando = true;

    let Intervalo = setInterval(() =>{
        if(posicao >= 150){
            clearInterval(Intervalo);

            //Descendo
            let Intervalo_descendo = setInterval(() =>{
                if(posicao <= 0){
                    clearInterval(Intervalo);
                    pulando = false;
                }else {
                    posicao -=20;
                    dino.style.bottom = posicao + 'px';
                }
            }, 20);
        } else {
            posicao += 20;

            dino.style.bottom = posicao + 'px';
        }
    }, 20);
}

function criaCactus(){
    const cactus = document.createElement('div'); // Criando uma div com javascript  
    let cactusPosicao = 1000;
    let tempo_aleatorio = Math.random() * 6000; // calcula tempos aleatorios


    cactus.classList.add('cactus'); //facilita na hora de dar o estilo com o css
    cactus.style.left = 1000 + 'px';
    background.appendChild(cactus);

    let Intevalo_esquerda =setInterval(() => {
       
        if(cactusPosicao < -60){
            clearInterval(Intevalo_esquerda);
            background.removeChild(cactus);
        }else if(cactusPosicao > 0 && cactusPosicao < 60 && posicao < 60){
            
                // Fim do Jogo
                clearInterval(Intevalo_esquerda);
                document.body.innerHTML = '<h1 class="game-over">Fim de Jogo</h1>';
            }else{
            cactusPosicao -= 10;
            cactus.style.left = cactusPosicao + 'px';
            }
        
    }, 20);

    setTimeout(criaCactus, tempo_aleatorio);
}

criaCactus();
document.addEventListener('keyup',handleKeyup);