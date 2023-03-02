function tocaSom(seletorElemento) {
    const elemento = document.querySelector(seletorElemento);

    if (elemento && elemento.localName === 'audio') {
        elemento.play();
    } else {
        alert('Elemento ou seletor não encontrado!')
    }
}

const listaDeTeclas = document.querySelectorAll('.tecla');
const listaDeSons = document.querySelectorAll('audio');


for (let contador = 0; contador < listaDeTeclas.length; contador++) {

    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1];
    const idAudio = `#som_${instrumento}`;

    tecla.onclick = function () {
        tocaSom(idAudio);
    }

    tecla.onkeydown = function (evento) {

        console.log(evento.code == 'Space' || evento.code === 'Enter');

        if (evento.code === 'Space' || evento.code === 'Enter') {

            tecla.classList.add('ativa');
        }

    }

    tecla.onkeyup = function () {
        tecla.classList.remove('ativa');
    }
}



//let contador = 0;
/*while (contador < listaDeTeclas.length){

    contador++;

}*/