// Funções são fundamentais em JavaScript. Uma função é um procedi-mento de JavaScript - um conjunto de instruções que executa uma tarefa ou calcula um valor.
// prompt()
// alert()
// console.log()

// soma

function soma(n1, n2) {
    return n1 + n2
}

function soma(n1 = 0, n2 = 0) { //parametros opcionais
    return n1 + n2
}

// par ou ímpar?

function parOuImpar(n) {
    if (n % 2 == 0) {
        alert("É par!")
        return "É par!"
    } else {
        alert("É ímpar!")
        return "É ímpar!"
    }
}
parOuImpar();

// var recebe function

let a = function hehe() {
    return "hoho"
}

const subtrair = function (n1, n2) {
    return n1 - n2;
}

// argumentos

function somar() {
    let soma = 0;
    for (let i = 0; i < arguments.length; i++) {
        soma += arguments[i];
    }
    return soma;
}

// arrow function - gerar aleatório

const gerarAleatorio = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// gerar lerolero

let lerolero = ["for o que????", "o javascripto me impactou. tems o que é preciso para devolver minhas fantasias?? meu sonho de viver a vida??", "matar o javascripto", "oloquinho meu", 'kkkkkkrs']

const gerarLeroLero = () => {
    return lerolero[gerarAleatorio(0, lerolero.length - 1)];
}