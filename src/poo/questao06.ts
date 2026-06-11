// 6. Classe Conta Corrente: Crie uma classe para implementar uma conta corrente. A classe deve possuir
// os seguintes atributos: número da conta, nome do correntista e saldo. Os métodos são os seguintes:
// alterarNome, depósito e saque. No construtor, saldo é opcional, com valor default zero e os demais
// atributos são obrigatórios. Por fim, faça com que esse sistema interaja com o usuário permitido que
// ele, depois de cadastrar as suas informações, possa usar os métodos disponíveis.

export function runQuestion6Poo() {
    class ContaCorrente {
        private _numeroConta: number
        private _nomeCorrentista: string
        private _saldo: number

        constructor(numeroConta: number, nomeCorrentista: string, saldo: number) {
            this.validarNumeroConta(numeroConta)
            this.validarNome(nomeCorrentista)
            this.validarSaldo(saldo)

            this._numeroConta = numeroConta
            this._nomeCorrentista = nomeCorrentista
            this._saldo = saldo
        }

        private validarNumeroConta(numeroConta: number) {
            if(typeof numeroConta !== 'number' || numeroConta <= 0) {
                throw new Error("Número da conta é inválido!")
            }
        }

        private validarNome(nome: string) {
            if(typeof nome !== 'string' || nome.trim().length === 0) {
                throw new Error("Nome do correntista é inválido!")
            }
        }

        private validarSaldo(saldo: number) {
            if(typeof saldo !== 'number' || saldo < 0) {
                throw new Error("Saldo é inválido!")
            }
        }

        get numeroConta(): number {return this._numeroConta}
        get nomeCorrentista(): string {return this._nomeCorrentista}
        get saldo(): number {return this._saldo}

        public alterarNome(novoNome: string) {
            this.validarNome(novoNome)

            this._nomeCorrentista = novoNome
        }

        public deposito(quantidade: number) {
            this.validarSaldo(quantidade)

            this._saldo += quantidade
        }

        public saque(quantidade: number) {
            if(typeof quantidade !== 'number' || quantidade > this._saldo || quantidade <= 0) {
                throw new Error("Quantidade de saque inválido!")
            }
        }
    }
}