// 18. Abstração Herança Polimorfismo Repetição Encapsulamento
// Folha de Pagamento Unificada do IFS
// O setor de Recursos Humanos do IFS necessita de um novo software para gerenciar e calcular a folha
// salarial mensal de seus colaboradores. Sabe-se que todos os colaboradores do instituto possuem
// características fundamentais em comum: um nome, uma matrícula e um salário base. Por questões de
// segurança, esses três dados não podem ser acessados diretamente de fora da classe, exigindo métodos
// públicos específicos para sua leitura e modificação. Além disso, a classe base deve conter um método
// para calcular o salário, que por padrão retorna apenas o valor do salário base.

// No entanto, o IFS possui três categorias distintas de funcionários, que herdam as características da
// classe base, mas possuem regras próprias para o cálculo da remuneração final. A primeira categoria é
// a de Professor, que possui como atributo privado o seu regime de trabalho (por exemplo, &quot;DE&quot; para
// Dedicação Exclusiva); caso o regime seja &quot;DE&quot;, o professor recebe um acréscimo de 20% sobre o seu
// salário base no momento do cálculo salarial. A segunda categoria é a de Técnico Administrativo, que
// possui um atributo privado para armazenar o valor fixo de um auxílio-alimentação de R$ 1.000,00,
// valor este que deve ser somado ao seu salário base no cálculo final. A terceira categoria é a de Diretor,
// que possui como atributos privados o seu departamento e o valor de uma gratificação de função, que
// também deve ser incorporada ao salário base no cálculo de sua remuneração.
// Para o funcionamento do sistema, o programa deve rodar dentro de um laço de repetição contínuo que
// interaja com o usuário. A cada iteração, o software deve perguntar qual tipo de funcionário se deseja
// cadastrar (Professor, Técnico Administrativo ou Diretor) ou se o usuário deseja encerrar o programa.
// Conforme a escolha, o sistema deve solicitar os dados do colaborador via teclado, inseri-los no objeto
// correto e acionar o método de cálculo salarial específico de cada um de forma polimórfica. O
// programa deve utilizar variáveis acumuladoras dentro do laço para somar e acompanhar os custos
// parciais de cada categoria. Por fim, quando o usuário optar por encerrar o cadastro, o laço deve ser
// interrompido e o software exibirá um relatório final contendo o custo total gasto com os professores, o
// custo total com os técnicos administrativos, o custo total com os diretores e, por último, o custo total
// geral que a instituição terá com a folha de pagamento daquele mês.

export function runQuestion18Poo() {
    abstract class Colaborador {
        constructor(
            private _nome: string,
            private _matricula: string,
            private _salarioBase: number
        ) {}

        public get nome(): string {
            return this._nome;
        }

        public get matricula(): string {
            return this._matricula;
        }

        protected get salarioBase(): number {
            return this._salarioBase;
        }

        public calcularSalario(): number {
            return this._salarioBase;
        }
    }

    class Professor extends Colaborador {
        constructor(nome: string, matricula: string, salarioBase: number, private _regimeTrabalho: string) {
            super(nome, matricula, salarioBase);
        }

        public calcularSalario(): number {
            let salario = this.salarioBase;
            if (this._regimeTrabalho.toUpperCase() === "DE") {
                salario += this.salarioBase * 0.20;
            }
            return salario;
        }
    }

    class TecnicoAdministrativo extends Colaborador {
        private _auxilioAlimentacao: number = 1000.00;

        constructor(nome: string, matricula: string, salarioBase: number) {
            super(nome, matricula, salarioBase);
        }

        public calcularSalario(): number {
            return this.salarioBase + this._auxilioAlimentacao;
        }
    }

    class Diretor extends Colaborador {
        constructor(
            nome: string, 
            matricula: string, 
            salarioBase: number, 
            private _departamento: string, 
            private _gratificacaoFuncao: number
        ) {
            super(nome, matricula, salarioBase);
        }

        public calcularSalario(): number {
            return this.salarioBase + this._gratificacaoFuncao;
        }
    }

    function formatarMoeda(valor: number): string {
        return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(valor);
    }

    function rodarPrograma() {
        let custoProfessores = 0;
        let custoTecnicos = 0;
        let custoDiretores = 0;

        while (true) {
            let opcao = prompt("Cadastrar funcionário:\n1 - Professor\n2 - Técnico Administrativo\n3 - Diretor\n0 - Encerrar")?.trim();

            if (opcao === "0" || !opcao) {
                break;
            }

            let nome = prompt("Nome:")?.trim() ?? "";
            let matricula = prompt("Matrícula:")?.trim() ?? "";
            let salarioBase = Number(prompt("Salário Base:"));

            if (!nome || !matricula || isNaN(salarioBase) || salarioBase <= 0) {
                alert("Dados básicos inválidos. Tente novamente.");
                continue;
            }

            if (opcao === "1") {
                let regime = prompt("Regime de trabalho (Digite DE para Dedicação Exclusiva ou outro para comum):")?.trim() ?? "";
                let prof = new Professor(nome, matricula, salarioBase, regime);
                custoProfessores += prof.calcularSalario();
            } 
            else if (opcao === "2") {
                let tec = new TecnicoAdministrativo(nome, matricula, salarioBase);
                custoTecnicos += tec.calcularSalario();
            } 
            else if (opcao === "3") {
                let depto = prompt("Departamento:")?.trim() ?? "";
                let gratificacao = Number(prompt("Valor da gratificação de função:"));
                
                if (isNaN(gratificacao) || gratificacao < 0) {
                    alert("Gratificação inválida.");
                    continue;
                }

                let dir = new Diretor(nome, matricula, salarioBase, depto, gratificacao);
                custoDiretores += dir.calcularSalario();
            } 
            else {
                alert("Opção inválida!");
            }
        }

        let custoTotalGeral = custoProfessores + custoTecnicos + custoDiretores;

        let relatorio = "--- RELATÓRIO DE FOLHA DE PAGAMENTO ---\n\n";
        relatorio += `Custo com Professores: ${formatarMoeda(custoProfessores)}\n`;
        relatorio += `Custo com Técnicos: ${formatarMoeda(custoTecnicos)}\n`;
        relatorio += `Custo com Diretores: ${formatarMoeda(custoDiretores)}\n`;
        relatorio += `--------------------------------------\n`;
        relatorio += `CUSTO TOTAL GERAL: ${formatarMoeda(custoTotalGeral)}`;

        alert(relatorio);
    }

    rodarPrograma();
}