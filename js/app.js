// *PÁGINA DE DESAFIOS*
//
// Desafio: Aluguel de games
// Autor: Allan Gomes
// Curso: Lógica de programação: praticando com desafios
// Instituição: Alura

// DECLARAÇÃO DE VARIÁVEIS
let lista = [];
let jogos = [];
let game;
let nomeJogo;

// DECLARAÇÃO DE FUNÇÕES
function exibirNaTela(id, texto) {
    var campo = document.getElementById(id);
    campo.innerHTML = texto;
}

function formarLista() {
    lista = [];
    jogos = [];
    for (var i = 1; i <= document.querySelectorAll('a').length; i++) {
        game = document.getElementById(`game-${i}`);
        nomeJogo = game.querySelector('.dashboard__item__name');
        var nomeBotao = game.querySelector('.dashboard__item__button');

        if (nomeBotao.textContent == 'Devolver') {
            lista.push('Alugado');
            jogos.push(nomeJogo.textContent);
        } else {
            lista.push('Em estoque');
        }
    }
    console.log(lista);
    return jogos
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
    game = document.getElementById(`game-${num}`);
    nomeJogo = game.querySelector('.dashboard__item__name');
    var imagem = game.querySelector('.dashboard__item__img');
    var botao = game.querySelector('.dashboard__item__button');

    if (botao.classList.contains('dashboard__item__button--return')) {
        botao.innerHTML = `Alugar`;
        imagem.classList.remove('dashboard__item__img--rented');
        //imagem.classList.add('dashboard__item__img');
        botao.classList.remove('dashboard__item__button--return');
        //botao.classList.add('dashboard__item__button');
        alert(`Você está devolvendo o jogo: ${nomeJogo.innerHTML}`);
    } else {
        botao.innerHTML = `Devolver`;
        //imagem.classList.remove('dashboard__item__img');
        imagem.classList.add('dashboard__item__img--rented');
        //botao.classList.remove('dashboard__item__button');
        botao.classList.add('dashboard__item__button--return');
        alert(`Você está devolvendo o jogo: ${nomeJogo.innerHTML}`);
    }

    formarLista();
    exibirNaTela('info-1', `<h3 class="paragraph-title">Alugados: <span class="paragraph-title__emphasis">${contarAlugados()}</span></h3>`);
    exibirNaTela('info-2', `<h3 class="paragraph-title">Em estoque: <span class="paragraph-title__emphasis">${lista.length - contarAlugados()}</span></h3>`);
    exibirNaTela('itens', `<h3 class="newparagraph-title">Jogos Alugados:</h3>`);
    exibirNaTela('nome-itens', `<h3 class="newparagraph-title__emphasis">${formarLista().join(', ')}</h3>`);
}

// PROGRAMA PRINCIPAL
formarLista();
exibirNaTela('info-1', `<h3 class="paragraph-title">Alugados: <span class="paragraph-title__emphasis">${contarAlugados()}</span></h3>`);
exibirNaTela('info-2', `<h3 class="paragraph-title">Em estoque: <span class="paragraph-title__emphasis">${lista.length - contarAlugados()}</span></h3>`);
exibirNaTela('itens', `<h3 class="newparagraph-title">Jogos Alugados:</h3>`);
exibirNaTela('nome-itens', `<h3 class="newparagraph-title__emphasis">${formarLista().join(', ')}</h3>`);