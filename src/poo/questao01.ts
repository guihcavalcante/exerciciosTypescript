// 1. Classe Bola: Crie uma classe que modele uma bola:
//  Atributos: Cor, circunferência, material
//  Métodos: trocaCor e mostraCor

export function runQuestion1Poo() {
    class Bola {
        private _cor: string
        private _circunferencia: number
        private _material: string

        constructor(cor: string, circunferencia: number, material: string) {
            this._cor = cor
            this._circunferencia = circunferencia
            this._material = material
        }

        public get cor(): string {
            return this._cor
        }

        public set cor(novaCor:string) {
            if(!novaCor.trim()) {
                throw new Error("A cor não pode ser um texto vazio.")
            }

            this._cor = novaCor
        }

        public get circunferencia(): number {
            return this._circunferencia
        }

        public get material(): string {
            return this._material
        }
        
    }

    try {
        
    } catch (error) {
        
    }
}