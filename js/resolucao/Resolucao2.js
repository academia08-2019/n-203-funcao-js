let filmes = [
    {titulo:"Invocação do Mal", classificacao: 16},
    {titulo:"Sharkboy e Lavagirl", classificacao: 0},
    {titulo:"Senhor dos aneis", classificacao: 12},
    {titulo: "Ninja Assassino", classificacao: 18},
    {titulo:"Velozes e Furiosos: Desafio em Tóquio", classificacao: 14},
    {titulo: "Estagiarios", classificacao:12},
    {titulo:"Rei Leão", classificao: 0},
    {titulo:"Toy Story", classificacao: 0},
    {titulo:"Lagoa Azul", classificacao: 12},
    {titulo:"De Volta para o Futuro", classificacao: 0},
    {titulo:"Pokemon 2000", classificacao: 0}
];

let idade = Number(prompt("Qual a sua idade?"));

while(idade <= 0 || isNaN(idade)){
    alert("Idade Inválida. Por favor digite novamente");
    idade = Number(prompt("Qual a sua idade?"));
}

for(let filme of filmes){
    if(idade >= filme.classificacao){
        console.log(filme.titulo);
    }
}