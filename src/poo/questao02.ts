// 2. Classe Quadrado: Crie uma classe que modele um quadrado:
//  Atributos: Tamanho do lado
//  Métodos: Mudar valor do Lado,
//  Retornar valor do Lado e calcular Área;
export function runQuestion2Poo() {
    class Quadrado {
        private _lado!:number

        constructor(lado: number) {
            this.lado = lado
        }

        public set lado(novoLado: number) {
            if(isNaN(novoLado) || novoLado <= 0) {
                throw new Error("perdeu aura com esse erro. -10000 de aura.")
            }
            this._lado = novoLado
        }

        public get lado(): number {
            return this._lado
        }

        public calcularArea(): number {
            return this.lado**2;
        }
    }

}

