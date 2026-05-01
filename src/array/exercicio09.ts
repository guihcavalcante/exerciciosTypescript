// 9. Implemente uma função chamada gerarIntervaloFiltrado que receba dois parâmetros numéricos:
// inicio e fim. A função deve seguir os seguintes requisitos:
//  Antes de iniciar o laço, verifique se o valor de inicio é menor ou igual ao valor de fim. Caso não
// seja, exiba uma mensagem de erro ou inverta os valores para garantir que o intervalo seja válido.
//  Utilize uma estrutura de repetição (for ou while) para percorrer todos os números inteiros
// contidos nesse intervalo (inclusive o início e o fim).
//  Durante a iteração, armazene todos os números do intervalo em um array.
//  Após preencher o array, utilize um novo laço de repetição (ou um método de array) para percorrer
// a lista criada.
//  Imprima no console apenas os números que são múltiplos e divisores da sua idade.
//  Ao final, exiba a quantidade total de números que foram impressos.

export function runQuestion9Array() {
    function gerarIntervaloFiltrado(inicio:number, fim:number) {
        if(inicio > fim) {
            [inicio, fim] = [fim, inicio]
        }

        let numeros:number[] = []

        for(let i = inicio; i<= fim; i++) {
            numeros.push(i)
        }

        let multiplosDe16:number[] = []
        let divisoresDe16:number[] = []

        numeros.forEach((n) => {
            if(n % 16 === 0) {
                multiplosDe16.push(n)
            }


            if(16 % n === 0) {
                divisoresDe16.push(n)
            }
        })

        console.log(`Múltiplos de 16: ${multiplosDe16}`)
        console.log(`Divisores de 16: ${divisoresDe16}`)
        console.log(`Quantidade de números impressos: ${multiplosDe16.length+divisoresDe16.length}`)
    }

    let inicio:number, fim:number
    while(true) {
        inicio = Number(prompt("Digite o número de início: "))
        fim = Number(prompt("Digite o número de fim: "))

        if(isNaN(inicio) || isNaN(fim) || inicio < 0 || fim < 0) {
            alert("Entrada inválida. Tente novamente")
            continue
        }

        break
    }
    
    gerarIntervaloFiltrado(inicio, fim)
}