// Abstração Herança Polimorfismo Repetição Encapsulamento Arrays
// Aplicativo de Streaming e Assinaturas de Vídeo
// Um provedor de internet quer lançar um serviço de streaming de vídeo. Cada assinatura possui o e-mail do usuário e o valor do plano mensal. A Assinatura Padrão dá direito a 2 telas simultâneas. A Assinatura Premium dá direito a 4 telas e inclui suporte à resolução 4K. O sistema deve pedir para o atendente cadastrar novos clientes e selecionar seus planos correspondentes em um loop. Com os dados salvos em uma lista de contratos, o programa deve permitir fazer uma busca pelo e-mail do usuário e exibir o contrato detalhado formatado dinamicamente, revelando os benefícios e o preço correto do plano escolhido por meio de polimorfismo.[cite: 1]

export function runQuestion25Poo() {
    abstract class Assinatura {
        constructor(
            private _email: string,
            private _valorMensal: number
        ) {}

        public get email(): string {
            return this._email;
        }

        public get valorMensal(): number {
            return this._valorMensal;
        }

        abstract formatarContrato(): string;
    }

    class AssinaturaPadrao extends Assinatura {
        constructor(email: string, valorMensal: number) {
            super(email, valorMensal);
        }

        public formatarContrato(): string {
            return `CONTRATO DE ASSINATURA PADRÃO\nE-mail: ${this.email}\nValor: R$ ${this.valorMensal.toFixed(2)}\nBenefícios: Acesso a 2 telas simultâneas em qualidade HD.`;
        }
    }

    class AssinaturaPremium extends Assinatura {
        constructor(email: string, valorMensal: number) {
            super(email, valorMensal);
        }

        public formatarContrato(): string {
            return `CONTRATO DE ASSINATURA PREMIUM\nE-mail: ${this.email}\nValor: R$ ${this.valorMensal.toFixed(2)}\nBenefícios: Acesso a 4 telas simultâneas com suporte à resolução 4K HDR.`;
        }
    }

    function rodarPrograma() {
        let contratos: Assinatura[] = [];

        while (true) {
            let menu = prompt("--- SISTEMA DE STREAMING ---\n1 - Cadastrar Assinatura\n2 - Buscar Contrato por E-mail\n0 - Sair")?.trim();
            if (menu === "0" || !menu) break;

            if (menu === "1") {
                let email = prompt("E-mail do cliente:")?.trim() ?? "";
                if (!email) {
                    alert("E-mail inválido.");
                    continue;
                }

                let tipo = prompt("Tipo de Plano:\n1 - Padrão\n2 - Premium")?.trim();
                let valor = Number(prompt("Valor da mensalidade:"));

                if (isNaN(valor) || valor < 0) {
                    alert("Valor inválido.");
                    continue;
                }

                if (tipo === "1") {
                    contratos.push(new AssinaturaPadrao(email, valor));
                    alert("Plano Padrão cadastrado!");
                } else if (tipo === "2") {
                    contratos.push(new AssinaturaPremium(email, valor));
                    alert("Plano Premium cadastrado!");
                } else {
                    alert("Opção de plano inválida.");
                }
            } 
            else if (menu === "2") {
                let buscaEmail = prompt("Digite o e-mail cadastrado:")?.trim() ?? "";
                let contratoEncontrado = contratos.find(c => c.email.toLowerCase() === buscaEmail.toLowerCase());

                if (contratoEncontrado) {
                    alert(contratoEncontrado.formatarContrato());
                } else {
                    alert("Nenhum contrato encontrado para este e-mail.");
                }
            } 
            else {
                alert("Opção inválida.");
            }
        }
    }

    rodarPrograma();
}