// 31. O projeto socioambiental &quot;Flor&amp;Ser&quot; abriu inscrições para propostas de reflorestamento no campus do IFS Tobias
// Barreto. Crie a superclasse Projeto com os atributos privados titulo, coordenador e nota. O setter setNota(valor)
// deve validar estritamente o intervalo de 0 a 10, lançando exceção ou mensagem de erro para valores inválidos. As
// subclasses ProjetoVerde (plantio urbano) e ProjetoCultural (conscientização) sobrescrevem o método
// descricaoCategoria() com textos distintos. O usuário preenche os projetos pelo terminal. O programa calcula a
// média das notas e, ao final, exibe os projetos com nota acima da média, mostrando a categoria de cada um via
// polimorfismo.
// Requisitos mínimos:
// • nota privada com validação estrita no setter (0 ≤ nota ≤ 10).
// • descricaoCategoria() abstrato/sobrescrito em ProjetoVerde e ProjetoCultural.
// • Cálculo de média com laço sobre os projetos cadastrados.
// • Filtro e exibição dos projetos acima da média.
// • Chamada polimórfica a descricaoCategoria() na exibição final.

abstract class Projeto {
    private _titulo: string;
    private _coordenador: string;
    private _nota: number=0;

    constructor(titulo: string, coordenador: string, nota: number) {
        this._titulo = titulo;
        this._coordenador = coordenador;
        this.nota = nota;
    }

    public set nota(valor: number) {
        if (valor < 0 || valor > 10) {
            throw new Error("Nota deve ser entre 0 e 10.");
        }
        this._nota = valor;
    }

    public get nota(): number {
        return this._nota;
    }

    public get titulo(): string {
        return this._titulo
    }

    public get coordenador(): string {
        return this._coordenador
    }

    public abstract descricaoCategoria(): string;
}

class ProjetoVerde extends Projeto {
    constructor(titulo: string, coordenador: string, nota: number) {
        super(titulo, coordenador, nota);
    }

    public descricaoCategoria(): string {
        return "Projeto de plantio urbano.";
    }
}

class ProjetoCultural extends Projeto {
    constructor(titulo: string, coordenador: string, nota: number) {
        super(titulo, coordenador, nota);
    }

    public descricaoCategoria(): string {
        return "Projeto de conscientização cultural.";
    }
}

function rodarSistemaProjeto() {
    let continuar = true
    let projetos:Projeto[] = []

    while(continuar) {
        let tipo = Number(prompt("Informe o tipo de projeto:\n1 - Projeto Verde\n2 - Projeto Cultural"))
        let titulo = prompt("Informe o título do projeto:")
        let coordenador = prompt("Informe o nome do coordenador: ")
        let nota = Number(prompt("Informe a nota de 1 a 10 para o projeto: "))

        if(tipo < 1 || tipo > 2 || !titulo || !coordenador || isNaN(nota)) {
            alert("Entrada inválida. Tente novamente!")
            continue
        }

        try {
            if(tipo === 1) {
                let novoProjeto = new ProjetoVerde(titulo, coordenador, nota)
                projetos.push(novoProjeto)
            } else {
                let novoProjeto = new ProjetoCultural(titulo, coordenador, nota)
                projetos.push(novoProjeto)
            }
        } catch(error) {
            alert((error as Error).message)
            continue
        }  

        let op = prompt("Deseja continuar? S/N")?.toUpperCase()
        continuar = op === "S"? true : false
    }

    if (projetos.length === 0) {
        console.log("Nenhum projeto cadastrado.")
        return
    }

    let somaNotas = projetos.reduce((acumulador, atual) => atual.nota + acumulador, 0)
    let mediaNotas = somaNotas / projetos.length

    console.log(`Soma das notas: ${somaNotas}\nMédia das notas: ${mediaNotas}`)

    projetos.forEach((projeto) => {
        if(projeto.nota > mediaNotas) {
            console.log(projeto.titulo + " está acima da média")
            console.log("Categoria: " + projeto.descricaoCategoria())
        }
    })
}

rodarSistemaProjeto()