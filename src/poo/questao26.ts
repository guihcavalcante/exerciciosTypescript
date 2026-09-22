// 26. Simulador de Contas Bancárias Cooperativas
// Uma cooperativa de crédito local precisa de um protótipo para gerenciar contas de clientes. A conta
// deve ter o nome do titular e o saldo protegido, acessível apenas por métodos de depósito e saque.
// Existem dois tipos de contas: a Conta Corrente (que cobra uma taxa de R$ 2,00 a cada saque) e a
// Conta Poupança (que possui um método de rendimento que acrescenta 1% ao saldo atual). O
// programa deve interagir com o usuário perguntando qual conta ele deseja movimentar, solicitando
// valores para depósito e saque através de um menu repetitivo até que ele decida sair, exibindo o saldo
// atualizado de forma protegida após cada operação.

export function runQuestion26Poo() {
    abstract class Conta {
        constructor(
            private _titular: string,
            protected _saldo: number = 0
        ) {}

        public get titular(): string {
            return this._titular;
        }

        public get saldo(): number {
            return this._saldo;
        }

        public depositar(valor: number): void {
            if (valor > 0) {
                this._saldo += valor;
                alert(`Depósito de R$ ${valor.toFixed(2)} realizado com sucesso!`);
            } else {
                alert("Valor de depósito inválido.");
            }
        }

        abstract sacar(valor: number): void;
    }

    class ContaCorrente extends Conta {
        private readonly TAXA_SAQUE = 2.00;

        public sacar(valor: number): void {
            let valorTotal = valor + this.TAXA_SAQUE;
            if (valor > 0 && this._saldo >= valorTotal) {
                this._saldo -= valorTotal;
                alert(`Saque de R$ ${valor.toFixed(2)} realizado. Taxa cobrada: R$ ${this.TAXA_SAQUE.toFixed(2)}`);
            } else {
                alert("Saldo insuficiente ou valor inválido para saque.");
            }
        }
    }

    class ContaPoupanca extends Conta {
        public sacar(valor: number): void {
            if (valor > 0 && this._saldo >= valor) {
                this._saldo -= valor;
                alert(`Saque de R$ ${valor.toFixed(2)} realizado com sucesso! Sem taxas.`);
            } else {
                alert("Saldo insuficiente ou valor inválido para saque.");
            }
        }

        public aplicarRendimento(): void {
            let rendimento = this._saldo * 0.01;
            this._saldo += rendimento;
            alert(`Rendimento de 1% aplicado! Mais R$ ${rendimento.toFixed(2)} na conta.`);
        }
    }

    function rodarPrograma() {
        let titular = prompt("Criando sua conta...\nQual o nome do titular?")?.trim() ?? "";
        if (!titular) return;

        let tipoConta = prompt("Escolha o tipo de conta:\n1 - Conta Corrente\n2 - Conta Poupança")?.trim();
        let contaAtiva: Conta;

        if (tipoConta === "1") {
            contaAtiva = new ContaCorrente(titular);
        } else if (tipoConta === "2") {
            contaAtiva = new ContaPoupanca(titular);
        } else {
            alert("Tipo inválido. Encerrando.");
            return;
        }

        while (true) {
            let menu = prompt(
                `--- CAIXA ELETRÔNICO ---\n` +
                `Titular: ${contaAtiva.titular} | Saldo Atual: R$ ${contaAtiva.saldo.toFixed(2)}\n\n` +
                `1 - Depositar\n` +
                `2 - Sacar\n` +
                (contaAtiva instanceof ContaPoupanca ? `3 - Aplicar Rendimento Mensal (1%)\n` : "") +
                `0 - Sair`
            )?.trim();

            if (menu === "0" || !menu) break;

            if (menu === "1") {
                let valor = Number(prompt("Valor do depósito:"));
                if (!isNaN(valor)) contaAtiva.depositar(valor);
            } 
            else if (menu === "2") {
                let valor = Number(prompt("Valor do saque:"));
                if (!isNaN(valor)) contaAtiva.sacar(valor);
            } 
            else if (menu === "3" && contaAtiva instanceof ContaPoupanca) {
                contaAtiva.aplicarRendimento();
            } 
            else {
                alert("Opção inválida.");
            }
        }
    }

    rodarPrograma();
}