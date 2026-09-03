// 4. Crie um programa que utilize a classe acima. Ele deve pedir ao usuário que informe as medidas de um
// local. Depois, deve criar um objeto com as medidas e calcular a quantidade de pisos e de rodapés
// necessárias para o local.

export function runQuestion4Poo() {
    class Retangulo {
        private _base: number
        private _altura: number

        constructor(base: number, altura: number) {
            this.validarLado(base, "Base")
            this.validarLado(altura, "Altura")

            this._base = base
            this._altura = altura
        }

        private validarLado(lado: number, nomeLado: string) {
            if(typeof lado !== 'number' || isNaN(lado) || lado <= 0) {
                throw new Error(`${nomeLado} inválido! O valor deve ser um número maior do que 0.`)
            }
        }

        public set base(novaBase: number) {
            this.validarLado(novaBase, "Base")

            this._base = novaBase
        }

        public set altura(novaAltura: number) {
            this.validarLado(novaAltura, "Altura")

            this._altura = novaAltura
        }

        public get base(): number {
            return this._base
        }

        public get altura(): number {
            return this._altura
        }

        public area(): number {
            return this._base * this._altura
        }

        public perimetro(): number {
            return 2 * (this._base + this._altura)
        }
    }

    function iniciarPrograma() {
        try {
            let larguraLocal = Number(prompt("Informe a largura do local: "))
            let comprimentoLocal = Number(prompt("Informe o comprimento do local: "))

            let larguraPiso = Number(prompt("Informe a largura do piso: "))
            let comprimentoPiso = Number(prompt("Informe o comprimento do piso: "))

            let objetoLocal = new Retangulo(larguraLocal, comprimentoLocal)
            let objetoPiso = new Retangulo(larguraPiso, comprimentoPiso)

            let tamanhoTotalLocal = objetoLocal.area()
            let tamanhoTotalPiso = objetoPiso.area()

            let pisosNecessarios = Math.ceil(tamanhoTotalLocal / tamanhoTotalPiso)

            let perimetroLocal = objetoLocal.perimetro()

            let rodapesNecessarios = Math.ceil(perimetroLocal / objetoPiso.base)

            alert(`Pisos necessários: ${pisosNecessarios}`)
            alert(`Rodapés necessários: ${rodapesNecessarios}`)
        } catch(error) {
            console.error((error as Error).message)
        }
    }

    iniciarPrograma()
}