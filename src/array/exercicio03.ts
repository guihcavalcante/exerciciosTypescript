// 3. Gerador de Lista de Compras Personalizada
// Sua mãe pediu para você fazer uma lista de compras para o supermercado. Ela quer que você possa
// adicionar itens e a quantidade de cada um.
// Crie uma função chamada gerar_lista_compras() que não recebe argumentos. A função deve:
// ● Permitir que o usuário adicione itens à lista(array) até que ele digite &quot;fim&quot;.
// ● Permitir que o usuário apresente todos os itens da lista.
// ● Permitir que o usuário apresente quantos itens há na lista.
// ● Permitir que o usuário remova itens da lista.

export function runQuestion3Array() {
    interface Compra {
        item: string;
        quantidade: number
    }

    function adicionarItens(listaCompras:Compra[]) {

        while(true) {
            let item = prompt("Informe o item que deseja adicionar [digite fim para encerrar]:")?.toLowerCase() || ""
            if(item === "fim") {
                alert("Encerrando...")
                break
            }

            let quantidade = Number(prompt("Informe a quantidade do item: "))

            if(item === "" || !isNaN(+item) || isNaN(quantidade) || quantidade < 1) {
                alert("Entrada inválida. Tente novamente!")
                continue
            }

            let compra: Compra = {
                item,
                quantidade
            }

            listaCompras.push(compra)
        }
    }

    function apresentarItens(listaCompras:Compra[]) {
        if(listaCompras.length === 0) {
            alert("A lista está vazia!")
            return
        }

        const mensagem = listaCompras
        .map((c) => `- ${c.item}: ${c.quantidade}`)
        .join("\n")

        alert("--- ITENS DA LISTA ---\n" + mensagem)
    }

    function apresentarQuantidadeItens(listaCompras:Compra[]) {
        let totalQuantidade = listaCompras.reduce((ac, at) => ac + at.quantidade, 0)

        alert(`Quantidade de itens da lista: ${listaCompras.length}\nQuantidade de produtos na lista: ${totalQuantidade}`)
    }

    function removerItens(listaCompras:Compra[]) {
        if(listaCompras.length === 0) {
            alert("Não há itens para excluir!")
            return
        }

        let listaAtual = listaCompras.map(c => c.item).join(", ");

        let nomeParaRemover = prompt(`Itens: ${listaAtual}\nQual item deseja excluir?\n`)?.toLowerCase()
        if(!nomeParaRemover) return

        let index = listaCompras.findIndex((c) => c.item.toLowerCase() === nomeParaRemover)

        if(index !== -1) {
            listaCompras.splice(index, 1)
            alert("Item removido com sucesso!")
        } else {
            alert("Item não encontrado na lista!")
        }
    }

    function gerarListaCompras() {
        let listaCompras: Compra[] = []

        while(true) {
            let op = Number(prompt(`GERADOR DE LISTA DE COMPRAS\n1 - Adicionar item\n2 - Ver itens\n3 - Ver quantidade de itens\n4 - Remover item\n5 - Sair\nEscolha:`))

            if(op === 5) {
                alert("Encerrando...")
                break
            }

            if(isNaN(op) || op < 1 || op > 4) {
                alert("Entrada inválida. Tente novamente!")
                continue
            }


            switch(op) {
                case 1:
                    adicionarItens(listaCompras)
                    break
                case 2:
                    apresentarItens(listaCompras)
                    break
                case 3:
                    apresentarQuantidadeItens(listaCompras)
                    break
                case 4:
                    removerItens(listaCompras)
                    break
                default:
                    alert("Opção não encontrada.")
            }

        }

    }

    gerarListaCompras()
}