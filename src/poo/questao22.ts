// 22. Abstração Herança Polimorfismo Repetição Encapsulamento Arrays
// Oficina Mecânica e Revisão de Frotas
// O setor de transportes públicos precisa mapear a manutenção de seus veículos. Crie uma classe base
// para Veículo com placa e quilometragem atual. Os Ônibus precisam fazer revisão a cada 10.000 km,
// enquanto as Ambulâncias precisam de revisão preventiva a cada 5.000 km. O sistema interativo deve
// perguntar as informações da frota atual e guardar os objetos em um array. Depois, o programa solicita
// que o mecânico informe a quilometragem atual de um determinado veículo e, varrendo o array de
// objetos, o sistema responde textualmente se aquele veículo específico precisa ou não ser retido para
// manutenção imediata.

export function runQuestion22Poo() {
    abstract class Veiculo {
        constructor(
            private _placa: string,
            private _kmUltimaRevisao: number
        ) {}

        public get placa(): string {
            return this._placa;
        }

        protected get kmUltimaRevisao(): number {
            return this._kmUltimaRevisao;
        }

        abstract precisaManutencao(kmAtual: number): boolean;
    }

    class Onibus extends Veiculo {
        public precisaManutencao(kmAtual: number): boolean {
            return (kmAtual - this.kmUltimaRevisao) >= 10000;
        }
    }

    class Ambulancia extends Veiculo {
        public precisaManutencao(kmAtual: number): boolean {
            return (kmAtual - this.kmUltimaRevisao) >= 5000;
        }
    }

    function rodarPrograma() {
        let frota: Veiculo[] = [];

        while (true) {
            let tipo = prompt("Cadastrar na Frota:\n1 - Ônibus\n2 - Ambulância\n0 - Encerrar Cadastro")?.trim();
            if (tipo === "0" || !tipo) break;

            let placa = prompt("Placa do veículo:")?.trim() ?? "";
            let kmRevisao = Number(prompt("Quilometragem da última revisão:"));

            if (!placa || isNaN(kmRevisao) || kmRevisao < 0) {
                alert("Dados inválidos.");
                continue;
            }

            if (tipo === "1") {
                frota.push(new Onibus(placa, kmRevisao));
            } else if (tipo === "2") {
                frota.push(new Ambulancia(placa, kmRevisao));
            } else {
                alert("Tipo inválido.");
            }
        }

        while (true) {
            let placaBusca = prompt("--- MÓDULO DO MECÂNICO ---\nDigite a placa do veículo para avaliar (ou 0 para sair):")?.trim() ?? "";
            if (placaBusca === "0" || !placaBusca) break;

            let veiculoEncontrado = frota.find(v => v.placa.toUpperCase() === placaBusca.toUpperCase());

            if (veiculoEncontrado) {
                let kmAtual = Number(prompt(`Veículo ${veiculoEncontrado.placa} encontrado!\nInforme a quilometragem atual do odômetro:`));
                
                if (isNaN(kmAtual) || kmAtual < 0) {
                    alert("Quilometragem inválida.");
                    continue;
                }

                if (veiculoEncontrado.precisaManutencao(kmAtual)) {
                    alert(`ALERTA: O veículo ${veiculoEncontrado.placa} PRECISA ser retido para manutenção imediata!`);
                } else {
                    alert(`O veículo ${veiculoEncontrado.placa} está liberado. Manutenção em dia.`);
                }
            } else {
                alert("Veículo não encontrado na frota.");
            }
        }
    }

    rodarPrograma();
}