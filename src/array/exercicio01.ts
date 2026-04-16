// 1. Mostre-me as seguintes listas, derivadas de: [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
// a) Números pares
// b) Números ímpares
// c) Todos os múltiplos de 2,3 e 4
// d) Lista reversa
export function runQuestion1Array(): void {
    let numeros = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]

    let pares = numeros.filter((num) => num % 2 === 0)
    let impares = numeros.filter((num) => num % 2 === 1)
    let multiplos = numeros.filter((num) => num % 2 === 0 || num % 3 === 0 || num % 4 === 0)
    let reversa = [...numeros].reverse()

    console.log(`Pares: ${pares}`)
    console.log(`Ímpares: ${impares}`)
    console.log(`Múltiplos: ${multiplos}`)
    console.log(`Lista reversa: ${reversa}`)
}

