function calcularIMC(peso, altura) {
    let imc = peso / (altura * altura);
    return imc;
}

console.log(calcularIMC(70, 1.75)); 


function calcularFatorial(numero) {
    let fatorial = 1;
    for (let i = 2; i <= numero; i++) {
        fatorial *= i;
    }
    return fatorial;
}

console.log(calcularFatorial(5)); 



function converterDolarParaReal(valorEmDolar) {
    const cotacao = 4.80;
    return valorEmDolar * cotacao;
}

console.log(converterDolarParaReal(10)); 


function calcularSalaRetangular(largura, altura) {
    let area = largura * altura;
    let perimetro = 2 * (largura + altura);
    console.log(`Área: ${area} m²`);
    console.log(`Perímetro: ${perimetro} m`);
}

calcularSalaRetangular(5, 3); 


function calcularSalaCircular(raio) {
    const pi = 3.14;
    let area = pi * raio * raio;
    let perimetro = 2 * pi * raio;
    console.log(`Área: ${area.toFixed(2)} m²`);
    console.log(`Perímetro: ${perimetro.toFixed(2)} m`);
}

calcularSalaCircular(4);


function mostrarTabuada(numero) {
    for (let i = 1; i <= 10; i++) {
        console.log(`${numero} x ${i} = ${numero * i}`);
    }
}

mostrarTabuada(7);



