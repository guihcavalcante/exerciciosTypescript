// Classe Retângulo: Crie uma classe que modele um retângulo:
// A. Atributos: LadoA, LadoB (ou Comprimento e Largura, ou Base e Altura, a escolher)
// B. Métodos:
//  Mudar valor dos lados,
//  Retornar/apresentar valor dos lados,
//  Calcular Área,
//  Calcular Perímetro.

export function runQuestion3Poo() {
    class Retangulo {
        private _ladoA: number
        private _ladoB: number

        constructor(ladoA: number, ladoB: number) {
            this._ladoA = ladoA
            this._ladoB = ladoB
        }

        public get ladoA(): number {
            return this._ladoA
        }

        public get ladoB(): number {
            return this._ladoB
        }

        public set ladoA(novoLadoA: number) {
            if (novoLadoA > 0) this._ladoA = novoLadoA
        }

        public set ladoB(novoLadoB: number) {
            if (novoLadoB > 0) this._ladoB = novoLadoB
        }

        public calcularArea(): number {
            return this._ladoA * this._ladoB
        }

        public calcularPerimetro(): number {
            return 2 * (this._ladoA + this._ladoB)
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
}