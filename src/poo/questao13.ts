// 13. Repetição Encapsulamento
// Uma escola quer cadastrar alunos e suas notas. O sistema deve solicitar o nome do aluno e duas notas.
// Cada aluno será um objeto. Crie um método que calcule a média e informe se o aluno foi aprovado
// (média >= 7) ou reprovado (caso contrário).

export function runQuestion13Poo() {
    class Aluno {
        constructor(
            private _nome: string, 
            private _nota1: number, 
            private _nota2: number
        ) {}

        public calcularMedia(): number {
            return (this._nota1 + this._nota2) / 2;
        }

        public verificarAprovacao(): void {
            let media = this.calcularMedia();
            let status = media >= 7 ? "Aprovado" : "Reprovado";
            alert(`Aluno: ${this._nome}\nMédia: ${media.toFixed(2)}\nStatus: ${status}`);
        }
    }

    function rodarPrograma() {
        while (true) {
            let nome = prompt("Digite o nome do aluno (ou deixe vazio para sair):")?.trim() ?? "";
            
            if (!nome) {
                break;
            }

            let nota1 = Number(prompt("Digite a primeira nota:"));
            if (isNaN(nota1) || nota1 < 0 || nota1 > 10) {
                alert("Nota inválida. Tente novamente.");
                continue;
            }

            let nota2 = Number(prompt("Digite a segunda nota:"));
            if (isNaN(nota2) || nota2 < 0 || nota2 > 10) {
                alert("Nota inválida. Tente novamente.");
                continue;
            }

            let aluno = new Aluno(nome, nota1, nota2);
            aluno.verificarAprovacao();
        }
    }

    rodarPrograma();
}
