// Declaração para o TS não reclamar da biblioteca que injetamos no HTML
declare const ts: any;

const configQuestoes: Record<string, number> = {
    'condicional': 4,
    'repeticao': 5,
    'funcoes': 10,
    'array': 9,
    'poo': 50,
    'exerciciosLista': 10 
};

const PASTA_BASE = './src'; 
const EXTENSAO = '.ts'; 

function navegar(idTelaAlvo: string): void {
    const telas: NodeListOf<Element> = document.querySelectorAll('.tela');
    telas.forEach(tela => tela.classList.add('oculto'));

    const telaAlvo = document.getElementById(idTelaAlvo);
    if (telaAlvo) {
        telaAlvo.classList.remove('oculto');
    }
}

function abrirTopico(nomeDoTopico: string): void {
    const titulo = document.getElementById('titulo-topico-atual') as HTMLHeadingElement;
    const container = document.getElementById('lista-botoes-questoes') as HTMLDivElement;
    
    if (!titulo || !container) return;

    container.innerHTML = ''; 
    titulo.innerText = `Questões de ${nomeDoTopico.toUpperCase()}`;

    const qtdQuestoes = configQuestoes[nomeDoTopico] || 0;
    
    for(let i = 1; i <= qtdQuestoes; i++) {
        const btn = document.createElement('button');
        btn.innerText = `Questão ${i}`;
        btn.onclick = () => abrirEditor(nomeDoTopico, i);
        container.appendChild(btn);
    }

    navegar('tela-questoes');
}

async function abrirEditor(topico: string, numeroQuestao: number): Promise<void> {
    const tituloQuestao = document.getElementById('titulo-questao-atual') as HTMLHeadingElement;
    const editor = document.getElementById('editor-codigo') as HTMLTextAreaElement;
    
    if (tituloQuestao) {
        tituloQuestao.innerText = `${topico.toUpperCase()} - Questão ${numeroQuestao}`;
    }
    
    if (editor) {
        editor.value = "A carregar código..."; 
        
        const numeroFormatado = numeroQuestao.toString().padStart(2, '0');
        const caminhoDoFicheiro = `${PASTA_BASE}/${topico}/questao${numeroFormatado}${EXTENSAO}`;
        
        try {
            const resposta = await fetch(caminhoDoFicheiro);
            
            if (resposta.ok) {
                const codigoTexto = await resposta.text();
                editor.value = codigoTexto;
            } else {
                editor.value = `// Erro: Ficheiro não encontrado.\n// O sistema procurou no caminho: ${caminhoDoFicheiro}`;
            }
        } catch (erro) {
            editor.value = `// Erro de ligação ao tentar ler o ficheiro.`;
        }
    }
    
    navegar('tela-codigo');
}

function rodarCodigo(): void {
    const editor = document.getElementById('editor-codigo') as HTMLTextAreaElement;
    if (!editor) return;

    let codigo: string = editor.value;
    
    // Remove imports/exports que impedem a execução direta
    codigo = codigo.replace(/import .*/g, '').replace(/export .*/g, '');
    
    try {
        // A Mágica: Transforma o TypeScript do editor em JavaScript puro que o navegador entende
        const codigoJavaScript = ts.transpile(codigo);
        
        // Executa o código. Seus alerts e prompts vão aparecer normalmente!
        new Function(codigoJavaScript)();
        
    } catch (erro: unknown) { 
        if (erro instanceof Error) {
            alert("Erro ao executar o código: " + erro.message);
        } else {
            alert("Ocorreu um erro desconhecido.");
        }
    }
}

(window as any).navegar = navegar;
(window as any).abrirTopico = abrirTopico;
(window as any).abrirEditor = abrirEditor;
(window as any).rodarCodigo = rodarCodigo;