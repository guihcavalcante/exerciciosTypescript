// 3. Classe Retângulo: Crie uma classe que modele um retângulo:
// A. Atributos: LadoA, LadoB (ou Comprimento e Largura, ou Base e Altura, a escolher)
// B. Métodos:
//  Mudar valor dos lados,
//  Retornar/apresentar valor dos lados,

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
            if (typeof lado !== 'number' || isNaN(lado) || lado <= 0) {
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

        public get ladoA(): number {
            return this._base
        }

        public set ladoA(novoLadoA: number) {
            this.base = novoLadoA
        }

        public get ladoB(): number {
            return this._altura
        }

        public set ladoB(novoLadoB: number) {
            this.altura = novoLadoB
        }

        public area(): number {
            return this._base * this._altura
        }

        public perimetro(): number {
            return 2 * (this._base + this._altura)
        }

        public calcularArea(): number {
            return this.area()
        }

        public calcularPerimetro(): number {
            return this.perimetro()
        }
    }

    console.log("=== QUESTÃO 3: CLASSE RETÂNGULO ===");

    const retangulo = new Retangulo(5, 10);
    console.log(`Valores iniciais -> Lado A: ${retangulo.ladoA} | Lado B: ${retangulo.ladoB}`);
    console.log(`Área calculada: ${retangulo.calcularArea()}`);
    console.log(`Perímetro calculado: ${retangulo.calcularPerimetro()}`);

    retangulo.ladoA = 8;
    retangulo.ladoB = 4;
    console.log(`\nValores alterados -> Lado A: ${retangulo.ladoA} | Lado B: ${retangulo.ladoB}`);
    console.log(`Nova Área calculada: ${retangulo.calcularArea()}`);
    console.log(`Novo Perímetro calculado: ${retangulo.calcularPerimetro()}`);
    console.log("===================================\n");
