let material = prompt("Digite o material");
let qtdDegraus = Number(prompt("Digite a quantidade de degraus"));
let escada = "";

for(let contador = 0; contador < qtdDegraus; contador++){
    escada += material;
    console.log(escada);
}