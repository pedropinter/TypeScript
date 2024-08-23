import { generateKey } from "crypto"
let rl = require('readline-sync')
interface Voo {
    constructor(numeroVoo: string, data: string);
    proximoLivre(): void;
    verifica(cadeira: number): boolean;
    ocupa(cadeira: number): boolean;
    vagas(): number;
    getVoo(): void;
    getData(): string;
    clone(): Voo;
}
class Voo implements Voo {
    public numeroVoo: string
    public data: string
    private cadeiras: Array<number> = this.criarCadeiras()
    constructor(numeroVoo: string, data: string) {
        this.numeroVoo = numeroVoo
        this.data = data
    }
    public criarCadeiras(): Array<number> {
        let acentos: Array<number> = []
        for (let i = 0; i < 100; i++) {
            acentos.push(0)
        }
        return acentos
    }
    setVoo(): void {
        let numeroVoo = rl.question("Digite o Numero do Voo: ")
        let data = rl.question("Digite a data: ")
        let cadeira = rl.questionInt("Digite sua cadeira: ")
    }
    getVoo(): void {
        console.log(`NumeroVoo: ${this.numeroVoo}\nData: ${this.data}\nCadeira: ${this.cadeiras.length}`)
    }
    proximoLivre(): void {
        for (let i = 0; i < 100; i++) {
            if (this.cadeiras[i] == 0) {
                console.log(i + 1)
                break
            }
        }
    }
    verifica(cadeira: number): boolean {
        let verificar = cadeira - 1
        if (this.cadeiras[verificar] === 0) {
            return true
        } else {
            return false
        }
    }
    ocupa(cadeira: number): boolean{
        if(!this.verifica(cadeira)){
            this.criarCadeiras[cadeira-1] = true 
            return true
        }
        else {
            return false
        }
    }
    vagas(): number{
        return this.cadeiras.filter((verifica) => verifica).length
    }
    clone(): Voo{
        let novoVoo = new Voo(this.numeroVoo,this.data)
        novoVoo.cadeiras = this.cadeiras
        return novoVoo
    }

}
