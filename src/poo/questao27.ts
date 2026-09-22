// Inventário Automatizado de Equipamentos de TI
// Para organizar os laboratórios, crie um sistema de inventário. Todo equipamento possui número de tombamento e descrição. Equipamentos do tipo Computador registram a quantidade de memória RAM, enquanto equipamentos do tipo Roteador registram a quantidade de portas disponíveis. O usuário deve alimentar um array inserindo os equipamentos que estão sendo catalogados no laboratório atual. O sistema deve validar as entradas para não aceitar valores nulos ou inválidos. Ao término do cadastro, o programa varre a lista inteira, disparando o método de auto-inspeção de cada objeto para imprimir uma ficha técnica detalhada de cada item do almoxarifado.[cite: 1]

export function runQuestion27Poo() {
    abstract class Equipamento {
        constructor(
            private _tombamento: string,
            private _descricao: string
        ) {}

        public get tombamento(): string {
            return this._tombamento;
        }

        public get descricao(): string {
            return this._descricao;
        }

        abstract inspecionar(): string;
    }

    class Computador extends Equipamento {
        constructor(
            tombamento: string, 
            descricao: string, 
            private _memoriaRamGb: number
        ) {
            super(tombamento, descricao);
        }

        public inspecionar(): string {
            return `[Computador] Tombamento: ${this.tombamento} | Descrição: ${this.descricao} | Memória RAM: ${this._memoriaRamGb} GB`;
        }
    }

    class Roteador extends Equipamento {
        constructor(
            tombamento: string, 
            descricao: string, 
            private _quantidadePortas: number
        ) {
            super(tombamento, descricao);
        }

        public inspecionar(): string {
            return `[Roteador] Tombamento: ${this.tombamento} | Descrição: ${this.descricao} | Portas Disponíveis: ${this._quantidadePortas}`;
        }
    }

    function rodarPrograma() {
        let almoxarifado: Equipamento[] = [];

        while (true) {
            let menu = prompt("Cadastrar Equipamento de TI:\n1 - Computador\n2 - Roteador\n0 - Encerrar Cadastro")?.trim();
            if (menu === "0" || !menu) break;

            let tombamento = prompt("Número de tombamento (ID):")?.trim() ?? "";
            let descricao = prompt("Descrição/Modelo:")?.trim() ?? "";

            if (!tombamento || !descricao) {
                alert("Tombamento e descrição são campos obrigatórios. Tente novamente.");
                continue;
            }

            if (menu === "1") {
                let ram = Number(prompt("Quantidade de memória RAM (em GB):"));
                if (isNaN(ram) || ram <= 0) {
                    alert("Quantidade de memória RAM inválida.");
                    continue;
                }
                almoxarifado.push(new Computador(tombamento, descricao, ram));
            } 
            else if (menu === "2") {
                let portas = Number(prompt("Quantidade de portas do roteador:"));
                if (isNaN(portas) || portas <= 0 || !Number.isInteger(portas)) {
                    alert("Quantidade de portas inválida.");
                    continue;
                }
                almoxarifado.push(new Roteador(tombamento, descricao, portas));
            } 
            else {
                alert("Opção inválida.");
            }
        }

        if (almoxarifado.length > 0) {
            let fichaTecnica = "--- RELATÓRIO DE INSPEÇÃO DO ALMOXARIFADO ---\n\n";
            
            almoxarifado.forEach(eq => {
                fichaTecnica += eq.inspecionar() + "\n\n";
            });

            alert(fichaTecnica);
        } else {
            alert("Nenhum equipamento cadastrado no laboratório.");
        }
    }

    rodarPrograma();
}