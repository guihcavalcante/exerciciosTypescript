// 4. Crie uma função que recebe um valor de saque (inteiro). A função deve dizer quantas notas
// de 50, 20 e 10 são necessárias para o saque (priorizando as maiores). Use um laço while
// para ir subtraindo do valor total.

export function runQuestion4Funcao() {
    function lerSaque() {
        let saque:number

        while(true) {
            saque = Number(prompt("Digite o saque:"))

            if(isNaN(saque) || saque < 0) {
                alert("Entrada inválida. Tente novamente!")
                continue
            }

            break
        }
        return saque
    }

    function entregarSaque(saque:number) {
        let q50=0, q20=0, q10=0

        while(saque >= 10) {
            if(saque >= 50) {
                saque -= 50
                q50++
            } else if(saque >= 20) {
                saque -= 20
                q20++
            } else {
                saque -= 10
                q10++
            }
        }
        console.log(`Notas de 50: ${q50}`)
        console.log(`Notas de 20: ${q20}`)
        console.log(`Notas de 10: ${q10}`)
    }

    let saque = lerSaque()
    entregarSaque(saque)
}