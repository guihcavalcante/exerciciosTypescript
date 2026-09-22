// Cadastro de Produtos de um Supermercado com Desconto Progressivo
// Um mercado de atacado precisa atualizar os preços de suas mercadorias nas prateleiras. Todo produto possui código, nome e preço de custo ocultados do acesso externo direto. Os Produtos Perecíveis possuem uma data de validade e recebem um desconto de 30% caso estejam no dia do vencimento. Os Produtos Não Perecíveis não sofrem alteração de valor. O sistema deve interagir com o gerente para listar os produtos do estoque. Após preencher o estoque (array), o programa deve rodar um loop que simula a passagem do caixa, aplicando as regras de desconto conforme o tipo do produto e exibindo o valor final que o cliente pagará.[cite: 1]

export function runQuestion23Poo() {
    abstract class Produto {
        constructor(
            private _codigo: string,
            private _nome: string,
            private _precoCusto: number
        ) {}

        public get codigo(): string {
            return this._codigo;
        }

        public get nome(): string {
            return this._nome;
        }

        protected get precoCusto(): number {
            return this._precoCusto;
        }

        abstract calcularPrecoVenda(vencendoHoje: boolean): number;
    }

    class ProdutoPerecivel extends Produto {
        constructor(codigo: string, nome: string, precoCusto: number, private _dataValidade: string) {
            super(codigo, nome, precoCusto);
        }

        public calcularPrecoVenda(vencendoHoje: boolean): number {
            if (vencendoHoje) {
                return this.precoCusto * 0.70; 
            }
            return this.precoCusto;
        }
    }

    class ProdutoNaoPerecivel extends Produto {
        constructor(codigo: string, nome: string, precoCusto: number) {
            super(codigo, nome, precoCusto);
        }

        public calcularPrecoVenda(vencendoHoje: boolean): number {
            return this.precoCusto;
        }
    }

    function rodarPrograma() {
        let estoque: Produto[] = [];

        while (true) {
            let tipo = prompt("Cadastrar Estoque:\n1 - Produto Perecível\n2 - Produto Não Perecível\n0 - Ir para o Caixa")?.trim();
            if (tipo === "0" || !tipo) break;

            let codigo = prompt("Código do produto:")?.trim() ?? "";
            let nome = prompt("Nome do produto:")?.trim() ?? "";
            let preco = Number(prompt("Preço de custo:"));

            if (!codigo || !nome || isNaN(preco) || preco < 0) {
                alert("Dados inválidos.");
                continue;
            }

            if (tipo === "1") {
                let validade = prompt("Data de validade (DD/MM/AAAA):")?.trim() ?? "";
                estoque.push(new ProdutoPerecivel(codigo, nome, preco, validade));
            } else if (tipo === "2") {
                estoque.push(new ProdutoNaoPerecivel(codigo, nome, preco));
            } else {
                alert("Opção inválida.");
            }
        }

        let totalCompra = 0;
        let cupomFiscal = "--- CUPOM FISCAL ---\n";

        while (true) {
            let codBusca = prompt("--- CAIXA ---\nDigite o código do produto (ou 0 para finalizar compra):")?.trim() ?? "";
            if (codBusca === "0" || !codBusca) break;

            let produto = estoque.find(p => p.codigo === codBusca);

            if (produto) {
                let vencendoHojeStr = prompt(`O produto ${produto.nome} está vencendo hoje? (S/N):`)?.trim().toUpperCase();
                let vencendoHoje = vencendoHojeStr === "S";

                let valorFinal = produto.calcularPrecoVenda(vencendoHoje);
                totalCompra += valorFinal;

                cupomFiscal += `${produto.nome} - R$ ${valorFinal.toFixed(2)}\n`;
                alert(`Adicionado: ${produto.nome} | Valor cobrado: R$ ${valorFinal.toFixed(2)}`);
            } else {
                alert("Produto não encontrado no estoque.");
            }
        }

        if (totalCompra > 0) {
            cupomFiscal += `--------------------\nTOTAL A PAGAR: R$ ${totalCompra.toFixed(2)}`;
            alert(cupomFiscal);
        } else {
            alert("Nenhuma compra realizada no caixa.");
        }
    }

    rodarPrograma();
}