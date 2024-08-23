import { doesNotMatch } from "assert"

var leitor = require("readline-sync")
export interface Carro{
    tanque: number
    km: number
    marca: string
}
export class Carro{
    public tanque: number
    public km: number
    public marca: string

    constructor(tanque: number,km: number,marca: string){
    this.tanque = tanque
    this.km = km
    this.marca = marca
    }
    public getCarro(): void{
        console.log(`Tanque: ${this.tanque}, KM: ${this.km}, Marca: ${this.marca}`);
    }
    public setCarro(){
        let tanqueUp = leitor.questionInt("Qual a qtd de Gasolina no carro? ")
        let kmUp = leitor.questionInt("/nQual a km do carro? ")
        let marcaUp = leitor.question("/nQual a marca do carro? ")
        if(marcaUp == ""){
            this.marca = this.marca
        }else {
            this.marca = marcaUp
        }
        if(tanqueUp == null){
            this.tanque = this.tanque
        }else {
            this.tanque = tanqueUp
        }
        if(kmUp == null){
            this.km = this.km
        }else {
            this.km = kmUp
        }
    }
    //esse metodo serve para calcular a viagem em relacao a gasolina
    public andar(): void{
        let distanciaViagem = leitor.questionInt("Qual a distancia que voce deseja andar? ")
        let validacaoViagem = this.tanque - (distanciaViagem / this.km)
        if (validacaoViagem < 0){
            console.log("Voce NAO pode completar a viagem")
        }else {
            this.tanque -= validacaoViagem
            console.log("Voce PODE completar a viagem")
        }
    }
    public obterGasolina(): number{
        return this.tanque
    }
    public abastecer(): void {
        let frentista = leitor.questionInt("Quantos litros vai abastecer? ")
        this.tanque += frentista
        console.log(`Voce abasteceu ${frentista} litros e tem ${this.tanque} litros no carro`)
    }
}