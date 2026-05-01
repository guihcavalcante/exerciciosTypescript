// 2. O IF tem uma estufa e o professor de biologia quer um sistema simples para monitorar a
// temperatura.
// ● Crie uma função ler_temperatura():
// o Simula a leitura de um sensor, pedindo ao usuário para digitar uma temperatura
// (valor inteiro ou float).
// o Retorna a temperatura lida.
// ● Crie uma função verificar_alerta_temperatura(temperatura):
// o Recebe a temperatura.
// o Se a temperatura for menor que 10 ou maior que 30, retorna True (alerta).
// o Caso contrário, retorna False.
// ● Crie uma função emitir_mensagem_alerta(status_alerta):
// o Recebe o status_alerta (True ou False).
// o Se status_alerta for True, imprime &quot;ALERTA: Temperatura fora da faixa ideal!&quot;.
// o Se status_alerta for False, imprime &quot;Temperatura dentro da faixa normal.&quot;.

export function runQuestion2Funcao() {
    function lerTemperatura() {
        let temperatura:number

        while(true) {
            temperatura = Number(prompt("Digite a temperatura:"))

            if(isNaN(temperatura)) {
                alert("Entrada inválida. Tente novamente!")
                continue
            }

            break
        }
        return temperatura
    }

    function verificarAlertaTemperatura(temperatura:number) {
        return temperatura < 10 || temperatura > 30
    }

    function emitirMensagemAlerta(statusAlerta:boolean) {
        if(statusAlerta) console.log("ALERTA: Temperatura fora da faixa ideal!")
        else console.log("Temperatura dentro da faixa normal.")
    }

    let temperatura = lerTemperatura()
    let statusTemperatura = verificarAlertaTemperatura(temperatura)
    emitirMensagemAlerta(statusTemperatura)
}