// script.js - Pode ser usado para adicionar interatividade no futuro
console.log("Página do Curso de Informática carregada.");

// Exemplo: adicionar um efeito suave ao rolar para as seções
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

