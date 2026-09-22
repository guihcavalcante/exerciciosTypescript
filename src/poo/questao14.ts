// 14. Arrays Repetição Encapsulamento
// Uma biblioteca precisa catalogar seus livros. Crie uma classe Livro com título, autor, ano de
// publicação e disponibilidade (boolean). O programa deve permitir cadastrar até 15 livros via teclado,
// listar todos os disponíveis e registrar o empréstimo de um livro pesquisado pelo título.

export function runQuestion14Poo() {
    class Livro {
        constructor(
            private _titulo: string,
            private _autor: string,
            private _anoPublicacao: number,
            private _disponibilidade: boolean = true
        ) {}

        public get titulo(): string {
            return this._titulo;
        }

        public get disponibilidade(): boolean {
            return this._disponibilidade;
        }

        public emprestar(): void {
            if (this._disponibilidade) {
                this._disponibilidade = false;
                alert(`Livro '${this._titulo}' emprestado com sucesso!`);
            } else {
                alert(`O livro '${this._titulo}' já está emprestado no momento.`);
            }
        }

        public exibirInfo(): string {
            return `${this._titulo} - ${this._autor} (${this._anoPublicacao})`;
        }
    }

    function rodarPrograma() {
        let livros: Livro[] = [];
        let qtdCadastro = Number(prompt("Quantos livros deseja cadastrar? (Máx 15)") ?? 0);
        
        if (isNaN(qtdCadastro) || qtdCadastro <= 0 || qtdCadastro > 15) {
            alert("Quantidade inválida.");
            return; 
        }

        for (let i = 0; i < qtdCadastro; i++) {
            let titulo = prompt(`Título do livro ${i + 1}:`)?.trim() ?? "";
            let autor = prompt(`Autor do livro ${i + 1}:`)?.trim() ?? "";
            let ano = Number(prompt(`Ano de publicação do livro ${i + 1}:`));

            if (!titulo || !autor || isNaN(ano)) {
                alert("Dados inválidos. Preencha novamente.");
                i--; 
                continue;
            }

            livros.push(new Livro(titulo, autor, ano));
        }

        let livrosDisponiveis = livros
            .filter(l => l.disponibilidade)
            .map(l => l.exibirInfo())
            .join("\n");
            
        alert(`LIVROS DISPONÍVEIS:\n${livrosDisponiveis || "Nenhum livro disponível no momento."}`);

        let busca = prompt("Digite o título do livro que deseja pegar emprestado:")?.trim() ?? "";
        if (busca) {
            let livroEncontrado = livros.find(l => l.titulo.toLowerCase() === busca.toLowerCase());
            
            if (livroEncontrado) {
                livroEncontrado.emprestar();
            } else {
                alert("Livro não encontrado no catálogo.");
            }
        }
    }

    rodarPrograma();
}
