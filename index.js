//exercico 1
let nomeCompleto = "Leonardo Montalvão de Araujo";
console.log(nomeCompleto);

//exercico 2

let numeroA = 3
let numeroB = 2
var resultado = (numeroA * numeroB)

console.log('resultado = ' + resultado);

//exercio 3

function saudacao(nome) {
    return "Oi eu sou o " + nome;
}
console.log(saudacao("Goku!"));

//exercico 4
function multiplica(number1, number2) {
    return number1 * number2;
}
console.log(multiplica(5, 6));

//exercicio 5 
function podeDirigir(idade) {
    if (idade >= 18) {

        return 'Pode dirigir'

    } else {
        return 'não pode dirigir'
    }
}
console.log(podeDirigir(17));

//exercicio 6

for (let i = 0; i <= 20; i++) {
    console.log(i);
}

//exercicio 7 
for (let i = 0; i <= 20; i++) {
    if (i % 2 != 0) {
        console.log(i);
    }
}




//exercicio 8

function tabuada(numero) {
    for (let i = 1; i <= 10; i++) {
        console.log(numero * i);
    }
}
console.log(tabuada(2))

// exercicio 9
function converterEmHoras(tempo) {
    return (tempo / 60) + " shoras"
}
console.log(converterEmHoras(450));

// fim do exercicio