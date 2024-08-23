import { Ponto2D } from "./Ponto2D";
import { PontoCoordenadas } from "./Ponto2D";
import { outroPonto } from "./Ponto2D";
const rl = require("readline-sync")
let menu: boolean = true
let teste1 = new Ponto2D
let teste2 = new outroPonto(teste1)

while(menu){
    console.log(
        `
        0 - Sair
        1 - Set X, Y
        2 - Get X, Y
        3 - Equals
        4 - Mover
        5 - String
        6 - Distancia
        7 - Clone
        `
    );
    let option = rl.questionInt("Escolha: ")
    switch(option){
        case 1:
            teste1.setPonto();
            break
        case 2:
            teste1.getPonto();
            break
        case 3:
            console.log(teste1.equals(teste2)); // não mostra nada no console, como tem retorno booleano deve tratar o retorno
            break
        case 4:
            teste1.mover(); 
            break
        case 5:
            console.log(teste1.toString()); //modificar para toString, too significa também em inglês, deve mostrar também a saída dentro de um console.log
            break
        case 6:
            console.log(teste1.distancia(teste2)); //não mostrou nada no console, só chamar dentro de um console.log
            break
        case 7:
            console.log(teste1.clone()); //console.log
            break
        case 0:
            process.exit(0)
        default:
            console.log(`Essa opção não existe`)
            break
            
    }
}