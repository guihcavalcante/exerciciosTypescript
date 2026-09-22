// 12. Repetição Encapsulamento
// Uma locadora quer controlar os carros disponíveis. O sistema deve solicitar o modelo do carro, o
// valor da diária e a quantidade de dias que o cliente deseja alugar. Crie um método que calcule o valor
// total do aluguel e exiba o resumo da locação. Por fim, o sistema deve perguntar se deseja fazer uma
// nova locação.

export function runQuestion12Poo() {
    class Carro {
        constructor(private _modelo: string, private _valorDiaria: number, private _quantidadeDiasAluguel: number) {}
        
        public get quantidadeDiasAluguel(): number {
            return this._quantidadeDiasAluguel;
        }
        public set quantidadeDiasAluguel(value: number) {
            this._quantidadeDiasAluguel = value;
        }
        public get valorDiaria(): number {
            return this._valorDiaria;
        }
        public set valorDiaria(value: number) {
            this._valorDiaria = value;
        }
        public get modelo(): string {
            return this._modelo;
        }
        public set modelo(value: string) {
            this._modelo = value;
        }

        private formatarParaReal(valor: number) {
            return new Intl.NumberFormat('pt-BR', {
                style: 'currency',
                currency: 'BRL'
            }).format(valor)
        }
        
        public calcularAluguel(): number {
            return this._valorDiaria * this._quantidadeDiasAluguel
        }

        public resumoLocacao() {
            alert(`Modelo: ${this._modelo}\nValor da diária: ${this.formatarParaReal(this._valorDiaria)}\nQuantidade de dias: ${this._quantidadeDiasAluguel}\nValor total do aluguel: ${this.formatarParaReal(this.calcularAluguel())}`)
        }
    }

    function rodarPrograma() {
        let carros: Carro[] = []

        let op = Number(prompt("Deseja fazer uma nova locação? 1 - Sim / 2 - Não"))
        while(op === 1) {
            let modelo = prompt("Qual o modelo do carro: ")?.trim() ?? ""
            if(!modelo || !isNaN(Number(modelo))) {
                alert("Modelo inválido. Tente novamente!")
                continue
            }
            let valorDiaria = Number(prompt("Qual o valor da diária?"))
            if(isNaN(valorDiaria) || valorDiaria <= 0) {
                alert("Entrada inválida. Tente novamente!")
                continue
            }
            let quantDiasAluguel = Number(prompt("Qual a quantidade de dias de aluguel?"))
            if(isNaN(quantDiasAluguel) || quantDiasAluguel <= 0) {
                alert("Entrada inválida. Tente novamente!")
                continue
            }

            let novaLocacao = new Carro(modelo, valorDiaria, quantDiasAluguel)

            carros.push(novaLocacao)

            op = Number(prompt("Deseja fazer uma nova locação? 1 - Sim / 2 - Não"))

        }
        carros.forEach((c) => {
            c.resumoLocacao()
        })
    }

    rodarPrograma()
}