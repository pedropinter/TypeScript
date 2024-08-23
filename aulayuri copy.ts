var reader = require('readline-sync')

class Carro{
    rodas: number
    motor: number
    cor: string
    modelo: string
    marca: string
    km: number


    constructor(rodas: number,motor: number,cor: string,modelo: string,marca: string, km: number){
        this.rodas = rodas
        this.motor = motor
        this.cor = cor
        this.modelo = modelo
        this.marca = marca
        this.km = km
    }
    acelerar(){
    console.log(`O ${this.modelo} chegou a ${this.km} km/h`)
    }
    freiar(){
        console.log("freiando")
    }
    lavar(){
    console.log("lavando")
    }
}

var rodasCarro: number = Number(reader.question ('Qual o aro de suas rodas? '))
var motorCarro: number = Number(reader.question ('Qual o motor do seu carro? '))
var corCarro: string = String(reader.question ('Qual a cor do seu carro? '))
var modeloCarro: string = String(reader.question ('Qual o modelo do seu carro? '))
var marcaCarro: string = String(reader.question ('Qual a marca do seu carro? '))
var velocidadeCarro: number = Number(reader.question ('Quantos km seu carro bate? '))

const meuCarro = new Carro(rodasCarro, motorCarro, corCarro, modeloCarro, marcaCarro, velocidadeCarro)

meuCarro.acelerar()
meuCarro.lavar()
meuCarro.freiar()

console.log (meuCarro.rodas, meuCarro.motor, meuCarro.cor)