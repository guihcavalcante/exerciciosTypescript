// 8. Uma empresa precisa de um sistema simples para cadastrar seus funcionários. O sistema deve solicitar
// ao usuário o nome, o cargo e o salário de vários funcionários. Para cada funcionário cadastrado, deve
// ser criado um objeto que armazene essas informações. Ao final, o sistema deve exibir um resumo de
// todos os funcionários cadastrados, utilizando um método da classe.

export function runQuestion8Poo() {
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
            this.cargo = novoCargo
        }

        set salario(novoSalario: number) {
            this._salario = novoSalario
        }

        public exibirResumo(): any {
            alert(`${"=".repeat(5)} RESUMO ${"=".repeat(5)}\nNome: ${this._nome}\nCargo: ${this._cargo}\nSalário: R$${this._salario}`)
        }
    }

    function rodarPrograma() {
        let funcionarios:Funcionario[] = []
        while(true) {
            let nome: string = prompt("Digite o nome do funcionário: ") || ""
            let cargo: string = prompt("Digite o cargo do funcionário: ") || ""
            let salario: number = Number(prompt("Digite o salário do funcionário: "))

            if(isNaN(salario) || salario <= 0) {
                alert("Salário inválido. Tente novamente!")
                continue
            }

            if(typeof nome !== 'string') {
                alert("Nome inválido. Tente novamente!")
                continue
            }

            if(typeof cargo !== 'string') {
                alert("Cargo inválido. Tente novamente!")
                continue
            }

            let novoFuncionario = new Funcionario(nome, cargo, salario)

            funcionarios.push(novoFuncionario)

            let choice = Number(prompt("Adicionar mais funcionários?\n1 - Sim\n2 - Não"))

            if(choice === 2) {
                break
            } else {
                continue
            }
        }

        funcionarios.forEach((f) => {
            alert(f.exibirResumo())
        })
    }

    rodarPrograma()
}