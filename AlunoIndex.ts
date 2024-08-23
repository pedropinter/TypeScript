import { Aluno } from "./aluno";
let reader = require('readline-sync')
let menu: boolean = true
let alunoExiste = false
let alunoUm = new Aluno(0, '', 0, 0,0)

function inserirNotas(nome: string, matricula: number): Aluno{
    let notaProva1 = reader.questionInt("Insira a nota da prova 1: ")
    let notaProva2 = reader.questionInt("Insira a nota da prova 2: ")
    let notaTrabalho = reader.questionInt("Insira a nota do trabalho: ")
    let alunoNovo = new Aluno(matricula, nome, notaProva1, notaProva2, notaTrabalho)
    return alunoNovo
}

while(menu){
    console.log(
        `
        1 - Cadastrar Nome e Matrícula (Aluno)
        2 - Cadastrar Notas (Aluno)
        3 - Verificar Média das Provas (Aluno)
        4 - Verificar Média Final (Aluno)
        0 - Sair
        `
    );

    let option = reader.questionInt("Escolha: ")

    switch(option){
        case 1:
            let nome = reader.question("Insira o nome do aluno: ")
            let matricula = reader.questionInt("Nº Matrícula: ")
            alunoUm = inserirNotas(nome, matricula)
            alunoExiste = true
            break
        case 2:
            if(alunoExiste){
                alunoUm = inserirNotas(nome, matricula)
            } else {
                throw new Error(`O aluno não foi criado`)
            }
            break
        case 3:
            if(alunoExiste){
                alunoUm.media()
            }
            break
        case 4:
            if(alunoExiste){
                alunoUm.final()
            }
            break
        case 0:
            process.exit(0)
        default:
            console.log(`Essa opção não existe`)
            break
            
    }
}