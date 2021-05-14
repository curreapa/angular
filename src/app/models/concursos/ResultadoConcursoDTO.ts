export class ResultadoConcursoDTO{
    
    item: number;
    grupo: string;
    logroUnit: number;
    metaUnit: number;
    logroPorc: number;
    faltaPorc: number;

    constructor(item: number, grupo:string, logroUnit:number, metaUnit:number, logroPorc:number, faltaPorc:number) {
        this.item = item;
        this.grupo = grupo;
        this.logroUnit = logroUnit;
        this.metaUnit = metaUnit;
        this.logroPorc = logroPorc;
        this.faltaPorc = faltaPorc;
    }
}