import { AjustesDTO } from "./AjustesDTO";

export class ResumenAjustesDTO{
     unidades: number;
     valorizadoNeto: number;
     promUnitario: number;
     tipo: string;
     detalle: AjustesDTO[];

     constructor( unidades: number,
        valorizadoNeto: number,
        promUnitario: number,
        tipo: string,
        detalle: AjustesDTO[]){
            this.unidades = unidades;
            this.valorizadoNeto = valorizadoNeto;
            this.promUnitario = promUnitario;
            this.tipo = tipo;
            this.detalle = detalle
        }
}