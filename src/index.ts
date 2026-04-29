// CONDICIONAL
import { runQuestion1Condicional } from "./condicional/exercicio01.js";
import { runQuestion2Condicional } from "./condicional/exercicio02.js";
import { runQuestion3Condicional } from "./condicional/exercicio03.js";
import { runQuestion4Condicional } from "./condicional/exercicio04.js";


document.getElementById("btn1-condicional")?.addEventListener('click', runQuestion1Condicional)
document.getElementById("btn2-condicional")?.addEventListener('click', runQuestion2Condicional)
document.getElementById("btn3-condicional")?.addEventListener('click', runQuestion3Condicional)
document.getElementById("btn4-condicional")?.addEventListener('click', runQuestion4Condicional)

// REPETIÇÃO
import { runQuestion1Repeticao } from "./repeticao/questao1.js";
import { runQuestion2Repeticao } from "./repeticao/questao2.js";
import { runQuestion3Repeticao } from "./repeticao/questao3.js";
import { runQuestion4Repeticao } from "./repeticao/questao4.js";
import { runQuestion5Repeticao } from "./repeticao/questao5.js";


document.getElementById("btn1-repeticao")?.addEventListener('click', runQuestion1Repeticao)
document.getElementById("btn2-repeticao")?.addEventListener('click', runQuestion2Repeticao)
document.getElementById("btn3-repeticao")?.addEventListener('click', runQuestion3Repeticao)
document.getElementById("btn4-repeticao")?.addEventListener('click', runQuestion4Repeticao)
document.getElementById("btn5-repeticao")?.addEventListener('click', runQuestion5Repeticao)

// FUNÇÃO
import { runQuestion1Funcao } from "./funcoes/exercicio01.js";


document.getElementById("btn1-funcao")?.addEventListener('click', runQuestion1Funcao)

// ARRAY
import { runAula1Array } from "./array/aula01.js";
import { runQuestion1Array } from "./array/exercicio01.js";
import { runQuestion2Array } from "./array/exercicio02.js";


document.getElementById("btn1-aulaArray")?.addEventListener('click', runAula1Array)
document.getElementById("btn1-array")?.addEventListener('click', runQuestion1Array)
document.getElementById("btn2-array")?.addEventListener('click', runQuestion2Array)




