var reader = require('readline-sync')

export class owl{
    nome: string
    pesoO: number

    constructor(nome: string,peso: number){
        this.nome = nome
        this.pesoO = peso
    
    }
    voando(): void{
    console.log(`vuum vuum`)
    }
    caindo(): void{
        console.log("boooom")
    }
}
var vouu: number = Number(reader.question ('Quanto ela vouu? '))

    