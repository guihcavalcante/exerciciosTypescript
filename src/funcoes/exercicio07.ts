// 7. Sistema de Eficiência de Combustível
// Crie um programa que ajude um motorista a saber a autonomia do seu carro.
//  Função 1: Recebe a distância percorrida e a quantidade de combustível gasta, retornando
// o consumo médio (km/l).
//  Função 2: Recebe o consumo médio e a capacidade total do tanque, retornando quantos
// quilômetros o carro percorre com o tanque cheio.

export function runQuestion7Funcao() {
    const calcularConsumo = (dist: number, comb: number): number => dist / comb;
    const calcularAutonomia = (media: number, tanque: number): number => media * tanque;


    const dist = Number(prompt("Distância percorrida (km):"));
    const combustivel = Number(prompt("Combustível gasto (litros):"));
    const capacidade = Number(prompt("Capacidade total do tanque (litros):"));


    const consumoMedio = calcularConsumo(dist, combustivel);
    const autonomiaTotal = calcularAutonomia(consumoMedio, capacidade);


    alert(`Consumo Médio: ${consumoMedio.toFixed(2)} km/l\nAutonomia Total: ${autonomiaTotal.toFixed(2)} km`);
}