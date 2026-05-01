// 8. Controle de Estoque de Loja (Loop e Relatório)
// Faça um programa que gerencie a entrada de produtos em um estoque. O programa deve solicitar o
// preço unitário do produto e a quantidade comprada.
//  Crie uma função que recebe preço e quantidade. Se a quantidade for maior que 10 unidades,
// aplica 5% de desconto sobre o valor total daquele item. Retorna o valor final.
//  O programa deve repetir a solicitação até que o preço informado seja zero.
//  Ao encerrar, exiba o total geral investido no estoque e a média de preço dos produtos
// cadastrados.

export function runQuestion8Funcao() {

    const calcularValorItem = (preco: number, quantidade: number): number => {
        let total = preco * quantidade;
        if (quantidade > 10) {
            total *= 0.95;
        }
        return total;
    };

    let totalGeral = 0;
    let somaPrecosUnitarios = 0;
    let contadorProdutos = 0;

    while (true) {
        const preco = Number(prompt("Digite o preço do produto (ou 0 para sair):"));

    
        if (preco === 0 || isNaN(preco)) break;

        const quantidade = Number(prompt("Digite a quantidade comprada:"));

        
        const valorFinalItem = calcularValorItem(preco, quantidade);
        totalGeral += valorFinalItem;
        somaPrecosUnitarios += preco;
        contadorProdutos++;

        console.log(`Item adicionado: R$ ${valorFinalItem.toFixed(2)}`);
    }


    if (contadorProdutos > 0) {
        const mediaPrecos = somaPrecosUnitarios / contadorProdutos;
        console.log("\n--- Relatório de Estoque ---");
        console.log(`Total geral investido: R$ ${totalGeral.toFixed(2)}`);
        console.log(`Média de preço dos produtos: R$ ${mediaPrecos.toFixed(2)}`);
    } else {
        console.log("Nenhum produto cadastrado.");
    }

}