// Abstração Herança Polimorfismo Repetição Encapsulamento Arrays
// Gestão de Pedidos de uma Pizzaria Local
// Para modernizar o atendimento de uma pizzaria, crie um sistema de pedidos. Um pedido base tem o número da mesa e o valor dos ingredientes. O Pedido de Entrega (Delivery) herda as propriedades do pedido base, mas precisa incluir uma taxa de entrega protegida e o endereço de destino. O software deve interagir com o atendente perguntando os detalhes de cada pedido feito na noite. Conforme os pedidos são criados, eles entram em um array de controle. Ao fechar o caixa, o sistema percorre a lista de pedidos, calcula os valores finais de cada um (aplicando as taxas quando necessário) e exibe o faturamento total do estabelecimento.[cite: 1]

export function runQuestion20Poo() {
    class Pedido {
        constructor(
            private _identificador: string,
            private _valorIngredientes: number
        ) {}

        protected get valorIngredientes(): number {
            return this._valorIngredientes;
        }

        public get identificador(): string {
            return this._identificador;
        }

        public calcularValorFinal(): number {
            return this.valorIngredientes;
        }
    }

    class PedidoEntrega extends Pedido {
        constructor(
            identificador: string,
            valorIngredientes: number,
            private _enderecoDestino: string,
            protected _taxaEntrega: number
        ) {
            super(identificador, valorIngredientes);
        }

        public calcularValorFinal(): number {
            return this.valorIngredientes + this._taxaEntrega;
        }
    }

    function rodarPrograma() {
        let pedidos: Pedido[] = [];

        while (true) {
            let tipo = prompt("Novo Pedido:\n1 - Local (Mesa)\n2 - Delivery\n0 - Fechar Caixa")?.trim();
            if (tipo === "0" || !tipo) break;

            let identificador = prompt(tipo === "1" ? "Número da mesa:" : "Nome do cliente:")?.trim() ?? "";
            let valor = Number(prompt("Valor dos ingredientes:"));

            if (!identificador || isNaN(valor) || valor < 0) {
                alert("Dados inválidos.");
                continue;
            }

            if (tipo === "1") {
                pedidos.push(new Pedido(identificador, valor));
            } else if (tipo === "2") {
                let endereco = prompt("Endereço de destino:")?.trim() ?? "";
                let taxa = Number(prompt("Taxa de entrega:"));

                if (!endereco || isNaN(taxa) || taxa < 0) {
                    alert("Dados de entrega inválidos.");
                    continue;
                }
                pedidos.push(new PedidoEntrega(identificador, valor, endereco, taxa));
            } else {
                alert("Opção inválida.");
            }
        }

        if (pedidos.length > 0) {
            let faturamentoTotal = 0;
            let resumo = "--- FECHAMENTO DE CAIXA ---\n";

            pedidos.forEach(p => {
                let valorFinal = p.calcularValorFinal();
                faturamentoTotal += valorFinal;
                resumo += `Pedido ${p.identificador}: R$ ${valorFinal.toFixed(2)}\n`;
            });

            resumo += `\nFaturamento Total: R$ ${faturamentoTotal.toFixed(2)}`;
            alert(resumo);
        } else {
            alert("Nenhum pedido registrado.");
        }
    }

    rodarPrograma();
}