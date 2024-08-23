/*
import { Aluno } from "./aluno";
let rl = require('readline-sync')
let menu: boolean = true
let alunoExiste = false

while(menu){
    console.log(`
        1 - Cadastrar Nome e Matricula(Aluno)
        2 - Cadastrar Nome e Matricula(Aluno)
        3 - Cadastrar Nome e Matricula(Aluno)
        4 - Cadastrar Nome e Matricula(Aluno)`)
}
let option = rl.questionInt("Escolha: ")
    switch(option){
        case 1:
            let nome = rl.question('Nome do Aluno: ')
            let matricula = rl.questionInt('Matricula do Aluno: ')
            let alunoNovo = inserirNotas(nome,matricula)
            alunoExiste = true
            break
        case 2:
            if(alunoExiste){
                alunoNovo = inserirNotas(nome,matricula)
            } else {
                throw new Error ('Aluno nao foi criado')
            }
            break
        case 3: 
            alunoNovo.media(me)
    }
function inserirNotas(nome:string,matricula:number): Aluno{
        let prova1SIM = rl.questionInt("Digite a sua 1Nota: ")
        let prova2SIM = rl.questionInt("Digite a sua 2Nota: ")
        let trabalhoSIM = rl.questionInt("Digite a nota do trabalho: ")
        let alunoNovo = new Aluno(matricula,nome,prova1SIM,prova2SIM,trabalhoSIM)
        return alunoNovo
}
*/