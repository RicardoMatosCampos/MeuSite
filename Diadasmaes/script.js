// Carregar a API do YouTube
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
        player.unMute(); // Só desmuta, sem tocar de novo
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
