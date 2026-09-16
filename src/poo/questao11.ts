// 11. Encapsulamento
// Uma lanchonete quer registrar pedidos dos clientes. O sistema deve solicitar o nome do cliente, o
// nome do pedido e o valor. Crie um método que exiba o resumo do pedido e o valor total.

export function runQuestion11Poo() {
    class Pedido {
        private _nomeCliente: string
        private _nomePedido: string
        private _valor: number

        constructor(nomeCliente: string, nomePedido: string, valor: number) {
            this._nomeCliente = nomeCliente
            this._nomePedido = nomePedido
            this._valor = valor
        }

        private formatarParaReal(valor: number) {
            return new Intl.NumberFormat('pt-BR' ,{
                style: 'currency',
                currency: 'BRL',
            }).format(valor)
        }

        public resumo() {
            alert(`${"*".repeat(8)} RESUMO ${"*".repeat(8)}\nNome do cliente: ${this._nomeCliente}\nNome do pedido: ${this._nomePedido}\nValor: ${this.formatarParaReal(this._valor)}`)
        }
    }

    let nomeCliente = prompt("Qual o nome do cliente: ") || "Indefinido"
    let nomePedido = prompt("Qual o nome do pedido: ") || "Indefinido"
    let valor = Number(prompt("Qual o valor do pedido: "))

    let novoPedido = new Pedido(nomeCliente, nomePedido, valor)

    novoPedido.resumo()
}