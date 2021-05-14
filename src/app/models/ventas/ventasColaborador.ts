export class VentasColaborador{

    nombreVendedor: string;
    numeroVentas: number;
    montoBrutoVentas:number;
    contribucionVentasDescontandoInc:number;
    margenVentasDescontandoInc:number;
    numeroProductos:number;
    unidadesTotalesVendidas:number;
    productosIncentivos:number;
    efectividad:number;
    promedioUnidadVenta:number;
    montoVentaPromedio:number;

    constructor(nombreVendedor: string,
        numeroVentas: number,
        montoBrutoVentas:number,
        contribucionVentasDescontandoInc:number,
        margenVentasDescontandoInc:number,
        numeroProductos:number,
        unidadesTotalesVendidas:number,
        productosIncentivos:number,
        efectividad:number,
        promedioUnidadVenta:number,
        montoVentaPromedio:number){
            this.nombreVendedor = nombreVendedor
            this.numeroVentas = numeroVentas
            this.montoBrutoVentas = montoBrutoVentas
            this.contribucionVentasDescontandoInc = contribucionVentasDescontandoInc
            this.margenVentasDescontandoInc = margenVentasDescontandoInc
            this.numeroProductos = numeroProductos
            this.unidadesTotalesVendidas = unidadesTotalesVendidas
            this.productosIncentivos = productosIncentivos
            this.efectividad = efectividad
            this.promedioUnidadVenta = promedioUnidadVenta
            this.montoVentaPromedio = montoVentaPromedio

    }
}