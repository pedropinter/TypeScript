/*var leitor = require("readline-sync")

export interface JogoInterface{
titulo: string
genero: string
classificacaoEtaria: number
getJogo(): void
setJogo(): void
}
export class Jogo implements JogoInterface{
    public titulo: string
    public genero: string
    public classificacaoEtaria: number

    constructor(titulo: string, genero: string, classificacaoEtaria: number){
        this.titulo = titulo
        this.genero = genero
        this.classificacaoEtaria = classificacaoEtaria
    }
    public getJogo(): void{
        console.log(`Titulo: ${this.titulo}/nGenero: ${this.genero}/nClassificacao: ${this.classificacaoEtaria}`);
    }
    public setJogo(){
        let tituloUp = leitor.question("Qual o titulo do Jogo? ")
        let generoUp = leitor.question("/nQual o Genero? ")
        let classUp = leitor.questionInt("/nQual a Classificacao? ")
        this.titulo = tituloUp
        this.genero = generoUp
        this.classificacaoEtaria = classUp
    }
}

export class JogoEletronico extends Jogo implements JogoInterface{
    public plataforma: string

    constructor (titulo: string, genero: string, classificacaoEtaria: number, plataforma: string){
    super(titulo,genero,classificacaoEtaria)
    this.plataforma = plataforma
    }
    public getJogoEletronico(): void{
        console.log(`Jogo: ${this.titulo}/Plataforma: ${this.plataforma}`);
    }
    public setJogoEletronico(){
        let tituloUp = leitor.question("Qual o titulo do Jogo? ")
        let generoUp = leitor.question("/nQual o Genero? ")
        let classUp = leitor.questionInt("/nQual a Classificacao? ")
        this.titulo = tituloUp
        this.genero = generoUp
        this.classificacaoEtaria = classUp
        let plataformaUp = leitor.question("/nQual a Plataforma do jogo? ")
        this.plataforma = plataformaUp

    }
}

export class JogoTabuleiro extends Jogo implements JogoInterface{
    numerodePlayers: number

    constructor (titulo: string, genero: string, classificacaoEtaria: number, numerodePlayers: number){
        super(titulo,genero,classificacaoEtaria)
        this.numerodePlayers = this.numerodePlayers
    }
    public getJogoTabuleiro(): void{
        console.log(`Jogo: ${this.titulo}/nNumPlayers: ${this.numerodePlayers}`);
    }
    public setJogoTabuleiro(){
        let tituloUp = leitor.question("Qual o titulo do Jogo? ")
        let generoUp = leitor.question("/nQual o Genero? ")
        let classUp = leitor.questionInt("/nQual a Classificacao? ")
        this.titulo = tituloUp
        this.genero = generoUp
        this.classificacaoEtaria = classUp
        let numPlayersUp = leitor.question("/nQual a quantidade de Players? ")
        this.numerodePlayers = numPlayersUp

    }
}
/*class BlibiotecaJogos {
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
*/
