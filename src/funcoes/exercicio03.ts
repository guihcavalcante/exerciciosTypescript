// 3. Crie uma função que recebe um número (ex: 5) e em seguida utilize loops aninhados para
// desenhar um triângulo de asteriscos no console.
// Exemplo para entrada 3:
// *
// **
// ***

export function runQuestion3Funcao() {
    function lerNumero() {
        let numero:number

        while(true) {
            numero = Number(prompt("Digite um número: "))

            if(isNaN(numero) || numero < 1) {
                alert("Entrada inválida. Tente novamente!")
                continue
            }

            break
        }
        return numero
    }

    function desenharTriangulo(numero:number) {
        for(let i = 1; i <= numero; i++) {
            console.log("*".repeat(i))
        }
    }

    let numero = lerNumero()
    desenharTriangulo(numero)
}