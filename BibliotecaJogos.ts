import { Jogo } from "../bGames.ts/Game"
7[] 
export class BlibiotecaJogos {
    public jogos: Jogo[]

    constructor(){
        this.jogos = []
    }
    public addJogos(jogo: Jogo): void {
        this.jogos.push(jogo)
    }
    public removerJogo(): void{
        console.log(this.jogos)
        let titulo = leitor.question('Insira um titulo para deletar: ')
        this.jogos = this.jogos.filter(jogo => jogo.titulo !== titulo)
    }
}
let jogoUm = new Jogo("RD2","Acao",14)
let estante = new BlibiotecaJogos()

estante.addJogos(jogoUm)
