// 10. Classe Bichinho Virtual: Crie uma classe que modele um Tamagushi (Bichinho Eletrônico):
// A. Atributos: Nome, Fome, Saúde e Idade
// B. Métodos: Alterar Nome, Fome, Saúde e Idade;
// C. Retornar Nome, Fome, Saúde e Idade
// Obs: Existe mais uma informação que devemos levar em consideração, o Humor do nosso tamagushi,
// este humor é uma combinação entre os atributos Fome e Saúde, ou seja, um campo calculado, então não
// devemos criar um atributo para armazenar esta informação por que ela pode ser calculada a qualquer
// momento.

export function runQuestion10Poo() {
    class Tamagushi {
        private _nome: string
        private _fome: number
        private _saude: number
        private _idade: number

        constructor(nome: string, fome: number, saude: number, idade: number) {
            this._nome = nome
            this._fome = fome
            this._saude = saude
            this._idade = idade
        }

        get nome(): string {
            return this._nome
        }

        get fome(): number {
            return this._fome
        }

        get saude(): number {
            return this._saude
        }

        get idade(): number {
            return this._idade
        }

        set nome(novoNome: string) {
            this._nome = novoNome
        }

        set fome(novaFome: number) {
            this._fome = novaFome
        }

        set saude(novaSaude: number) {
            this._saude = novaSaude
        }

        set idade(novaIdade: number) {
            this._idade = novaIdade
        }

        get humor(): string {
            if (this._saude < 40 || this._fome > 60) {
                return "Triste"
            } else if (this._saude < 70 || this._fome > 30) {
                return "Normal"
            } else {
                return "Feliz"
            }
        }

        public exibirStatus(): void {
            alert(`STATUS DO TAMAGUSHI\n\nNome: ${this._nome}\nIdade: ${this._idade}\nFome: ${this._fome}\nSaude: ${this._saude}\nHumor: ${this.humor}`)
        }
    }

    function rodarPrograma() {
        let nome: string = prompt("Digite o nome do seu Tamagushi: ")?.trim() || "Bichinho"
        let meuBichinho = new Tamagushi(nome, 50, 50, 0)

        while (true) {
            meuBichinho.exibirStatus()

            let acao = Number(prompt("Escolha uma acao:\n1 - Alterar Nome\n2 - Alterar Fome\n3 - Alterar Saude\n4 - Alterar Idade\n5 - Sair"))

            if (acao === 5 || isNaN(acao)) {
                break
            }

            if (acao === 1) {
                let novoNome = prompt("Digite o novo nome: ")?.trim() || ""
                if (!novoNome) {
                    alert("Nome invalido. Tente novamente!")
                    continue
                }
                meuBichinho.nome = novoNome
            } 
            
            else if (acao === 2) {
                let novaFome = Number(prompt("Digite o novo valor de fome: "))
                if (isNaN(novaFome) || novaFome < 0) {
                    alert("Valor de fome invalido. Tente novamente!")
                    continue
                }
                meuBichinho.fome = novaFome
            } 
            
            else if (acao === 3) {
                let novaSaude = Number(prompt("Digite o novo valor de saude: "))
                if (isNaN(novaSaude) || novaSaude < 0) {
                    alert("Valor de saude invalido. Tente novamente!")
                    continue
                }
                meuBichinho.saude = novaSaude
            } 
            
            else if (acao === 4) {
                let novaIdade = Number(prompt("Digite a nova idade: "))
                if (isNaN(novaIdade) || novaIdade < 0) {
                    alert("Idade invalida. Tente novamente!")
                    continue
                }
                meuBichinho.idade = novaIdade
            } 
            
            else {
                alert("Opcao invalida")
            }
        }
    }

    rodarPrograma()
}
