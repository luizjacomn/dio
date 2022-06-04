/* OPERADORES MATEMÁTICOS */
// adição
var adicao = 1 + 1;
console.log('adição:', adicao);

// subtração
var subtracao = 2 - 1;
console.log('subtração:', subtracao);

// multiplicação
var multiplicacao = 2 * 8;
console.log('multiplicação:', multiplicacao);

// divisão
var divisao = 48 / 6;
console.log('divisão:', divisao);

// resto
var resto = 5 % 2;
console.log('resto:', resto);

// potenciação
var potenciacao = 2 ** 8;
console.log('potenciação:', potenciacao);

/* OPERADORES LÓGICOS */
// and
var and = true && false;
console.log('and:', and);

// or
var or = true || false;
console.log('or:', or);

// negation
var negation = !true;
console.log('negation:', negation);

/* ESCOPOS */
var global = 'global';
console.log('global:', global);

function testeLocal() {
    let local = 'local';
    console.log('dentro de uma função:', local);
}

// aqui ocorre um erro
// console.log('fora de uma função:', local);

testeLocal();
