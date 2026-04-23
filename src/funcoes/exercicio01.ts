// 1. Crie uma função somarAte que recebe um número inteiro positivo. Use um laço de repetição
// para calcular a soma de todos os números de 1 até o número fornecido. (Ex: somarAte(4)
// deve retornar 10, pois 1+2+3+4 = 10).

export function runQuestion1Funcao() {

    function somarAte(numero:number) {

        let contador = 1
        let somador = 0

        while (contador <= numero) {
        

        somador += contador
        contador++

        }
        
        return somador

    }

    let num = Number(prompt("Digite o número:"))

    console.log(somarAte(num))

}