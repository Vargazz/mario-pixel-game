const mario = document.querySelector('.mario');
const tubo = document.querySelector('.tubo')
const gameOver = document.querySelector('.game-over')
const cloud = document.querySelector('.cloud')
const btnRes = document.querySelector('.btn-over')

const pulo = () => {

    mario.classList.add('pulo')

    setTimeout(() =>{
        mario.classList.remove('pulo')
    }, 500); 
   
}

const loop = setInterval(() => {

    const posicaoTubo = tubo.offsetLeft;
    const posicaoMario = +window.getComputedStyle(mario).bottom.replace('px','');
    const posicaoNuvem = cloud.offsetLeft
    

    if(posicaoTubo <= 120 && posicaoTubo > 0 && posicaoMario < 80){
        
        tubo.style.animation = 'none';
        tubo.style.left = `${posicaoTubo}px`;

        mario.style.animation = 'none';
        mario.style.bottom = `${posicaoMario}px`;

        mario.src ="./img/game-over.png"
        mario.style.width = '75px';
        mario.style.marginLeft = '50px';

        cloud.style.animation = 'none';
        cloud.style.left = `${posicaoNuvem}px`;
        
        gameOver.style.display = 'block';
        btnRes.style.display = 'block';
    }
}, 10);

btnRes.addEventListener('click', () => {
    location.reload();
});
document.addEventListener('keydown', pulo);
