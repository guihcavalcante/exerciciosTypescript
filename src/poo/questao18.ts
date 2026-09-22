// 18. Abstração Herança Polimorfismo Repetição Encapsulamento
// Folha de Pagamento Unificada do IFS
// O setor de Recursos Humanos do IFS necessita de um novo software para gerenciar e calcular a folha salarial... (resumo: FuncionarioBase, Professor (+20% se DE), TecnicoAdministrativo (+1000 auxílio), Diretor (+ gratificação). Exibir relatórios com totais por categoria).

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