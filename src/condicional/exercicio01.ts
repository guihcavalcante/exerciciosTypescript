// 1. Crie um programa que leia um número e informe se ele é:
//  Par ou Ímpar
//  Positivo ou Negativo

export function runQuestion1Condicional() {
    const num = Number(prompt("Informe um número: "))

    if(num % 2 === 0) {
        console.log("É par!")
    } else {
        console.log("É ímpar!")
    }

    if (num > 0) {
        console.log("É positivo!")
    } else if (num < 0) {
        console.log("É negativo!")
    } else {
        console.log("É nulo!")
    }
}

