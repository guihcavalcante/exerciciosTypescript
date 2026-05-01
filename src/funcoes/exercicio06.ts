// 6. Faça um programa para o cálculo de uma folha de pagamento fictício, sabendo que os
// descontos são do Imposto de Renda, que depende do salário bruto (conforme tabela abaixo),
// 3% para o Sindicato, 6% de vale transporte, 8% de vale alimentação, 10% do INSS e o FGTS
// que corresponde a 11% do Salário Bruto, mas não é descontado (é a empresa que deposita).

// O Salário Líquido corresponde ao Salário Bruto menos os descontos. O programa deverá
// pedir ao usuário o valor da sua hora e a quantidade de horas trabalhadas no mês.
// Desconto do IR:
// 1. Salário Bruto até R$ 2428,80 (inclusive) - isento
// 2. Salário Bruto de R$ 2.428,81 a R$ 2.826,65 (inclusive) - desconto de 7,5%
// 3. Salário Bruto de R$ 2.826,66 a R$ 3.751,05 (inclusive) - desconto de 15%
// 4. Salário Bruto de R$ 3.751,06 a R$ 4.664,68 (inclusive) - desconto de 22,5%
// 5. Salário Bruto acima de R$4664,68 - desconto de 27,5%.
// Imprima na tela as informações, dispostas conforme o exemplo abaixo. No exemplo o valor da hora
// é R$15,00 e a quantidade de horas é 220.
// Exemplo: Salário Bruto: (15 * 220)       : R$ 3300,00
//   (-) IR (15%)                      : R$  495,00  
//   (-) INSS (10%)                  : R$  330,00
// (-) SINDICATO (3%)                  : R$   99,00
// (-) V. ALIMENTAÇÃO (8%)              : R$  264,00
// (-) V. TRANSPORTE (6%)               : R$  198,00
//   FGTS (11%)                       : R$  121,00
//   Total de descontos               : R$  1386,00
//   Salário Líquido                 : R$  1914,00

export function runQuestion6Funcao() {
    function lerSalario() {
        let valorHora:number, horasTrabalhadas:number

        while(true) {
            valorHora = Number(prompt("Informe o valor da sua hora:"))
            horasTrabalhadas = Number(prompt("Informe a quantidade de horas trabalhadas no mês: "))

            if(isNaN(valorHora) || isNaN(horasTrabalhadas) || valorHora < 1 || horasTrabalhadas < 0) {
                alert("Entrada inválida. Tente novamente!")
                continue
            }

            break
        }

        return valorHora * horasTrabalhadas
    }

    function gerarImpostoDeRenda(salario:number) {
        let desconto:number

        if(salario > 4664.68) {
            desconto = 27.5
        } else if(salario >= 3751.06 && salario <= 4664.68) {
            desconto = 22.5
        } else if(salario >= 2826.66 && salario <= 3751.05) {
            desconto = 15
        } else if(salario >= 2428.81 && salario <= 2826.65) {
            desconto = 7.5
        } else {
            desconto = 0
        }

        let ir = salario * (desconto / 100)
        let inss = salario * 0.1
        let sindicato = salario * 0.03
        let valeAlimentação = salario * 0.08
        let valeTransporte = salario * 0.06
        let fgts = salario * 0.11
        let totalImpostos = ir + inss + sindicato + valeAlimentação + valeTransporte
        let salarioLiquido = salario - totalImpostos

        return {
            descontoIr: desconto,
            ir: ir,
            inss: inss,
            sindicato: sindicato,
            valeAlimentação: valeAlimentação,
            valeTransporte: valeTransporte,
            fgts: fgts,
            totalImpostos: totalImpostos,
            salarioLiquido: salarioLiquido
        }
    }

    let salario = lerSalario()
    let mapaImpostos = gerarImpostoDeRenda(salario)

    const formatarMoeda = (v:number) => v.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})

    const imprimirLinha = (label:string, valor:number) => {
        console.log(`${label.padEnd(30)} : ${formatarMoeda(valor)}`)
    }

    console.log(`--- CONTRACHEQUE ---`)
    imprimirLinha(`Salário Bruto`, salario)

    imprimirLinha(`(-) IR (${mapaImpostos.descontoIr}%)`,mapaImpostos.ir)
    imprimirLinha(`(-) INSS (10%)`, mapaImpostos.inss)
    imprimirLinha(`(-) SINDICATO (3%)`, mapaImpostos.sindicato)
    imprimirLinha(`(-) V. ALIMENTAÇÃO (8%)`, mapaImpostos.valeAlimentação)
    imprimirLinha(`(-) V. TRANSPORTE (6%)`, mapaImpostos.valeTransporte)
    
    console.log("-".repeat(45))
    imprimirLinha(`FGTS (11%)`, mapaImpostos.fgts)
    imprimirLinha(`Total de descontos`, mapaImpostos.totalImpostos)
    imprimirLinha(`Salário Líquido`, mapaImpostos.salarioLiquido)
    
}