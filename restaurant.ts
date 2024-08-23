var leitor = require('readline-sync')
class Cozinheiro{
    nome: string
    idade: number
    ano_xp: number
    
    constructor(nome: string,idade: number, ano_xp:number){
        this.nome = nome
        this.idade = idade
        this.ano_xp = ano_xp
    }
    getCozinheiro(): void{
        console.log(`Ola, meu nome é ${this.nome},tenho ${this.idade} anos e sou chef há ${this.ano_xp} anos`)
    }
    setCozinheiro(): void{
        let nomeUp = leitor.question("Qual o nome do cozinheiro? ")
        let idadeUp = leitor.question("Qual a idade do cozinheiro? ")
        let ano_xpUp = leitor.question("Qual o tempo de xp do cozinheiro? ")
        this.nome = nomeUp
        this.idade = idadeUp
        this.ano_xp = ano_xpUp

    }
    
}

class Restaurant{
    cz:Cozinheiro
    nome: string
    endereco: string
    num_end: number

    constructor(cz:Cozinheiro,nome:string,endereco:string,num_end:number){
        this.cz = cz
        this.nome = nome
        this.endereco = endereco
        this.num_end = num_end
    }
    getRestaurante(): void{
        console.log(`restaurante nome = ${this.nome},Endereco = ${this.endereco},Numero sla = ${this.num_end}, Chef = ${this.cz.nome}`)
    }
    setRestaurante(): void{
        this.cz.setCozinheiro()
        let nomeUp = leitor.question("Qual o nome do restaurante? ")
        let enderecoUp = leitor.question("Qual o endereco? ")
        let num_endUp = leitor.question("Qual o ano sla? ")
        this.nome = nomeUp
        this.endereco = enderecoUp
        this.num_end = num_endUp
    }
}
let chefNovo = new Cozinheiro ("IURI ", 12, 23)
let resNovo = new Restaurant (chefNovo,"Pizzaria", "esteio",12)
resNovo.getRestaurante()
resNovo.setRestaurante()
resNovo.getRestaurante()
