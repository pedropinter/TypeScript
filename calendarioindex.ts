import { Data } from "./calendario";
let rl = require('readline-sync')

function inserirData(): Data{
    let dia = rl.questionInt("Insira a nota da prova 1: ")
    let mes = rl.questionInt("Insira a nota da prova 2: ")
    let ano = rl.questionInt("Insira a nota do trabalho: ")
    let dataNova = new Data(dia, mes, ano)
    return dataNova
}
