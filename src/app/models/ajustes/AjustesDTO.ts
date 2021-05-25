export class AjustesDTO{
    fecha: string;
    producto: string;
    cantidad: number;
    costoUnitario: number;
    total: number;
    obs: string

    constructor( fecha: string,
        producto: string,
        cantidad: number,
        costoUnitario: number,
        total: number,
        obs: string ){
        
        this.fecha = fecha;
        this.producto = producto;
        this.cantidad = cantidad;
        this.costoUnitario = costoUnitario;
        this.total = total;
        this.obs = obs;
    }
}