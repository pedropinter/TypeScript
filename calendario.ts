import { generateKey } from "crypto"
let rl = require('readline-sync')

export interface Data {
    constructor(dia: number, mes: number, ano: number);
    compara(outraData: Data): void;
    getDia(): void;
    getMes(): void;
    getMesExtenso(): void;
    getAno(): void;
    isBissexto(): void;
    clone(): Data;
}
export class Data implements Data {
    dia: number
    mes: number
    ano: number
    constructor(dia: number, mes: number, ano: number){
        this.dia = dia
        this.mes = mes
        this.ano = ano
    }
    getDia(): void{
        console.log(`DIA: ${this.dia}`)
    }
    getMes(): void{
        console.log(`MES: ${this.mes}`)
    }
    getAno(): void{
        console.log(`ANO: ${this.ano}`)
    }
    setData(): void{
        let dia = rl.questionInt("Digite o dia: ")
        let mes = rl.questionInt("Digite o mes: ") 
        let ano = rl.questionInt("Digite o ano: ")
    }
    compara(outraData: Data): void{
        if (this.dia == outraData.dia){
            console.log(`Dias Iguais`);
        }
        else{
            console.log(`Dias Diferentes`)
        } 
        if (this.mes == outraData.mes){
            console.log(`Meses Iguais`);
        }
        else{
            console.log(`Meses Diferentes`)
        } 
        if (this.ano == outraData.ano){
            console.log(`Anos Iguais`);
        }
        else {
            console.log(`Anos Diferentes`)
        }
    }
    getMesExtenso (): void{
        if (this.mes == 1){
            const getMes = 'Janeiro'
        }
        else if (this.mes == 2){
            const getMes = 'Fevereiro'
        }
        else if (this.mes == 3){
            const getMes = 'Marco'
        }
        else if (this.mes == 4){
            const getMes = 'Abril'
        }
        else if (this.mes == 5){
            const getMes = 'Maio'
        }
        else if (this.mes == 6){
            const getMes = 'Junho'
        }
        else if (this.mes == 7){
            const getMes = 'Julho'
        }
        else if (this.mes == 8){
            const getMes = 'Agosto'
        }
        else if (this.mes == 9){
            const getMes = 'Setembro'
        }
        else if (this.mes == 10){
            const getMes = 'Outubro'
        }
        else if (this.mes == 11){
            const getMes = 'Novembro'
        }
        else if (this.mes == 12){
            const getMes = 'Dezembro'
        }
        else {
            const getMes = 'Nao Encontrado'
        }
    }
    isBissexto(): void{
        if(this.ano == 2000 || this.ano == 1000 || this.ano == 0){
            console.log('ANO BISSEXTO')
        }
        else if(this.ano % 4 === 0 && this.ano % 100 != 0) {
            console.log('ANO BISSEXTO')
        }
        else {
            console.log('NAO BISSEXTO')
        }
    }
    clone(): Data{
        let dataDois = new Data(this.dia,this.mes,this.ano)
        return dataDois
    }
}

let dataum = new Data(10, 10, 2000)
let datadois = new Data(9, 10, 2001)

dataum.isBissexto()

