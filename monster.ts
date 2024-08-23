import { knight } from "./Knight"
export class monster{
    nomeM: string
    forcaM: number
    saudeM: number

    constructor(nomeM: string){
        this.nomeM = nomeM
        this.forcaM = 50
        this.saudeM = 10
    }

    atacar(myMonster:monster): void{
    const dano = this.forcaM
    myMonster.receDano(dano),
    console.log(`${this.nomeM} ataca com ${dano} de forca`)
    }
    receDano(dano:number): void{
        this.saudeM -= dano
    }
    mostraStatus():void{
        console.log(`${this.nomeM} tem ${this.saudeM} de vida.`)
    }
}