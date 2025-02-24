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

function singularOuPlural(comparador, valorComparado, palavraNoPlural, palavraNoSingular) {
    comparativo = comparador > valorComparado ? palavraNoPlural : palavraNoSingular;
    return comparativo
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
        if (confirm(`Você realmente deseja DEVOLVER o jogo: \n${nomeJogo.textContent.toUpperCase()} ?`)) {
            botao.innerHTML = `Alugar`;
            imagem.classList.remove('dashboard__item__img--rented');
            botao.classList.remove('dashboard__item__button--return');
            alert(`O jogo "${nomeJogo.innerHTML}" foi devolvido com sucesso.`);
        }
    } else {
        if (confirm(`Você realmente deseja ALUGAR o jogo: \n${nomeJogo.textContent.toUpperCase()} ?`)) {
            botao.innerHTML = `Devolver`;
            imagem.classList.add('dashboard__item__img--rented');
            botao.classList.add('dashboard__item__button--return');
            alert(`O jogo "${nomeJogo.innerHTML}" foi alugado com sucesso.`);
        }
    }

    formarLista();
    exibirNaTela('info-1', `<h3 class="paragraph-title">Alugados: <span class="paragraph-title__emphasis">${contarAlugados()}</span></h3>`);
    exibirNaTela('info-2', `<h3 class="paragraph-title">Em estoque: <span class="paragraph-title__emphasis">${lista.length - contarAlugados()}</span></h3>`);
    if (jogos.length > 0) {
        exibirNaTela('itens', `<h3 class="newparagraph-title">${singularOuPlural(formarLista().length, 1, 'JOGOS ALUGADOS', 'JOGO ALUGADO')}:</h3>`);
        exibirNaTela('nome-itens', `<h3 class="newparagraph-title__emphasis">${formarLista().join(', ')}</h3>`);
    } else {
        exibirNaTela('itens', `<h3 class="newparagraph-title"></h3>`);
        exibirNaTela('nome-itens', `<h3 class="newparagraph-title__emphasis">${formarLista().join(', ')}</h3>`);
    }
}

// PROGRAMA PRINCIPAL
formarLista();
exibirNaTela('info-1', `<h3 class="paragraph-title">Alugados: <span class="paragraph-title__emphasis">${contarAlugados()}</span></h3>`);
exibirNaTela('info-2', `<h3 class="paragraph-title">Em estoque: <span class="paragraph-title__emphasis">${lista.length - contarAlugados()}</span></h3>`);
if (jogos.length > 0) {
    exibirNaTela('itens', `<h3 class="newparagraph-title">${singularOuPlural(formarLista(), 1, 'JOGOS ALUGADOS', 'JOGO ALUGADO')}:</h3>`);
    exibirNaTela('nome-itens', `<h3 class="newparagraph-title__emphasis">${formarLista().join(', ')}</h3>`);
} else {
    exibirNaTela('itens', `<h3 class="newparagraph-title"></h3>`);
    exibirNaTela('nome-itens', `<h3 class="newparagraph-title__emphasis">${formarLista().join(', ')}</h3>`);
}