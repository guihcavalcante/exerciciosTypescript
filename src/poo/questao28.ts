export function runQuestion28Poo() {
  abstract class Hospedagem {
    constructor(
      private _numeroQuarto: number,
      private _precoBaseDiaria: number,
      private _diasAlojados: number,
    ) {}

    get numeroQuarto() {
      return this._numeroQuarto;
    }
    get precoBaseDiaria() {
      return this._precoBaseDiaria;
    }
    get diasAlojados() {
      return this._diasAlojados;
    }

    public formatarParaReal(valor: number) {
      return Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL",
      }).format(valor);
    }

    abstract calcularFaturamentoTotal(): number;
  }

  class HospedagemBasica extends Hospedagem {
    constructor(numQuarto: number, precoDiaria: number, diasAlojados: number) {
      super(numQuarto, precoDiaria, diasAlojados);
    }

    calcularFaturamentoTotal() {
      return this.precoBaseDiaria * this.diasAlojados;
    }
  }

  class SuiteMaster extends Hospedagem {
    private _valorAdicionalHidro: number;

    constructor(
      valorAdicionalHidro: number,
      numQuarto: number,
      precoDiaria: number,
      diasAlojados: number,
    ) {
      super(numQuarto, precoDiaria, diasAlojados);
      this._valorAdicionalHidro = valorAdicionalHidro;
    }

    get valorAdicionalHidro() {
      return this._valorAdicionalHidro;
    }

    calcularFaturamentoTotal() {
      return (
        (this.precoBaseDiaria + this._valorAdicionalHidro) * this.diasAlojados
      );
    }
  }

  function rodarPrograma() {
    let checkOuts: Hospedagem[] = [];

    while (true) {
      let tipoHospedagem = prompt("Cadastrar Check-out:\n1 - Básica\n2 - Suíte Master\n0 - Encerrar")?.trim();
      if (tipoHospedagem === "0" || !tipoHospedagem) break;

      if (tipoHospedagem !== "1" && tipoHospedagem !== "2") {
        alert("Opção inválida. Tente novamente!");
        continue;
      }

      let numQuarto = Number(prompt("Digite o número do quarto:"));
      let precoDiaria = Number(prompt("Digite o valor base da diária:"));
      let diasAlojados = Number(
        prompt("Quantos dias o hóspede ficou alojado?"),
      );

      if (isNaN(numQuarto) || isNaN(precoDiaria) || isNaN(diasAlojados) || diasAlojados <= 0) {
        alert("Dados numéricos inválidos. Tente novamente!");
        continue;
      }

      let hospedagem: Hospedagem;

      if (tipoHospedagem === "1") {
        hospedagem = new HospedagemBasica(numQuarto, precoDiaria, diasAlojados);
      } else {
        let valorAdicional = Number(prompt("Digite o valor adicional fixo da Hidromassagem:"));
        if (isNaN(valorAdicional)) {
          alert("Valor adicional inválido. Tente novamente!");
          continue;
        }
        hospedagem = new SuiteMaster(valorAdicional, numQuarto, precoDiaria, diasAlojados);
      }

      checkOuts.push(hospedagem);

      let choice = Number(prompt("Adicionar mais check-outs?\n1 - Sim\n2 - Não"));
      if (choice === 2) break;
    }

    let faturaramMaisDeMil = checkOuts.filter((h) => h.calcularFaturamentoTotal() > 1000);

    if (faturaramMaisDeMil.length === 0) {
      alert("Nenhum quarto faturou mais de R\$ 1.000,00 nesta temporada.");
    } else {
      let mensagem = "--- Quartos com faturamento acima de R\$ 1.000,00 ---\n";
      for (let h of faturaramMaisDeMil) {
        mensagem += `Quarto ${h.numeroQuarto} (${h.diasAlojados} dias): ${h.formatarParaReal(h.calcularFaturamentoTotal())}\n`;
      }
      alert(mensagem);
    }
  }

  rodarPrograma();
}
