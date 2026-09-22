// 17. Abstração Herança Polimorfismo Repetição Encapsulamento Arrays
// Controle de Frequência do Refeitório do IFS
// O Refeitório do IFS deseja controlar o acesso de seus usuários. Todo usuário possui um identificador
// numérico interno e o nome completo. Os usuários dividem-se em Alunos (que possuem o curso) e
// Servidores (que possuem o departamento). O sistema deve pedir para o operador cadastrar os usuários
// que estão na fila. Cada vez que um usuário passa pela catraca, um método deve registrar essa presença
// em um histórico (array). Ao digitar um comando de encerramento, o programa exibe a listagem de
// quem almoçou no dia, mostrando mensagens personalizadas para cada tipo de usuário através de um
// método comum de identificação, além de exibir a quantidade total de acessos de alunos e servidores.

export function runQuestion17Poo() {
    abstract class UsuarioRefeitorio {
        constructor(
            private _id: number,
            private _nome: string
        ) {}

        public get id(): number {
            return this._id;
        }

        public get nome(): string {
            return this._nome;
        }

        abstract gerarMensagemAcesso(): string;
    }

    class Aluno extends UsuarioRefeitorio {
        constructor(id: number, nome: string, private _curso: string) {
            super(id, nome);
        }

        public gerarMensagemAcesso(): string {
            return `Aluno(a) ${this.nome} do curso de ${this._curso} acessou o refeitório.`;
        }
    }

    class Servidor extends UsuarioRefeitorio {
        constructor(id: number, nome: string, private _departamento: string) {
            super(id, nome);
        }

        public gerarMensagemAcesso(): string {
            return `Servidor(a) ${this.nome} do departamento ${this._departamento} acessou o refeitório.`;
        }
    }

    function rodarPrograma() {
        let historicoAcessos: UsuarioRefeitorio[] = [];
        let totalAlunos = 0;
        let totalServidores = 0;

        while (true) {
            let opcao = prompt("Cadastrar acesso:\n1 - Aluno\n2 - Servidor\n0 - Encerrar")?.trim();

            if (opcao === "0" || !opcao) {
                break;
            }

            let id = Number(prompt("Digite o ID (Matrícula):"));
            let nome = prompt("Digite o nome completo:")?.trim() ?? "";

            if (isNaN(id) || !nome) {
                alert("Dados inválidos. Tente novamente.");
                continue;
            }

            if (opcao === "1") {
                let curso = prompt("Digite o curso:")?.trim() ?? "";
                historicoAcessos.push(new Aluno(id, nome, curso));
                totalAlunos++;
            } else if (opcao === "2") {
                let departamento = prompt("Digite o departamento:")?.trim() ?? "";
                historicoAcessos.push(new Servidor(id, nome, departamento));
                totalServidores++;
            } else {
                alert("Opção inválida!");
            }
        }

        if (historicoAcessos.length > 0) {
            let relatorio = "--- RELATÓRIO DE ACESSOS ---\n\n";
            
            historicoAcessos.forEach((usuario) => {
                relatorio += usuario.gerarMensagemAcesso() + "\n";
            });

            relatorio += `\nTotal de Alunos: ${totalAlunos}`;
            relatorio += `\nTotal de Servidores: ${totalServidores}`;
            relatorio += `\nTotal Geral: ${historicoAcessos.length}`;

            alert(relatorio);
        } else {
            alert("Nenhum acesso registrado no dia.");
        }
    }

    rodarPrograma();
}