// 9. Simulador de Aprovação de Crédito
// Uma loja quer automatizar a análise de crédito de clientes.

//  Função solicitar_renda_mensal(): Pede a renda do usuário. Se o valor for negativo ou zero,
// pede novamente até ser válido.
//  Função analisar_credito(renda, valor_parcela): * A parcela não pode ultrapassar 30% da
// renda.
// i. Se a renda for acima de R$ 5.000,00, o cliente ganha um bônus de R$ 500,00 no
// limite final.
// ii. Retorna true para aprovado ou false para negado.

// Função exibir_status(resultado): Imprime &quot;Crédito Aprovado&quot; ou &quot;Crédito Negado&quot;.
// Peça a renda e o valor da parcela que o cliente deseja pagar, processe e mostre o resultado.

export function runQuestion9Funcao() {

    const solicitar_renda_mensal = (): number => {
        let renda: number;
        do {
            renda = Number(prompt("Informe sua renda mensal:"));
            if (renda <= 0 || isNaN(renda)) {
                alert("Valor inválido! Informe um valor maior que zero.");
            }
        } while (renda <= 0 || isNaN(renda));
        return renda;
    };


    const analisar_credito = (renda: number, valor_parcela: number): boolean => {
        const limiteComprometimento = renda * 0.30;
        
        let margemDisponivel = limiteComprometimento;
        if (renda > 5000) {
            margemDisponivel += 500;
        }

        return valor_parcela <= margemDisponivel;
    };


    const exibir_status = (resultado: boolean): void => {
        if (resultado) {
            console.log("Crédito Aprovado");
        } else {
            console.log("Crédito Negado");
        }
    };


    const rendaCliente = solicitar_renda_mensal();
    const valorParcelaDesejada = Number(prompt("Informe o valor da parcela que deseja pagar:"));

    const aprovado = analisar_credito(rendaCliente, valorParcelaDesejada);
    exibir_status(aprovado);

}