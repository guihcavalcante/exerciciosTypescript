// 4. Calculadora de Média do ENEM
// Um professor de cursinho pré-ENEM precisa de uma ferramenta para calcular a média de seus
// alunos em diferentes disciplinas. Ele quer que a média seja arredondada para duas casas decimais.
// Crie uma função chamada calcular_media(notas) que receba um array de notas como argumento.
// A função deve:
// ● Calcular a média das notas.
// ● Arredondar a média para duas casas decimais.
// ● Retornar o valor da média.

export function runQuestion4Array() {

    function calcular_media(notas: number[]): number {
        let soma = 0;
        for (let i = 0; i < notas.length; i++) {
            soma += notas[i];
        }
        let media = soma / notas.length;
        return Number(media.toFixed(2));
    }

    let notasInput = prompt("Digite as notas separadas por vírgula (ex: 8.5, 7, 10):");
    
    if (notasInput) {
        let arrayNotas = notasInput.split(",").map(n => Number(n.trim()));
        
        let resultado = calcular_media(arrayNotas);
        alert("A média arredondada do aluno é: " + resultado);
    }
}
