// 28. Gestão de Diárias de um Hotel Fazenda
// Um hotel fazenda em Tobias Barreto quer automatizar o cálculo de suas hospedagens. Uma
// acomodação básica possui o número do quarto e o preço base da diária. A Suíte Master possui um
// valor adicional fixo referente ao uso da hidromassagem. O sistema deve interagir com o recepcionista
// perguntando os dados dos quartos e quantos dias o hóspede ficou alojado. O programa calcula o valor
// total devido de cada quarto inserido em uma lista de check-outs. Ao final, utilizando métodos de
// busca ou filtragem, o sistema deve exibir apenas os quartos que faturaram mais de R$ 1.000,00 na
// temporada.

export function runQuestion28Poo() {
    abstract class Hospedagem {
        constructor(private _numeroQuarto: number, private _precoDiaria: number) {}

        protected formatarParaReal(valor: number) {
            return Intl.NumberFormat('pt-BR', {
                style: 'currency',
                currency: 'BRL'
            }).format(valor)
        }
    }

    class HospedagemBasica extends Hospedagem {
        constructor(numQuarto: number, precoDiaria: number) {
            super(numQuarto, precoDiaria)
        }
    }

    class SuiteMaster extends Hospedagem {
        private _valorAdicional: number

        constructor(valorAdicional: number, numQuarto: number, precoDiaria: number) {
            super(numQuarto, precoDiaria)
            this._valorAdicional = valorAdicional
        }
    }
}