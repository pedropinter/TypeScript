class Data{
    dia: number
    mes: number
    ano: number

    constructor(dia:number,mes:number,ano:number){
        this.dia = dia
        this.mes = mes
        this.ano = ano
    }
    diadeHoje(): void{
        console.log(`Hoje é ${this.dia}/${this.mes}/${this.ano}`)
    }
}

let novodia = new Data (23,11,2024)
novodia.diadeHoje()