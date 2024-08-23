class pessoa{
    nome: string
    idade: number

    constructor(nome: string ,idade: number){
        this.idade = idade
        this.nome = nome
    }
    cumprimentar(): void{
        console.log(`Meu nome é ${this.nome}`)
    }
}
//criando pessoa com heranca
//let NovaPessoa = new pessoa("Pedro", 15)
//NovaPessoa.cumprimentar()
class crianca extends pessoa{
    cumprimentar(): void {
        console.log(`Meu nome é ${this.nome} e tenho ${this.idade} anos, sou uma crianca `)
    }
}
class idoso extends pessoa{
    cumprimentar(): void {
        console.log(`Meu nome é ${this.nome} e tenho ${this.idade} anos, sou um idoso `)
    }
}
let kid = new crianca("shampas", 8)
let oldman = new idoso("renato", 56)

kid.cumprimentar()
oldman.cumprimentar()