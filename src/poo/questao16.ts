// 16. Abstração Herança Polimorfismo Repetição Encapsulamento Arrays
// Um zoológico possui mamíferos e aves. Ambos têm nome, espécie, idade e sexo todos privados.
// Mamíferos têm tipo de alimentação (ex: &quot;Carnívoro&quot;, &quot;Herbívoro”, ...). Para as aves precisa-se saber
// se são migratórias ou não. Cada animal tem um comportamento de ‘emitir som’ e ‘mover’ diferente.
// O Método &quot;Hora da Alimentação&quot; (Rotina Polimórfica): Crie uma função ou método executável
// chamado simularHoraAlimentacao(listaAnimais: Animal[]). Esse método deve percorrer o array de
// animais com um laço de repetição, imprimindo o nome do animal sendo alimentado pelo tratador e
// acionando o seu método emitirSom()
// Fluxo do Programa: O sistema deve cadastrar vários animais, listar por tipo (Mamíferos ou Aves) e
// ao final a disparar a rotina simularHoraAlimentacao() chamando o método de som de cada um.

export function runQuestion16Poo() {
    abstract class Animal {
        constructor(
            private _nome: string,
            private _especie: string,
            private _idade: number,
            private _sexo: string
        ) {}

        public get nome(): string {
            return this._nome;
        }
        
        public get especie(): string {
            return this._especie;
        }

        // Adendo: Métodos abstratos são "contratos". As classes filhas SÃO OBRIGADAS a ter isso.
        abstract emitirSom(): void;
        abstract mover(): void;
    }

    class Mamifero extends Animal {
        constructor(
            nome: string, especie: string, idade: number, sexo: string,
            private _tipoAlimentacao: string
        ) {
            super(nome, especie, idade, sexo);
        }

        emitirSom(): void {
            console.log(`[Mamífero] ${this.nome} faz um barulho no chão!`);
        }

        mover(): void {
            console.log(`[Mamífero] ${this.nome} está andando/correndo.`);
        }
    }

    class Ave extends Animal {
        constructor(
            nome: string, especie: string, idade: number, sexo: string,
            private _migratoria: boolean
        ) {
            super(nome, especie, idade, sexo);
        }

        emitirSom(): void {
            console.log(`[Ave] ${this.nome} canta bem alto!`);
        }

        mover(): void {
            console.log(`[Ave] ${this.nome} voou para perto.`);
        }
    }

    // Rotina Polimórfica que o enunciado pede
    function simularHoraAlimentacao(listaAnimais: Animal[]) {
        console.log("\n--- HORA DA ALIMENTAÇÃO ---");
        listaAnimais.forEach(animal => {
            console.log(`O tratador alimentou: ${animal.nome} (${animal.especie})`);
            animal.emitirSom();
        });
    }

    function rodarPrograma() {
        let animais: Animal[] = [];

        while (true) {
            let tipo = prompt("Cadastrar: 1 - Mamífero / 2 - Ave / 3 - Sair");
            if (tipo === "3" || !tipo) break;

            let nome = prompt("Nome:")?.trim() ?? "";
            let especie = prompt("Espécie:")?.trim() ?? "";
            let idade = Number(prompt("Idade:"));
            let sexo = prompt("Sexo (M/F):")?.trim() ?? "";

            if (!nome || !especie || isNaN(idade) || !sexo) {
                alert("Dados inválidos, tenta de novo.");
                continue;
            }

            if (tipo === "1") {
                let alimentacao = prompt("Tipo de alimentação (Carnívoro/Herbívoro):")?.trim() ?? "";
                animais.push(new Mamifero(nome, especie, idade, sexo, alimentacao));
            } else if (tipo === "2") {
                let migratoriaStr = prompt("A ave é migratória? (S/N):")?.trim().toUpperCase();
                let migratoria = migratoriaStr === "S";
                animais.push(new Ave(nome, especie, idade, sexo, migratoria));
            }
        }
   
        if (animais.length > 0) {
            simularHoraAlimentacao(animais);
            alert("Simulação concluída! Aperte F12 para ver o resultado da alimentação no console.");
        }
    }

    rodarPrograma();
}