function calculadora() {
    const operacao = Number(prompt(`Informe a operação:
    1- Soma (+)
    2- Subtração (-)
    3- Multiplicação (*)
    4- Divisão (/)
    5- Potenciação (**)
    `));

    if (!operacao || operacao >= 6) {
        alert('Operação inválida');
        calculadora();
    }

    let n1 = Number(prompt('Informe o primeiro valor:'));
    let n2 = Number(prompt('Informe o segundo valor:'));
    let resultado = 0;

    if (!n1 || !n2) {
        alert('Parâmetros inválidos!');
        calculadora();
    } else {
        switch(operacao) {
            case 1:
                resultado = somar(n1, n2);
                break;
            case 2:
                resultado = subtrair(n1, n2);
                break;
            case 3:
                resultado = multiplicar(n1, n2);
                break;
            case 4:
                resultado = dividir(n1, n2);
                break;
            case 5:
                resultado = elevar(n1, n2);
                break;
            default:
                return;
        }
    
        alert('Resultado: ' + resultado);
    
        novaOperacao();
    }

}

calculadora();

function somar(n1, n2) {
    return n1 + n2;
}

function subtrair(n1, n2) {
    return n1 - n2;
}

function multiplicar(n1, n2) {
    return n1 * n2;
}

function dividir(n1, n2) {
    return n1 / n2;
}

function elevar(n1, n2) {
    return n1 ** n2;
}

function novaOperacao() {
    let opcao = Number(prompt(`Deseja fazer outra operação?
                                1- Sim
                                2- Não
                                `));

    if (opcao == 1) {
        calculadora();
    } else if (opcao == 2) {
        alert('Até mais!');
    } else {
        alert('Informe uma opção válida!');
        novaOperacao();
    }
}
