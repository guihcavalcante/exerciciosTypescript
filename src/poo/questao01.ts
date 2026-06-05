// 1. Classe Bola: Crie uma classe que modele uma bola:
//  Atributos: Cor, circunferência, material
//  Métodos: trocaCor e mostraCor

export function runQuestion1Poo() {
    class Bola {
        private _cor: string
        private _circunferencia: number
        private _material: string

        constructor(cor: string, circunferencia: number, material: string) {
            this.validarCor(cor)
            this.validarCircunferencia(circunferencia)

            this._cor = cor
            this._circunferencia = circunferencia
            this._material = material
        }

        private validarCor(cor: string): void {
            if (!cor?.trim()) {
                throw new Error("A cor não pode ser um texto vazio.")
            }
        }

        private validarCircunferencia(valor: number): void {
            if (isNaN(valor) || valor <= 0) {
                throw new Error("A circunferência deve ser maior que zero.")
            }
        }

        public get cor(): string {
            return this._cor
        }

        public set cor(novaCor:string) {
            this.validarCor(novaCor)

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
        const novaBola = new Bola("Azul", 60, "Couro")

        console.log(`Circunferência: ${novaBola.circunferencia}`)
        novaBola.cor = "Verde"
        console.log(`Nova cor: ${novaBola.cor}`)
    } catch (error) {
        console.error((error as Error).message)
    }
}