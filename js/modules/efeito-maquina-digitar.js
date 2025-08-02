export default function initMaquinaDigitar(){
// EFEITO MAQUINA DE DIGITAR
function initTypeWriter() {
  const titulo = document.querySelectorAll(".js-h1-efeito");

  titulo.forEach((titulo) => {
    function typeWriter(elemento) {
      const textoArray = elemento.innerHTML.split(""); // o (split), separa cada letra do testo T,I,T,U,L,O
      elemento.innerHTML = "";
      textoArray.forEach((letra, i) => {
        setTimeout(function () {
          elemento.innerHTML += letra;
        }, 130 * i);
      });
    }

    typeWriter(titulo);
  });
}
initTypeWriter();
// EFEITO MAQUINA DE DIGITAR //
}
