// *PÁGINA DE DESAFIOS*
//
// Desafio: Aluguel de games
// Autor: Allan Gomes
// Curso: Lógica de programação: praticando com desafios
// Instituição: Alura

// DECLARAÇÃO DE FUNÇÕES
function alterarStatus(num) {
    var game = document.getElementById(`game-${num}`);
    var imagem = game.querySelector('div');
    var botao = game.querySelector('a');

    if (botao.classList.contains('dashboard__item__button--return')) {
        botao.innerHTML = `Alugar`;
        imagem.classList.remove('dashboard__item__img--rented');
        //imagem.classList.add('dashboard__item__img');
        botao.classList.remove('dashboard__item__button--return');
        //botao.classList.add('dashboard__item__button');
    } else {
        botao.innerHTML = `Devolver`;
        //imagem.classList.remove('dashboard__item__img');
        imagem.classList.add('dashboard__item__img--rented');
        //botao.classList.remove('dashboard__item__button');
        botao.classList.add('dashboard__item__button--return');
    }
}

// PROGRAMA PRINCIPAL
