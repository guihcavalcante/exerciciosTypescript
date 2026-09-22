// Abstração Herança Polimorfismo Repetição Encapsulamento Arrays
// Gerenciador de Tarefas e Produtividade Acadêmica
// Para ajudar os alunos a não perderem prazos, monte um gerenciador de tarefas. Uma tarefa genérica possui uma descrição e o status de concluída (booleano). Uma Tarefa Acadêmica inclui o nome da disciplina associada, enquanto uma Tarefa Pessoal inclui o nível de prioridade. O programa deve abrir um menu para o estudante inserir suas tarefas diárias. O sistema armazena tudo em um array unificado. Através da interação, o usuário pode escolher marcar uma tarefa como concluída ou listar apenas as tarefas acadêmicas pendentes, utilizando a lógica de filtragem de propriedades dos objetos contidos na lista.[cite: 1]

export function runQuestion24Poo() {
    abstract class Tarefa {
        constructor(
            private _descricao: string,
            private _concluida: boolean = false
        ) {}

        public get descricao(): string {
            return this._descricao;
        }

        public get concluida(): boolean {
            return this._concluida;
        }

        public marcarComoConcluida(): void {
            this._concluida = true;
        }

        abstract detalharTarefa(): string;
    }

    class TarefaAcademica extends Tarefa {
        constructor(descricao: string, private _disciplina: string) {
            super(descricao);
        }

        public get disciplina(): string {
            return this._disciplina;
        }

        public detalharTarefa(): string {
            return `[Acadêmica] ${this.descricao} (Disciplina: ${this._disciplina})`;
        }
    }

    class TarefaPessoal extends Tarefa {
        constructor(descricao: string, private _prioridade: string) {
            super(descricao);
        }

        public detalharTarefa(): string {
            return `[Pessoal] ${this.descricao} (Prioridade: ${this._prioridade})`;
        }
    }

    function rodarPrograma() {
        let tarefas: Tarefa[] = [];

        while (true) {
            let menu = prompt(
                "--- GERENCIADOR DE TAREFAS ---\n" +
                "1 - Nova Tarefa Acadêmica\n" +
                "2 - Nova Tarefa Pessoal\n" +
                "3 - Marcar Tarefa como Concluída\n" +
                "4 - Listar Tarefas Acadêmicas Pendentes\n" +
                "0 - Sair"
            )?.trim();

            if (menu === "0" || !menu) break;

            if (menu === "1" || menu === "2") {
                let desc = prompt("Descrição da tarefa:")?.trim() ?? "";
                if (!desc) {
                    alert("Descrição não pode ser vazia.");
                    continue;
                }

                if (menu === "1") {
                    let disciplina = prompt("Nome da disciplina:")?.trim() ?? "";
                    tarefas.push(new TarefaAcademica(desc, disciplina));
                } else {
                    let prioridade = prompt("Nível de prioridade (Alta/Média/Baixa):")?.trim() ?? "";
                    tarefas.push(new TarefaPessoal(desc, prioridade));
                }
                alert("Tarefa cadastrada com sucesso!");
            } 
            
            else if (menu === "3") {
                let pendentes = tarefas.filter(t => !t.concluida);
                if (pendentes.length === 0) {
                    alert("Não há tarefas pendentes!");
                    continue;
                }

                let listaTexto = pendentes.map((t, index) => `${index} - ${t.descricao}`).join("\n");
                let esc = Number(prompt(`Qual tarefa deseja concluir?\n\n${listaTexto}`));

                if (!isNaN(esc) && esc >= 0 && esc < pendentes.length) {
                    pendentes[esc].marcarComoConcluida();
                    alert("Tarefa marcada como concluída!");
                } else {
                    alert("Índice inválido.");
                }
            } 
            
            else if (menu === "4") {
                let academicasPendentes = tarefas.filter(t => t instanceof TarefaAcademica && !t.concluida);
                
                if (academicasPendentes.length > 0) {
                    let lista = "--- TAREFAS ACADÊMICAS PENDENTES ---\n\n";
                    academicasPendentes.forEach(t => {
                        lista += t.detalharTarefa() + "\n";
                    });
                    alert(lista);
                } else {
                    alert("Nenhuma tarefa acadêmica pendente no momento.");
                }
            } 
            
            else {
                alert("Opção inválida.");
            }
        }
    }

    rodarPrograma();
}