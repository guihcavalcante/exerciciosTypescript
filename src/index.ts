import { runQuestion1Condicional } from "./condicional/exercicio01.js";
import { runQuestion1Repeticao } from "./repeticao/questao1.js";
import { runQuestion1Array } from "./array/exercicio01.js";
import { runAula1Array } from "./array/aula01.js";

document.getElementById("btn1-aulaArray")?.addEventListener('click', runAula1Array)
document.getElementById("btn1-condicional")?.addEventListener('click', runQuestion1Condicional)
document.getElementById("btn1-repeticao")?.addEventListener('click', runQuestion1Repeticao)
document.getElementById("btn1-array")?.addEventListener('click', runQuestion1Array)