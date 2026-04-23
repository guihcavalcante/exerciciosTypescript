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

    // toString(): Converte o array em uma string simples separada por
    // vírgulas.

    let texto = vetor.toString();

    // concat(): Junta dois ou mais arrays e retorna um novo, sem alterar
    // os originais.

    let ar1: string[] = ["Carro", "Moto"];

    let ar2: string[] = ["Navio", "Skate"];

    let transporte = ar1.concat(ar2);



    // indexOf(): Procura um elemento e retorna a sua
    // posição (índice). Retorna -1 se não encontrar.

    let posicao = vetor.indexOf("Azul");

    // splice(): Remove ou substitui elementos em um
    // ponto específico.

    let num: number[] = [0, 1, 2, 3, 4, 5, 6, 7, 8,
    9];

    // A partir do índice 2, remova 4 elementos:

    num.splice(2, 4);

    // Resultado: [0, 1, 6, 7, 8, 9]

    const numeros = [1, 2, 3, 4, 5, 6];
    const pares = numeros.filter(n => n % 2 === 0);

    console.log(pares); // [2, 4, 6] (Array menor)



    const numeros2 = [1, 2, 3, 4, 5, 6];
    const dobrados = numeros2.map(n => n * 2);

    console.log(dobrados); // [2, 4, 6, 8, 10, 12] (Mesmo tamanho, dados novos)


    const numeros3 = [1, 2, 3, 4, 5, 6];
    const total = numeros3.reduce((acumulador, n) => acumulador + n, 0);

    console.log(total); // 21 (Um único valor final)



    console.log(vetor)
    }

