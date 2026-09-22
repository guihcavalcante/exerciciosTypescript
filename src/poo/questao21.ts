// Abstração Herança Polimorfismo Repetição Encapsulamento Arrays
// Concurso de Projetos de Extensão Reforest
// O projeto socioambiental "Flor&Ser" abriu inscrições para novas propostas de reflorestamento no campus. Cada projeto inscrito possui título, coordenador e uma nota de avaliação avaliada de forma estrita (protegida por métodos de validação para que não receba valores fora do intervalo de 0 a 10). Existem Projetos Verdes (focados em plantio urbano) e Projetos Culturais (focados em conscientização). O usuário deve preencher a lista de projetos avaliados através do terminal. O programa deve calcular a média aritmética de todas as notas usando estruturas de array e, em seguida, listar de forma inversa à inscrição quais projetos ganharam nota acima da média da competição.[cite: 1]

export function runQuestion21Poo() {
    abstract class Projeto {
        private _nota: number = 0;

        constructor(
            private _titulo: string,
            private _coordenador: string
        ) {}

        public get titulo(): string {
            return this._titulo;
        }

        public get nota(): number {
            return this._nota;
        }

        public set nota(valor: number) {
            if (valor >= 0 && valor <= 10) {
                this._nota = valor;
            } else {
                throw new Error("A nota deve estar estritamente entre 0 e 10.");
            }
        }

        abstract get categoria(): string;
    }

    class ProjetoVerde extends Projeto {
        public get categoria(): string {
            return "Plantio Urbano (Verde)";
        }
    }

    class ProjetoCultural extends Projeto {
        public get categoria(): string {
            return "Conscientização (Cultural)";
        }
    }

    function rodarPrograma() {
        let projetos: Projeto[] = [];

        while (true) {
            let tipo = prompt("Inscrever Projeto:\n1 - Verde\n2 - Cultural\n0 - Encerrar inscrições")?.trim();
            if (tipo === "0" || !tipo) break;

            let titulo = prompt("Título do projeto:")?.trim() ?? "";
            let coordenador = prompt("Coordenador:")?.trim() ?? "";
            
            if (!titulo || !coordenador) {
                alert("Dados inválidos.");
                continue;
            }

            let notaInput = Number(prompt("Nota do projeto (0 a 10):"));
            if (isNaN(notaInput)) {
                alert("Nota inválida.");
                continue;
            }

            let novoProjeto: Projeto;
            
            if (tipo === "1") {
                novoProjeto = new ProjetoVerde(titulo, coordenador);
            } else if (tipo === "2") {
                novoProjeto = new ProjetoCultural(titulo, coordenador);
            } else {
                alert("Opção inválida.");
                continue;
            }

            try {
                novoProjeto.nota = notaInput;
                projetos.push(novoProjeto);
            } catch (error: any) {
                alert(error.message);
            }
        }

        if (projetos.length > 0) {
            let somaNotas = projetos.reduce((acc, p) => acc + p.nota, 0);
            let media = somaNotas / projetos.length;

            let aprovados = projetos.filter(p => p.nota > media).reverse();

            let relatorio = `--- RESULTADO DO CONCURSO ---\nMédia da Competição: ${media.toFixed(2)}\n\nProjetos Acima da Média:\n`;
            
            if (aprovados.length > 0) {
                aprovados.forEach(p => {
                    relatorio += `- ${p.titulo} [${p.categoria}] | Nota: ${p.nota.toFixed(1)}\n`;
                });
            } else {
                relatorio += "Nenhum projeto superou a média.";
            }

            alert(relatorio);
        } else {
            alert("Nenhum projeto inscrito.");
        }
    }

    rodarPrograma();
}