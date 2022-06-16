function processa() {
    const num1 = prompt('Informe o primeiro número:');
    const num2 = prompt('Informe o segundo número:');

    const iguais = num1 === num2;

    const soma = num1 + num2;

    const menorQue10 = soma < 10;

    const menorQue20 = soma < 20;

    const msg = `Os números ${num1} e ${num2}${iguais ? '' : 'não'} são iguais. Sua soma é ${soma}, que é ${menorQue10 ? 'menor' : 'maior'} que 10 e ${menorQue20 ? 'menor' : 'maior'} que 20.`;

    alert(msg);
}

processa();