// 7. Uma empresa quer cadastrar funcionários e aplicar aumento salarial. O sistema deve pedir nome,
// cargo e salário. Crie um método que receba um percentual de aumento e atualize o salário do
// funcionário, exibindo o seu nome e novo valor.

export function runQuestion7Poo() {
    class Funcionario {
        private _nome: string
        private _cargo: string
        private _salario: number

        constructor(nome: string, cargo: string, salario: number) {
            this._nome = nome
            this._cargo = cargo
            this._salario = salario
        }

        get nome(): string {
            return this._nome
        }

        get cargo(): string {
            return this._cargo
        }

        get salario(): number {
            return this._salario
        }

        set nome(novoNome: string) {
            this._nome = novoNome
        }

        set cargo(novoCargo: string) {
            this._cargo = novoCargo
        }

        set salario(novoSalario: number) {
            this._salario = novoSalario
        }

        public aumento(porcentagem: number) {
            this._salario += this._salario * (porcentagem / 100)
            alert(`Novo salário: ${this._salario}`)
        }

        public resumo(): any {
            alert(`Nome: ${this._nome}\nCargo: ${this._cargo}\nSalário: R$${this.salario.toFixed(2)}`)
        }
    }
    let funcionario = new Funcionario("Guilherme", "CEO", 5000)
    funcionario.aumento(50)
    funcionario.resumo()
}