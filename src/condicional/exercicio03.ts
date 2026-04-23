// 3. Crie um programa que solicite dois números e simule um menu de uma calculadora:
// 1 - Soma
// 2 - Subtração
// 3 - Multiplicação
// 4 - Divisão
// Use switch...Case

export function runQuestion3Condicional() {
    let num1 = Number(prompt("Digite o 1º número: "))
    let num2 = Number(prompt("Digite o 2º número: "))
    let op:number

    while(true) {
        op = Number(prompt("1 - Soma\n2 - Subtração\n3 - Multiplicação\n4 - Divisão\nEscolha a operação:"))

        if(isNaN(op) || op < 1 || op > 4) {
            alert("Entrada inválida. Tente novamente!")
            continue
        }

        break
    }

    switch(op) {
        case 1:
            console.log(`Soma: ${num1 + num2}`)
            break
        case 2:
            console.log(`Subtração: ${num1 - num2}`)
            break
        case 3:
            console.log(`Multiplicação: ${num1 * num2}`)
            break
        case 4:
            console.log(`Divisão: ${num1 / num2}`)
            break
        default:
            console.log("Entrada inválida!")
    }
}