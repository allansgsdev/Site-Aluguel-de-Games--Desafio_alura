// *PÁGINA DE DESAFIOS*
//
// Desafio: Aluguel de games
// Autor: Allan Gomes
// Curso: Lógica de programação: praticando com desafios
// Instituição: Alura

// DECLARAÇÃO DE VARIÁVEIS
let lista = [];

// DECLARAÇÃO DE FUNÇÕES
function exibirNaTela(id, texto) {
    var campo = document.getElementById(id);
    campo.innerHTML = texto;
}

function formarLista() {
    lista = [];
    for (var i = 1; i <= document.querySelectorAll('a').length; i++) {
        var game = document.getElementById(`game-${i}`);
        var botao = game.querySelector('a');

        if (botao.classList.contains('dashboard__item__button--return')) {
            lista.push('Alugado');
        } else {
            lista.push('Em estoque');
        }
    }
    console.log(lista);
    return lista
}

function contarAlugados() {
    formarLista();
    var contador = 0;
    for (var i = 0; i < lista.length; i++) {
        if (lista[i] == 'Alugado') {
            contador++;
        }
    }
    return contador;
}

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

    formarLista();
    exibirNaTela('info-1', `<h3 class="paragraph-title">Alugados: <span class="paragraph-title__emphasis">${contarAlugados()}</span></h3>`);
    exibirNaTela('info-2', `<h3 class="paragraph-title">Em estoque: <span class="paragraph-title__emphasis">${lista.length - contarAlugados()}</span></h3>`);
}

// PROGRAMA PRINCIPAL
formarLista();
exibirNaTela('info-1', `<h3 class="paragraph-title">Alugados: <span class="paragraph-title__emphasis">${contarAlugados()}</span></h3>`);
exibirNaTela('info-2', `<h3 class="paragraph-title">Em estoque: <span class="paragraph-title__emphasis">${lista.length - contarAlugados()}</span></h3>`);