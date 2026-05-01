// 7. Lista de Presença

// 1. Crie um array chamado presenca que aceite apenas strings.
// 2. Adicione 5 nomes de alunos.
// 3. Tente adicionar um número e observe o erro do compilador.
// 4. Use um loop para imprimir cada nome em letras maiúsculas.

export function runQuestion7Array() {
    let presenca: string[] = [];

    presenca.push("Ana");
    presenca.push("Bruno");
    presenca.push("Carla");
    presenca.push("Diego");
    presenca.push("Eduarda");

    // presenca.push(10)

    console.log("--- LISTA DE PRESENÇA (MAIÚSCULAS) ---");
    for (let i = 0; i < presenca.length; i++) {
        console.log(presenca[i].toUpperCase());
    }
}
