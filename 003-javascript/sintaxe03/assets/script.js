/* CONDICIONAIS */
var jogador1 = 0;
var jogador2 = 0;
var placar;

// if ternário
console.log('Jogadores', jogador1 != -1 && jogador2 != -1 ? 'válidos' : 'inválidos');

// if, else if e else
if (jogador1 > 0) {
    console.log('Jogador 1 marcou ponto');
    placar = jogador1 > jogador2;
} else if (jogador2 > 0) {
    console.log('Jogador 2 marcou ponto');
    placar = jogador2 > jogador1;
} else {
    console.log('Ninguém marcou ponto');
}

// switch
switch(placar) {
    case placar == jogador1 > jogador2:
            console.log('Jogador 1 ganhou');
            break;
    case placar == jogador2 > jogador1:
        console.log('Jogador 2 ganhou');
        break;
    default:
        console.log('Ninguém ganhou');

}

/* REPETIÇÃO */
var array = ['valor1', 'valor2', 'valor3', 'valor4', 'valor5'];
var obj = { nome: 'objeto', tipo: 'object' };

// for
console.log('=== for ===');
for (let i = 0; i < array.length; i++) {
    console.log('Valor atual:', i);
}

// for in (array)
console.log('=== for in (array) ===');
for (let i in array) {
    console.log('Valor atual:', i);
}

// for in (object)
console.log('=== for in (object) ===');
for (let i in obj) {
    console.log('Propriedade:', i);
}

// for of
console.log('=== for of ===');
for (let i of array) {
    console.log('Valor atual:', i);
}

// while
var a = 0;
console.log('=== while ===');
while (a < 10) {
    a++;
    console.log('Valor atual:', a);
}

// do while
console.log('=== do while ===');
do {
    a++;
    console.log('Valor atual:', a);
} while (a < 10);
