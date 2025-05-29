let titulo = document.querySelector('h1');
titulo.innerHTML = 'Hora do Desafio';

function botaoClicado(){
    console.log('O botão foi clicado');
}

function amorPorjs(){
    alert('Eu amo JS');
}

function perguntarCidade(){
        let cidade = prompt('Digite o nome de uma cidade do Brasil:');
            alert('Estive em ' + cidade + ' e lembrei de você.');
    }

function somarNumeros() {
    let n1 = prompt('Digite o primeiro número:');
    let n2 = prompt('Digite o segundo número:');
    alert('A soma é: ' + (parseInt(n1) + parseInt(n2)));
}


