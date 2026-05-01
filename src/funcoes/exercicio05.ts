// 5. Crie uma função que recebe dois números: início e fim. Depois use um laço para percorrer
// esse intervalo e imprimir apenas os números que são múltiplos de 3.

export function runQuestion5Funcao() {
    function lerInicioEFim() {
        let inicio:number, fim:number
        while(true) {
            inicio = Number(prompt("Digite o número de início:"))
            fim = Number(prompt("Digite o número de fim:"))

            if(isNaN(inicio) || isNaN(fim) || inicio < 0 || fim < 0 || inicio > fim) {
                alert("Entrada inválida. Tente novamente!")
                continue
            }

            break
        }
        return {
            inicio: inicio,
            fim: fim
        }
    }

    function percorrerIntervalo(mapaNumeros: Record<string, number>) {
        let numerosMultiplosDe3:number[] = []

        for(let i = mapaNumeros.inicio; i <= mapaNumeros.fim; i++) {
            if (i % 3 === 0) {
                numerosMultiplosDe3.push(i)
            }
        }
        return numerosMultiplosDe3
    }

    let mapaNumeros = lerInicioEFim()
    let numerosMultiplosDe3 = percorrerIntervalo(mapaNumeros)

    console.log(`Números múltiplos de 3: ${numerosMultiplosDe3.join(", ")}`)
}