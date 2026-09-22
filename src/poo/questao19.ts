// 19. Repetição Encapsulamento Arrays
// Monitoramento de Sensores Industriais
// Uma fábrica instalou sensores para monitorar sua produção. Todo sensor possui um código
// identificador e a última leitura registrada. Um Sensor de Temperatura exibe sua leitura acompanhada
// da unidade &quot;°C&quot; e possui um alerta caso passe dos 40°C. Um Sensor de Pressão exibe sua leitura
// acompanhada de &quot;atm&quot; e alerta se passar de 5 atm. O programa deve solicitar repetidamente que o
// técnico digite os valores lidos pelos sensores espalhados pela fábrica, armazenando-os em um array.
// No final, o programa filtra a lista e exibe o relatório de todos os sensores que dispararam alertas de
// perigo.

export function runQuestion19Poo() {
    abstract class Sensor {
        constructor(
            private _codigo: string,
            private _ultimaLeitura: number
        ) {}

        public get codigo(): string {
            return this._codigo;
        }

        protected get ultimaLeitura(): number {
            return this._ultimaLeitura;
        }

        abstract disparouAlerta(): boolean;
        abstract exibirLeitura(): string;
    }

    class SensorTemperatura extends Sensor {
        constructor(codigo: string, ultimaLeitura: number) {
            super(codigo, ultimaLeitura);
        }

        public disparouAlerta(): boolean {
            return this.ultimaLeitura > 40;
        }

        public exibirLeitura(): string {
            return `${this.codigo}: ${this.ultimaLeitura}°C`;
        }
    }

    class SensorPressao extends Sensor {
        constructor(codigo: string, ultimaLeitura: number) {
            super(codigo, ultimaLeitura);
        }

        public disparouAlerta(): boolean {
            return this.ultimaLeitura > 5;
        }

        public exibirLeitura(): string {
            return `${this.codigo}: ${this.ultimaLeitura} atm`;
        }
    }

    function rodarPrograma() {
        let sensores: Sensor[] = [];

        while (true) {
            let tipo = prompt("Cadastrar Sensor:\n1 - Temperatura\n2 - Pressão\n0 - Encerrar")?.trim();
            if (tipo === "0" || !tipo) break;

            let codigo = prompt("Código do sensor:")?.trim() ?? "";
            let leitura = Number(prompt("Valor da última leitura:"));

            if (!codigo || isNaN(leitura)) {
                alert("Dados inválidos. Tente novamente.");
                continue;
            }

            if (tipo === "1") {
                sensores.push(new SensorTemperatura(codigo, leitura));
            } else if (tipo === "2") {
                sensores.push(new SensorPressao(codigo, leitura));
            } else {
                alert("Opção inválida.");
            }
        }

        let sensoresEmPerigo = sensores.filter(s => s.disparouAlerta());

        if (sensoresEmPerigo.length > 0) {
            let relatorio = "--- ALERTAS DE PERIGO ---\n";
            sensoresEmPerigo.forEach(s => {
                relatorio += s.exibirLeitura() + "\n";
            });
            alert(relatorio);
        } else {
            alert("Todos os sensores operam dentro da normalidade.");
        }
    }

    rodarPrograma();
}