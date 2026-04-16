export function runAula1Array() {
    let vetor:(number|string|object)[] = [
        10, 
        200, 
        {
            nome: 'Maria',
            sexo: 'F'
        }, 
        {
            nome: 'Jose',
            sexo: 'M'
        }
    ]

    vetor.push(100) // adiciona elemento no final do vetor
    vetor.pop() // remove elemento no final do vetor

    vetor.unshift("Roxo") // adiciona elemento ao início do vetor
    vetor.shift() // remove o primeiro elemento do vetor

    vetor.reverse() // inverte o vetor

    vetor.sort() // ordena em alfabética e crescente

    let paleta = vetor.join(" - ")

    console.log(vetor)
    console.log(paleta)
    console.log(typeof paleta)
}

