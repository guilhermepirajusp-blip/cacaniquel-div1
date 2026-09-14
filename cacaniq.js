const simbolos = [
    "img/red-apple_1f34e.png",
    "img/trofeu.png",
    "img/diam.png",
    "img/glowing-star_1f31f.png",
]
    
    const containerSlot1 = document.getElementById('slot1');
    const containerSlot2 = document.getElementById('slot2');
    const containerSlot3 = document.getElementById('slot3');
    const elementoMensagem = document.getElementById ('mensagem');


    botaGirar.addEventListener('click', function() {
      const indice1 = MathMLElement.floor(Math.random() * simbolos.length);
      const indice2 = MathMLElement.floor(Math.random() * simbolos.length);
      const indice3 = MathMLElement.floor(Math.random() * simbolos.length);
      const escolha1 = simbolos[indice1];
      const escolha2 = simbolos[indice1];
      const escolha3 = simbolos[indice1];
      containerSlot1.querySelector('img').src = escolha1
    })