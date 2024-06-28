var leitor = require('readline-sync')
class Produto {
    nome: string
    preco: number
    marca:string
    tamanho: number
    compraPreco: number

    constructor(nome: string, preco: number, marca: string, tamanho: number, compraPreco: number){
        this.nome   = nome
        this.preco  = preco
        this.marca = marca
        this.tamanho = tamanho
        this.compraPreco = compraPreco
    }

    LucroProduto(): void{
        console.log(`O Lucro do meu produto é de ${(this.compraPreco - this.preco)}`)
    }
    getProduto(): void{
        console.log(`Produto: ${this.nome}/nPreco: ${this.preco}/nMarca: ${this.marca}/nTamanho: ${this.tamanho}/nCaixa: ${this.compraPreco}`);
    }

    setProduto(): void{
        let nomeUp = leitor.question("Qual o seu produto?/n ")
        let precoUp = leitor.questionInt("Qual o preco do produto?/n ")
        let marcaUp = leitor.question("Qual a marca do produto?/n ")
        let tamanhoUp = leitor.questionInt("Qual o tamanho do produto?/n ")
        let compraPrecoUp = leitor.questionInt("Qual o valor de seu carrinho?/n ")
        this.nome = nomeUp
        this.preco = precoUp
        this.marca = marcaUp
        this.tamanho = tamanhoUp
        this.compraPreco = compraPrecoUp
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
        this.valortotal = valortotal
        this.data = data
    }
    getVenda(): void{
        console.log(`Produto: ${this.pro}/nQuantidade: ${this.qtd}/nValor total: ${this.valortotal}/nData da compra ${this.data}`)
    }
    setVenda(){
        let qtdUp = leitor.questionInt("Qual a quantidade?/n ")
        let valortotalUp = leitor.questionInt("Qual o valor tota?/n ")
        let dataUp = leitor.question("Qual a data?/n ")
        this.qtd = qtdUp
        this.valortotal = valortotalUp
        this.data = dataUp
        }
    }
    let proNovo = new Produto("", 0, "", 0, 0)
    let vendaNovo = new Venda(proNovo, 0, 0, "")
        let menu = true
        while(menu){
        
        let questao = leitor.questionInt("Escolha a opção: \n 1 - ., \n 2 - , \n 3 - ., \n 4 - , \n 5 - ., \n 6 - , \n 0 - Sair \n Escreva a opção:")
            
        switch(questao){
        case 1:
        proNovo.setProfessor()
        break
        case 2:
        vendaNovo.setEscola()
        break
        case 3:
        proNovo.setProfessor()
        break
        case 4:
        vendaNovo.setEscola()
        break
        case 5:
        proNovo.getProfessor()
        break
        case 6:
        vendaNovo.getEscola()
        break
        case 0:
        !menu
        process.exit(0)        
    }
}
