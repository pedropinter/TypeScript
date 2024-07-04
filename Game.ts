var leitor = require("readline-sync")
class Jogo{
    protected titulo: string
    protected genero: string
    protected classificacaoEtaria: number

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
class JogoEletronico extends Jogo{
    protected plataforma: string

    super (titulo: string, genero: string, classificacaoEtaria: number, plataforma: string){
        this.titulo = titulo
        this.genero = genero
        this.classificacaoEtaria = classificacaoEtaria
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
class JogoTabuleiro extends Jogo{
    protected numerodePlayers: number

    super (titulo: string, genero: string, classificacaoEtaria: number, numerodePlayers: number){
        this.titulo = titulo
        this.genero = genero
        this.classificacaoEtaria = classificacaoEtaria
        this.numerodePlayers = numerodePlayers
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
class BlibiotecaJogos {
    protected jogos: Jogo[]
    
    
    


}