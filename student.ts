var leitor = require('readline-sync')
class Aluno{
    nome: string
    notas: Array<number>

    constructor(nome:string){
        this.nome = nome
        this.notas = []
    }
    registroNotas(): void{
        let n1: number = leitor.questionInt("Insira n1: ")
        let n2: number = leitor.questionInt("Insira n2: ") 
        this.notas.push(n1,n2)
    }
    calcularMedia(): void{
        let media = (this.notas[0] + this.notas[1])/2
        console.log(`A média é ${media}`)
    }
}
let nomeAluno = leitor.question("Quem gostaria de verificar a media? ")
let alunoNovo = new Aluno(nomeAluno)
alunoNovo.registroNotas()
alunoNovo.calcularMedia()