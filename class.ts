/*var leitor = require('readline-sync')
class Professor{
    nome: string
    idade: number
    ano_xp: number
    
    constructor(nome: string,idade: number, ano_xp:number){
        this.nome = nome
        this.idade = idade
        this.ano_xp = ano_xp
    }
    getProfessor(): void{
        console.log(`Ola, meu nome é ${this.nome},tenho ${this.idade} anos e sou professor há ${this.ano_xp} anos`)
    }
    setProfessor(): void{
        let nomeUp = leitor.question("Qual o nome do Professor? ")
        let idadeUp = leitor.question("Qual a idade do Professor? ")
        let ano_xpUp = leitor.question("Qual o tempo de xp do Professor? ")
        this.nome = nomeUp
        this.idade = idadeUp
        this.ano_xp = ano_xpUp
    }
}
class Escola{
    prof:Professor
    nome: string
    endereco: string
    num_end: number

    constructor(prof: Professor,nome:string,endereco:string,num_end:number){
        this.prof = prof
        this.nome = nome
        this.endereco = endereco
        this.num_end = num_end
    }
    getEscola(): void{
        console.log(`Escola nome = ${this.nome},Endereco = ${this.endereco},Numero sla = ${this.num_end}, Chef = ${this.prof.nome}`)
    }
    setEscola(): void{
        let nomeUp = leitor.question("Qual o nome da escola? ")
        let enderecoUp = leitor.question("Qual o endereco? ")
        let num_endUp = leitor.question("Qual o ano sla? ")
        this.nome = nomeUp
        this.endereco = enderecoUp
        this.num_end = num_endUp
    }
}
let profNovo = new Professor("", 0,0)
let escolaNovo = new Escola(profNovo,"","",0)
let menu = true
while(menu){
    let questao = leitor.questionInt("Escolha a opcao: \n1 - Cadastras prof., \n2 - Cadastrar Escola.,\n3 - Atualizar Prof., \n4 - Atualizar Escola., \n5 - Visualizar Prof., \n6 - Visualizar Escola., \n0 - Sair\n ")
    switch(questao){
        case 1:
            profNovo.setProfessor()
            break
        case 2: escolaNovo.setEscola()
            break
        case 3: profNovo.setProfessor()
            break
        case 4: escolaNovo.setEscola()
            break
        case 5: profNovo.getProfessor()
            break
        case 6: escolaNovo.getEscola()
            break
        case 0: 
            !menu
            process.exit(0)
    }
}
*/