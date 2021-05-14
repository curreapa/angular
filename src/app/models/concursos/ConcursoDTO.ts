import { ResultadoConcursoDTO } from "./ResultadoConcursoDTO";

export class ConcursoDTO {

    idConcurso:number;
    descripcion:string;
    theme: string;
    listaResultado: ResultadoConcursoDTO[]

    
    constructor(idConcurso:number, descripcion:string, theme: string,listaResultado: ResultadoConcursoDTO[]){
        this.idConcurso = idConcurso;
        this.descripcion = descripcion;
        this.listaResultado = listaResultado;
        this.theme = theme
    }
    

}