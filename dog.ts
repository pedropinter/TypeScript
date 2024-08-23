export class dog{
    nome: string
    pesoD: number
    raca: string

    constructor(name: string,weight: number,race: string){
        this.nome = name
        this.pesoD = weight
        this.raca = race
    
    }
    latindo(): void{
    console.log(`au au`)
    }
    uivando(): void{
        console.log("auuuu")
    }
}
