var leitor = require("readline-sync")
class Carro{
    protected tanque: number
    protected km: number
    protected marca: string

    constructor(tanque: number,km: number,marca: string){
    this.tanque = tanque
    this.km = km
    this.marca = marca
    }
    public postoTanque(): void{
        let qtd = leitor.questionInt("Qual a qtd de Gasolina no carro? ")
        let adici = this.tanque + qtd
        console.log(`${adici}`)
    }
    public getCarro(): void{
        console.log(`Tanque: ${this.tanque}, KM: ${this.km}, Marca: ${this.marca}`);
    }
    public setCarro(){
        let tanqueUp = leitor.questionInt("Qual a qtd de Gasolina no carro? ")
        let kmUp = leitor.questionInt("/nQual a km do carro? ")
        let marcaUp = leitor.question("/nQual a marca do carro? ")
        this.tanque = tanqueUp
        this.km = kmUp
        this.marca = marcaUp
    }

    public andar(): void{
        let distancia = leitor.questionInt("Qual a distancia que voce deseja andar? ")
        let qtdCombu = distancia / this.km
        if (this.tanque >= qtdCombu){
        this.tanque -= qtdCombu
        console.log(`Voce andou ${distancia} KM`)
    }   else {
        console.log("Voce nao tem Combustivel Suficiente")
     }
}
}