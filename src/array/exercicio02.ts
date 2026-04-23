// 2. Faça um programa que leia um número indeterminado de notas ou -1 para encerrar. Após esta
// entrada de dados, faça o seguinte:
// a) Mostre a quantidade de notas que foram lidas.
// b) Exiba todas as notas na ordem em que foram informadas.
// c) Exiba todas as notas na ordem inversa à que foram informadas.
// d) Calcule e mostre a soma das notas.
// e) Calcule e mostre a média das notas.
// f) Calcule e mostre a quantidade de notas acima da média calculada.

export function runQuestion2Array() {
    let notas:number[] = []
    let contador = 1

    while(true) {
        let nota = Number(prompt(`Digite a ${contador}º nota [-1 para sair]:`))

        if (isNaN(nota)) {
            alert("Entrada inválida. Tente novamente!")
            continue
        }

        if (nota === -1) {
            alert("Encerrando...")
            break
        }

        notas.push(nota)
        contador++

    }

    let somaNotas = notas.reduce((acumulador, notaAtual) => acumulador +notaAtual , 0)
    let mediaNotas = somaNotas / notas.length
    let acimaMedia = notas.filter((nota) => nota > mediaNotas)

    console.log(`Quantidade: ${notas.length}`)
    console.log(`Notas: ${notas.join(", ")}`)
    console.log(`Notas inversas: ${[...notas].reverse()}`)
    console.log(`Soma: ${somaNotas}`)
    console.log(`Média: ${mediaNotas.toFixed(2)}`)
    console.log(`Quantidade acima da média: ${acimaMedia.join(", ")}`)
}