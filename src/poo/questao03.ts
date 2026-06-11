// 3. Classe Retângulo: Crie uma classe que modele um retângulo:
// A. Atributos: LadoA, LadoB (ou Comprimento e Largura, ou Base e Altura, a escolher)
// B. Métodos:
//  Mudar valor dos lados,
//  Retornar valor dos lados,
//  Calcular Área,
//  Calcular Perímetro.

export function runQuestion3Poo() {
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
}
