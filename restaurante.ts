/*var leitor = require('readline-sync')
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

class Restaurante{
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
}
//instancia cozinheiro
let chefThalles = new Cozinheiro("Thalles", 45, 15)
//instancia restaurante
let variatto = new Restaurante(chefThalles,"Variatto","Av Imperatriz", 500)

console.log(variatto)

let chefNovo = new Cozinheiro("Teste", 20 ,10)

chefNovo.getCozinheiro()
chefNovo.setCozinheiro()
chefNovo.getCozinheiro()*/
