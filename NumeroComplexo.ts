const rl = require("readline-sync")
export class Numcomplexo{
    real: number;
    imaginario: number
    constructor(real: number,imaginario: number){
        this.real = real
        this.imaginario = imaginario
    }
    getComplexo(): void{
        console.log(`
        Real = ${this.real}
        Imaginario = ${this.imaginario}
        `)
    }
    setComplexo(): void{
    this.real = rl.questionInt("Digite o Real: ")
    this.imaginario = rl.questionInt("Digite o Imaginario: ") 
    }
    equals(outroComplexo: NovaClass): boolean{
        
    }
}

export class NovaClass extends Numcomplexo{}