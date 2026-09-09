// 10. Classe Bichinho Virtual: Crie uma classe que modele um Tamagushi (Bichinho Eletrônico):
// A. Atributos: Nome, Fome, Saúde e Idade
// B. Métodos: Alterar Nome, Fome, Saúde e Idade;
// C. Retornar Nome, Fome, Saúde e Idade
// Obs: Existe mais uma informação que devemos levar em consideração, o Humor do nosso tamagushi,
// este humor é uma combinação entre os atributos Fome e Saúde, ou seja, um campo calculado, então não
// devemos criar um atributo para armazenar esta informação por que ela pode ser calculada a qualquer
// momento.

export function runQuestion10Poo() {
    class Tamagushi {
        private _nome: string
        private _fome: number
        private _saude: number
        private _idade: number
        
        constructor(nome: string, fome: number, saude: number, idade: number) {
            this._nome = nome
            this._fome = fome
            this._saude = saude
            this._idade = idade
        }

        
    }
}