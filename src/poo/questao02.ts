// 2. Classe Quadrado: Crie uma classe que modele um quadrado:
//  Atributos: Tamanho do lado
//  Métodos: Mudar valor do Lado,
//  Retornar valor do Lado e calcular Área;
export function runQuestion2Poo() {
    class Quadrado {
        private _lado:number

        constructor(lado: number) {
            this.validarLado(lado)
            this._lado = lado
        }

        private validarLado(lado: number) {
            if(isNaN(lado) || lado <= 0) {
                throw new Error("O lado é inválido.")
            }
        }

        public set lado(novoLado: number) {
            this.validarLado(novoLado)
            this._lado = novoLado
        }


        public get lado(): number {
            return this._lado
        }

        public calcularArea(): number {
            return this._lado**2;
        }
    }

    try {
        const novoQuadrado = new Quadrado(5)

        console.log(novoQuadrado.calcularArea())
        novoQuadrado.lado = 4
        console.log(novoQuadrado.calcularArea())
    } catch(error) {
        console.error((error as Error).message)
    }   
    
}



