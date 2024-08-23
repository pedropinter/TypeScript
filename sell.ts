/*var leitor = require('readline-sync')
class Produto {
    nome: string
    precoproduto: number
    precofornecedor: number
    marca:string
    tamanho: number
    compraPreco: number

    constructor(nome: string, precoproduto: number,precofornecedor: number, marca: string, tamanho: number, compraPreco: number){
        this.nome   = nome
        this.precoproduto  = precoproduto
        this.precofornecedor = precofornecedor
        this.marca = marca
        this.tamanho = tamanho
        this.compraPreco = compraPreco
    }

    LucroProduto(): void{
        console.log(`O Lucro do meu produto é de ${(this.compraPreco - this.precoproduto)}`)
    }
    getProduto(): void{
        console.log(`Produto: ${this.nome}/nPreco: ${this.precoproduto}/nMarca: ${this.marca}/nTamanho: ${this.tamanho}/nCaixa: ${this.compraPreco}`);
    }

    setProduto(): void{
        let nomeUp = leitor.question("Qual o seu produto?/n ")
        let precoprodutoUp = leitor.questionInt("Qual o preco do produto?/n ")
        let precofornecedorUp = leitor.question("Qual a marca do produto?/n ")
        let marcaUp = leitor.question("Qual a marca do produto?/n ")
        let tamanhoUp = leitor.questionInt("Qual o tamanho do produto?/n ")
        let compraPrecoUp = leitor.questionInt("Qual o valor de seu carrinho?/n ")
        this.nome = nomeUp
        this.precoproduto = precoprodutoUp
        this.precofornecedor = precofornecedorUp
        this.marca = marcaUp
        this.tamanho = tamanhoUp
        this.compraPreco = compraPrecoUp
    }
    calculoLucro(): void{
        let lucro = this.precofornecedor - this.precoproduto
        console.log(`O Lucro é de: ${lucro}`)
    }
}
class Venda {
    pro: Produto
    qtd: number
    valortotal: number
    data: string

    constructor(pro: Produto, qtd: number, valortotal: number, data: string){
        this.pro = pro
        this.qtd = qtd
        this.valortotal = this.valorvenda()

        this.data = data
    }
    getVenda(): void{
        console.log(`Produto: ${this.pro}/nQuantidade: ${this.qtd}/nValor total: ${this.valortotal}/nData da compra ${this.data}`)
    }
    setVenda(): void{
        let qtdUp = leitor.questionInt("Qual a quantidade?/n ")
        let valortotalUp = leitor.questionInt("Qual o valor tota?/n ")
        let dataUp = leitor.question("Qual a data?/n ")
        this.qtd = qtdUp
        this.valortotal = valortotalUp
        this.data = dataUp
        }
    valorvenda(): number{
        return this.qtd * this.pro.precoproduto
    }
    desconto(): void{
        let desconto = (this.pro.precoproduto * 20) / 100
        console.log(`O Produto com 20% de desconto é: ${desconto}`)
    }
}
let nomeProd = leitor.question
let marcaProd = leitor.question
let precoProd = leitor.questionInt
let precoForn = leitor.questionInt

let produtoUm 
let televisao 
let vendaUm
let vendaTv
*/