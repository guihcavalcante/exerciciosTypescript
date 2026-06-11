// 5. Classe Pessoa: Crie uma classe que modele uma pessoa:
// 1. Atributos: nome, idade, peso e altura
// 2. Métodos: Envelhecer, engordar, emagrecer, crescer.
// Obs: Por padrão, a cada ano que nossa pessoa envelhece, sendo a idade dela menor que 21 anos,
// ela deve crescer 0,5 cm.

export function runQuestion5Poo() {
    class Pessoa {
        private _nome: string
        private _idade: number
        private _peso: number
        private _altura: number

        constructor(nome: string, idade: number, peso: number, altura: number) {
            this.validarNome(nome)
            this.validarIdade(idade)
            this.validarPeso(peso)
            this.validarAltura(altura)

            this._nome = nome
            this._idade = idade
            this._peso = peso
            this._altura = altura
        }

        private validarNome(nome: string) {
            if(typeof nome !== 'string' || nome.trim().length === 0) {
                throw new Error("Nome inválido!")
            }
        }

        private validarIdade(idade: number) {
            if(typeof idade !== 'number' || idade < 0) {
                throw new Error("Idade inválida!")
            }
        }

        private validarPeso(peso: number) {
            if(typeof peso !== 'number' || peso <= 0) {
                throw new Error("Peso inválido!")
            }
        }

        private validarAltura(altura: number) {
            if(typeof altura !== 'number' || altura <= 0) {
                throw new Error("Altura inválida!")
            }
        }

        get nome(): string {
            return this._nome
        }

        get idade(): number {
            return this._idade
        }
        
        get peso(): number {
            return this._peso
        }

        get altura(): number {
            return this._altura
        }

        public envelhecer() {
            if(this._idade < 21) {
                this._altura += 0.005
            }
            
            this._idade++
        }

        public engordar(quantidade: number) {
            this.validarPeso(quantidade)
            
            this._peso += quantidade
        }

        public emagrecer(quantidade: number) {
            this.validarPeso(quantidade)
            if(quantidade >= this._peso) {
                throw new Error("O peso deve ser menor que o seu peso atual!")
            }

            this._peso -= quantidade
        }

        public crescer(quantidade: number) {
            this.validarAltura(quantidade)

            this._altura += quantidade
        }
    }

    try {
        const novaPessoa = new Pessoa("Guilherme", 16, 79, 1.76)
        novaPessoa.envelhecer()
        console.log(`Idade: ${novaPessoa.idade}`)
        console.log(`Altura: ${novaPessoa.altura}`)
    } catch(error) {
        console.error((error as Error).message)
    }
}