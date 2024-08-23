const rl = require("readline-sync")
export class Ponto2D{
    x: number
    y:number
    constructor(){
    this.x = 0
    this.y = 0 
    }
    getPonto(): void{
        console.log(`
        X = ${this.x}
        Y = ${this.y}
        `)
    }
    setPonto(): void{
    this.x = rl.questionInt("Digite o x: ")
    this.y = rl.questionInt("Digite o y: ") 
    }
    mover(): void{
        this.getPonto()
        this.setPonto()
    }
    equals(outroPonto: Ponto2D): boolean{
        if((Math.sqrt((outroPonto.x-this.x)**2+(outroPonto.y-this.y)**2))==0){
            return true
        }else{
            return false
        }
    }
    toString(): string{
        return(`
        X = ${this.x}
        Y = ${this.y}
        `)
    }
    distancia(outroPonto: Ponto2D): number {
        let deltaX = outroPonto.x - this.x;
        let deltaY = outroPonto.y - this.y;
        return Math.sqrt(deltaX * deltaX + deltaY * deltaY);
    }
    clone(): Ponto2D{
        let clone = new PontoCoordenadas(this.x,this.y)
        return clone
    }
}
export class outroPonto extends Ponto2D{
    constructor(outroPonto: Ponto2D){
        super()
        this.x = outroPonto.x
        this.y = outroPonto.y
    }
    
}
export class PontoCoordenadas extends Ponto2D{
    constructor(x: number,y: number){
        super()
        this.x = x
        this.y = y
    }
}