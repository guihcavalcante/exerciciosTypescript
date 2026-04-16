// 1. Crie um programa que peça números até o usuário digitar 0 e mostre:
//  Quantidade de números digitados
//  Soma total

// export {}

export function runQuestion1Repeticao(): void {
    
    let contador = 0
    let somatorio = 0

    while(true) {
        let num = Number(prompt("Informe um número [0 para sair]: "))

        if(isNaN(num)) {
            alert("Entrada inválida. Tente novamente")
            continue
        }

        if (num === 0) {
            alert("Encerrando...")
            break
        }

        contador++
        somatorio += num
    }

    console.log(`Contador: ${contador}`)
    console.log(`Somatório: ${somatorio}`)
}



