// 5. Organizador de Tarefas Diárias
// Você quer organizar suas tarefas de casa e da escola para não esquecer nada. Crie uma função
// chamada gerenciar_tarefas() que não receba argumentos. A função deve:
// a) Permitir que o usuário adicione tarefas a um vetor.
// b) Permitir que o usuário marque tarefas como concluídas (removendo-as da lista, por
// exemplo).
// c) Permitir que o usuário exiba todas as tarefas pendentes.
// Utilize um menu interativo com opções (adicionar, concluir, exibir, sair) e um laço while para
// manter o programa rodando até o usuário escolher sair.

export function runQuestion5Array() {
    let tarefas: string[] = [];

    while (true) {
        let op = prompt("1-Adicionar, 2-Concluir, 3-Exibir, 4-Sair");

        if (op === "1") {
            let t = prompt("Nova tarefa:");
            if (t) tarefas.push(t);
        } else if (op === "2") {
            let index = Number(prompt(`Índice para remover (0 a ${tarefas.length - 1}):`));
            if (!isNaN(index)) tarefas.splice(index, 1);
        } else if (op === "3") {
            alert(tarefas.length > 0 ? tarefas.join("\n") : "Vazio");
        } else if (op === "4") {
            break;
        }
    }
}
