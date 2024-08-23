var leitor = require("readline-sync")
class Pessoa{
    nome: string;
    sobrenome: string;
    nome_Pai: string;
    nome_Mae: string;
    numRG: number;
    numCPF: number;
    dataNascimento: string

    constructor(nome:string, sobrenome: string,nome_Pai: string,nome_Mae: string,numRG: number,numCPF: number,dataNascimento: string){
        this.nome = nome
        this.sobrenome = sobrenome
        this.nome_Pai = nome_Pai
        this.nome_Mae = nome_Mae
        this.numRG= numRG
        this.numCPF = numCPF
        this.dataNascimento = dataNascimento
    }
    public setPessoa(){
        let nomeUp = leitor.question("Qual seu nome? ")
        let sobrenomeUp = leitor.question("/nQual seu sobrenome? ")
        let nome_PaiUp = leitor.question("/nQual o nome do seu Pai? ")
        let nome_MaeUp = leitor.question("/nQual o nome da sua Mae? ")
        let numRGUp = leitor.questionInt("/nQual o seu RG? ")        
        let numCPFUp = leitor.questionInt("/nQual o seu CPF? ")
        let dataNascimentoUp = leitor.question("/nQual a sua data de nascimento? ")

        this.nome = nomeUp
        this.sobrenome = sobrenomeUp
        this.nome_Pai = nome_PaiUp
        this.nome_Mae = nome_MaeUp
        this.numRG = numRGUp
        this.numCPF = numCPFUp
        this.dataNascimento = dataNascimentoUp

    }
    public getPessoa(): void{
        console.log(`Nome: ${this.nome} ${this.sobrenome}, Pais: ${this.nome_Mae} ${this.nome_Pai}, RG: ${this.numRG}, CPF: ${this.numCPF}, Nascimento: ${this.dataNascimento}`);
    }
}