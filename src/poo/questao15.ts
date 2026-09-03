abstract class FuncionarioEmpresa {
    constructor(public nome: string) {}
    abstract calcularSalario(): number;
}

class FuncionarioHorista extends FuncionarioEmpresa {
    horasTrabalhadas: number;
    salarioPorHora: number;

    constructor(nome: string, horasTrabalhadas: number, salarioPorHora: number) {
        super(nome);
        this.horasTrabalhadas = horasTrabalhadas;
        this.salarioPorHora = salarioPorHora;
    }

    calcularSalario(): number {
        return this.horasTrabalhadas * this.salarioPorHora;
    }
}

class FuncionarioAssalariado extends FuncionarioEmpresa {
    salarioFixo: number;

    constructor(nome: string, salarioFixo: number) {
        super(nome);
        this.salarioFixo = salarioFixo;
    }

    calcularSalario(): number {
        return this.salarioFixo;
    }
}

function executarPrograma(): FuncionarioEmpresa | undefined {
    let nome = prompt("Qual o nome o funcionário?") || "Indefinido";
    let tipo = Number(prompt("Qual o tipo de funcionário? 1 - Horista | 2 - Assalariado"));

    if (tipo === 1) {
        let horasTrabalhadas = Number(prompt("Qual a quantidade de horas trabalhadas?"));
        let salarioPorHora = Number(prompt("Qual o salário por hora?"));
        return new FuncionarioHorista(nome, horasTrabalhadas, salarioPorHora);
    } else if (tipo === 2) {
        let salarioFixo = Number(prompt("Qual o salário fixo?"));
        return new FuncionarioAssalariado(nome, salarioFixo);
    } else {
        return undefined;
    }
}

let funcionarios: FuncionarioEmpresa[] = [];

let novoFuncionario = executarPrograma();

if (novoFuncionario === undefined) {
    alert("Entrada inválida!");
} else {
    funcionarios.push(novoFuncionario);
    
    console.log(`Funcionário: ${funcionarios[0].nome}`);
    console.log(`Salário: R$ ${funcionarios[0].calcularSalario().toFixed(2)}`);
}
