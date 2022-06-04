function mensagem(conteudo) {
    console.log(conteudo);
}

mensagem('Tudo bem?');

var alerta = function() {
    console.log('Este é um alerta');
}

alerta();

var soma = () => {
    console.log('A some de 1 + 2 =', 1 + 2);
}

soma();