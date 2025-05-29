// 1. Exibe "Olá, mundo!" no console
function olaMundo(){
    console.log('Olá Mundo');
}
olaMundo();


// 2. Recebe um nome como parâmetro e exibe "Olá, [nome]!" no console
function cumprimentar(nome){
    console.log('olá, ' + nome + '!');
}
cumprimentar('Ana');


// 3. Recebe um número como parâmetro e retorna o dobro
function dobrarNum(numero){
    return numero * 2;
}
console.log(dobrarNum(8));


// 4. Recebe três números e retorna a média deles
function mediaNum(a, b, c){
    return (a + b + c) / 3;
}
console.log(mediaNum(1, 2, 3));


// 5. Recebe dois números e retorna o maior
function maiorNum(a, b){
    return a > b ? a : b;
}
console.log(maiorNum(5, 10)); 


// 6. Recebe um número e retorna o quadrado dele
function quadradoNum(numero){
    return numero * numero;
}
console.log(quadradoNum(5));