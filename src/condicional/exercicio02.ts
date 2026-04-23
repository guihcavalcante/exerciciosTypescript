// 2. Crie um programa chamado Estações. Este programa deve ler uma data e armazenar na
// variável mês, um número entre 1 e 12, correspondendo a um dos meses do ano. No final,
// você deve imprimir uma mensagem conforme o exemplo: &quot;A estação do ano correspondente
// ao mês 3 é Verão&quot; Considere a estação prevalente para cada mês:
// a) Janeiro (1): Verão
// b) Fevereiro (2): Verão
// c) Março (3): Verão
// d) Abril (4): Outono
// e) Maio (5): Outono
// f) Junho (6): Outono
// g) Julho (7): Inverno
// h) Agosto (8): Inverno
// i) Setembro (9): Inverno
// j) Outubro (10): Primavera
// k) Novembro (11): Primavera
// l) Dezembro (12): Primavera

export function runQuestion2Condicional() {

    let data:number

    while (true) {
        data = Number(prompt("Informe o mês [1 a 12]: "))

        if(isNaN(data)) {
            alert("Entrada inválida. Tente novamente!")
            continue
        }

        if(data < 1 || data > 12) {
            alert("Entrada inválida. Tente novamente!")
            continue
        }

        break
    }
    
    switch(data) {
        case 1:
            console.log("A estação do ano correspondente ao mês 1 é Verão!")
            break
        case 2:
            console.log("A estação do ano correspondente ao mês 2 é Verão!")
            break
        case 3:
            console.log("A estação do ano correspondente ao mês 3 é Verão!")
            break
        case 4:
            console.log("A estação do ano correspondente ao mês 4 é Outono!")
            break
        case 5:
            console.log("A estação do ano correspondente ao mês 5 é Outono!")
            break
        case 6:
            console.log("A estação do ano correspondente ao mês 6 é Outono!")
            break
        case 7:
            console.log("A estação do ano correspondente ao mês 7 é Inverno!")
            break
        case 8:
            console.log("A estação do ano correspondente ao mês 8 é Inverno!")
            break
        case 9:
            console.log("A estação do ano correspondente ao mês 9 é Inverno!")
            break
        case 10:
            console.log("A estação do ano correspondente ao mês 10 é Primavera!")
            break
        case 11:
            console.log("A estação do ano correspondente ao mês 11 é Primavera!")
            break
        case 12:
            console.log("A estação do ano correspondente ao mês 12 é Primavera!")
            break
        default:
            console.log("Entrada inválida!")
    }

}
