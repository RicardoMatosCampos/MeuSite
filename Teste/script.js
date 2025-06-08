document.getElementById("revelarSurpresa").addEventListener("click", function () {
  const surpresa = document.getElementById("surpresa");
  surpresa.classList.toggle("escondido");
});

// Função para criar corações subindo
function criarCoracao() {
  const heart = document.createElement("div");
  heart.classList.add("heart");
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.animationDuration = Math.random() * 5 + 5 + "s";
  document.querySelector(".heart-bg").appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 10000);
}

setInterval(criarCoracao, 300);