// 9. Uma loja deseja controlar seu estoque de produtos. O sistema deve pedir ao usuário o nome do
// produto, o preço e a quantidade em estoque. Cada produto deve ser representado por um objeto. Crie
// um método que calcule o valor total em estoque (preço × quantidade) e exiba essa informação para
// cada produto.

export function runQuestion9Poo() {
    class Produto {
        private _nome: string
        
        private _preco: number
        
        private _quantidade: number
        
        constructor(nome: string, preco: number, quantidade: number) {
            this._nome = nome
            this._preco = preco
            this._quantidade = quantidade
        }

        public get nome(): string {
            return this._nome
        }
        public set nome(value: string) {
            this._nome = value
        }

        public get preco(): number {
            return this._preco
        }
        public set preco(value: number) {
            this._preco = value
        }

        public get quantidade(): number {
            return this._quantidade
        }
        public set quantidade(value: number) {
            this._quantidade = value
        }

        public calcularValorTotal(): number {
            return this._preco * this._quantidade
        }

        public exibirResumo(): void {
            alert(`Produto: ${this._nome}\nPreço: ${this._preco}\nQuantidade: ${this._quantidade}\nValor total em estoque: ${this.formatarParaReal(this.calcularValorTotal())}`)
        }

        private formatarParaReal(valor: number): string {
        return new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL'
        }).format(valor)
    }
    }

    function rodarPrograma() {
        let produtos:Produto[] = []
        while(true) {
            let nome: string = prompt("Digite o nome do produto: ")?.trim() || ""
            let preco: number = Number(prompt("Digite o preço do produto: "))
            let estoque: number = Number(prompt("Digite o estoque do produto: "))

            if(isNaN(estoque) || estoque < 0) {
                alert("Estoque inválido. Tente novamente!")
                continue
            }

            if(!nome) {
                alert("Nome inválido. Tente novamente!")
                continue
            }

            if(isNaN(preco) || preco <= 0) {
                alert("Preço inválido. Tente novamente!")
                continue
            }

            let novoProduto = new Produto(nome, preco, estoque)

            produtos.push(novoProduto)

            let choice = Number(prompt("Adicionar mais produtos?\n1 - Sim\n2 - Não"))

            if(choice === 2) {
                break
            } else {
                continue
            }
        }

        produtos.forEach((p) => {
            p.exibirResumo()
        })
    }

    rodarPrograma()
}