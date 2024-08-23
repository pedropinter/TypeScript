class Livro{
    titulo: string
    autor: string
    anoPublicacao: number

    constructor(titulo: string, autor: string, anoPublicacao: number){
        this.titulo = titulo
        this.autor = autor
        this.anoPublicacao = anoPublicacao
    }
    obterDetalhes(): void{
        console.log(`Sou o ${this.autor}, meu livro se chama ${this.titulo} e foi publicado em ${this.anoPublicacao}`)
    }
}
let livro = new Livro ("shampas","as aventuras", 8)
livro.obterDetalhes()