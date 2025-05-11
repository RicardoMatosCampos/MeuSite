// Função para criar animações laterais (flores/corações)
function criarAnimacao() {
    const animacao = document.createElement('span');
    animacao.classList.add('flutuante');

    // Alterna entre flor e coração
    animacao.textContent = Math.random() > 0.5 ? '🌸' : '💖';


    // Define posição aleatória lateral
    const lado = Math.random() > 0.5 ? 'left' : 'right';
    animacao.style[lado] = '0px';
    animacao.style.top = Math.random() * window.innerHeight + 'px';

    document.getElementById('animacoesLaterais').appendChild(animacao);

    // Remove após animação
    setTimeout(() => {
        animacao.remove();
    }, 5000);
}

// Cria novas animações a cada 500ms
setInterval(criarAnimacao, 500);

// Homenagem padrão exibida
window.addEventListener('load', () => {
    document.getElementById('homenagemExibida').innerHTML = 
        `
        <strong>🌹 Homenagem para Minha Mãe 🌹</strong><br>
        Mamãe, minha rainha, meu porto seguro.

Hoje eu quero que você saiba que cada passo que eu dou na vida carrega um pedacinho do que aprendi com você.
A sua força me ensinou a nunca desistir, o seu amor me mostrou o verdadeiro significado da palavra carinho, e a sua fé me inspira todos os dias a acreditar em dias melhores.
Você é mais do que uma mãe.
Você é minha amiga, minha conselheira, meu exemplo de coragem e dedicação.
Em cada sorriso seu eu encontro paz, e no seu abraço eu encontro o lugar mais seguro do mundo.
Te agradeço por cada sacrifício silencioso, por cada noite sem dormir, por cada sonho que adiou para realizar os meus.
Hoje, neste Dia das Mães, eu celebro a mulher maravilhosa que você é e agradeço a Deus por me abençoar com uma mãe tão especial.
Te amo com todo o meu coração, hoje e sempre.<br>
<strong>🌸 Feliz Dia das Mães! 🌸</strong>`;
});

// API do YouTube

var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
document.head.appendChild(tag);

var player;

function onYouTubeIframeAPIReady() {
    player = new YT.Player('player', {
        events: {
            'onReady': onPlayerReady
        }
    });
}

function onPlayerReady(event) {
    // Mutar e tocar inicialmente (cumprindo autoplay sem som)
    player.mute();
    player.playVideo();

    // Função para ativar o som no primeiro toque/click
    function ativarSom() {
        player.unMute();
        player.playVideo();
        removerEventos(); // Remove os listeners após ativar o som
    }

    // Adicionar listeners para mobile e desktop
    document.addEventListener('click', ativarSom);
    document.addEventListener('touchstart', ativarSom);

    // Função para limpar os eventos após o primeiro toque
    function removerEventos() {
        document.removeEventListener('click', ativarSom);
        document.removeEventListener('touchstart', ativarSom);
    }
}
