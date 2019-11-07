// WHILE

let a = 3;
let tentativas = 0;

while(tentativas <= 3) {
o que eu quero que seja executado enquanto a condição não é atendida
}


// SOBRE WHILE
// while fazem com que o script fique repetindo o mesmo trecho do código, portanto, temos que nos assegurar que a comparação ou variável que está em while de alguma forma se torne falsa. Isso porque se a variável for sempre verdadeira, o script nunca irá parar, ocorrendo o que chamamos de looping infinito.

// SOBRE FOR
// diminui o risco de looping infinito porque for controla toda a variável, desde seu valor inicial até seu valor final.

let animes = ['Death Note', 'Boku No Hero', 'Dragon Ball', 'Cavaleiros do Zodíaco', 'Naruto', 'Super Onze', 'Nazo No Kanojo']; // lista
let i = 0;

while(i < animes.length){
    console.log(animes[i]);
    i++; // operador incremento (adiciona um a); incrementa seu operando e retorna um valor
}

//Enquanto essa condição for verdadeira, o que estiver dentro do ‘while’ rodará;

// ================================================ //

// FOR 
// Uma outra forma de criar laços é utilizando for. Nesse caso, entretanto, há duas estruturas comumente utilizadas no JavaScript: o for of e o for in.


// for(inicio;filmes;passo){ // 3 parâmentros
//     codigo a ser executado caso seja verdade
// } 

for(let j = 0; j < animes.length; j++){
    console.log(animes[j]);
}

// ================================================ //

//FOR IN
// O for in por sua vez serve para iterar tanto em objetos quanto em listas, mas ao invés de armazenar na variável definida qual é o elemento na-quele índice da lista, ele armazena qual o índice daquela iteração. Esse tipo de estrutura é boa quando você precisa utilizar o índice da lista para alguma coisa, ou quando você quer ver quais as chaves que um objeto contém. 


for(let indice in animes){
    console.log(animes[indice]);
}


// ================================================ //

//FOR OF
// A estrutura de laços ‘for of’ é utilizada para iterar cada um dos itens de uma lista. Para criarmos essa estrutura, precisamos escrever ‘for’, seguido do nome da variável que receberá cada um dos valores da lista, seguido do nome da lista.


for(let anime of animes){
    console.log(anime);
}


// FUNÇÃO

function comprarPao(dinheiro, pao){
    receber o dinheiro e comprar o pão
    return pão;
}
console.log(comprarPao())
comprarPao();
