import { monster } from "./monster"
export class knight{
    nomeK: string
    typeK: string
    forcaK: number
    saudeK: number

    constructor(nomek: string,typeK: string,forcaK: number){
        this.nomeK = nomek
        this.typeK = typeK
        this.forcaK = forcaK
        this.saudeK = 100
    }
    atacar(myMonster:monster): void{
    const dano = this.forcaK
    myMonster.receDano(dano),
    console.log(`${this.nomeK} ataca com ${dano} de forca`)
    }
    receDano(dano:number): void{
        this.saudeK -= dano
    }
    mostraStatus():void{
        console.log(`${this.nomeK} tem ${this.saudeK} de vida.`)
    }
}