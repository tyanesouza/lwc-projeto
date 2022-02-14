import { LightningElement } from "lwc";

export default class App extends LightningElement {
  

pessoa = {
  nome: "prandidni",
  tel: "8988998",
  idade: 28,
  status: true

}
pokemons = [
      {cod: 1, nome: "Pikachu",    tipo:"raio",  nivel:52},
      {cod: 2, nome: "Charmander", tipo:"fogo",  nivel:35},
      {cod: 3, nome: "Taurus",     tipo:"agua",  nivel:50},
      {cod: 4, nome: "Squartle",   tipo:"terra", nivel:33},
      {cod: 5, nome: "Jinx",       tipo:"vento", nivel:51},
      {cod: 6, nome: "Articuno",   tipo:"sopro", nivel:36}
    ];

caverna = [

{cod: 1, nome: "Hank", arma:"Arco Mágico", força:"Guarda", agilidade:70, inteligencia:80, estamina:90 },
{cod: 1, nome: "Eric", arma:"Escudo",      força:"Cavaleiro", agilidade:90, inteligencia:90, estamina:90 },
{cod: 1, nome: "Diana", arma:"Bastão", força:"Acrobata", agilidade:70, inteligencia:80, estamina:90 },
{cod: 1, nome: "Sheila", arma:"Capuz", força:"Ladina", agilidade:70, inteligencia:80, estamina:90 },
{cod: 1, nome: "Presto", arma:"Chapéu", força:"Mago", agilidade:70, inteligencia:80, estamina:90 },
{cod: 1, nome: "Bobby", arma:"Tacape", força:"Bárbaro", agilidade:70, inteligencia:80, estamina:90 },
{cod: 1, nome: "Mestre Dos Magos", arma:"Magia", força:"Mago", agilidade:70, inteligencia:80, estamina:90 },

]

}
