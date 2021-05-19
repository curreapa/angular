import { Injectable } from '@angular/core';
import { Workbook, TableProperties, Worksheet } from 'exceljs';
import * as fs from 'file-saver';
import { ConcursoDTO } from 'src/app/models/concursos/ConcursoDTO';
import { VentasColaborador } from 'src/app/models/ventas/ventasColaborador';

@Injectable({
  providedIn: 'root'
})
export class ExcelConcursosService {

  sucursal: number = 0;
  concursos: ConcursoDTO[] = [];
  ventas: VentasColaborador[] = [];
  libro = new Workbook();

  constructor() { }

  generateExcelConcurso(data: ConcursoDTO[],  dataVenta: VentasColaborador[],tituloHoja: string, sucursal:string){
    let colores = ['ffff00','c5e0b4','9dc3e6','fbe5d6','e38565']
    let encabezados = ["Grupo", "Logro Unit", "Meta Unit", "Logro Porc", "Falta Porc"];
    
    let hoja = this.libro.addWorksheet(tituloHoja);
    hoja.getColumn("A").width = 40
    let mergeA = 1;
    let mergeB = 2;
    
    
    data.forEach((data, index) =>{
      hoja.getCell('A'+mergeA).value = data.descripcion
      hoja.mergeCells('A'+mergeA+':E'+mergeB);
      hoja.getRow(mergeA).eachCell(cell=>{
        cell.font = {bold: true}
      })
    
      mergeA += 4+data.listaResultado.length
      mergeB += 4+data.listaResultado.length
      
      let encabezado = hoja.addRow(encabezados);


      encabezado.eachCell((cell, number)=>{
        let color = colores[index];
        cell.fill = {
          type: 'pattern',
          pattern: 'solid',
          fgColor: { argb: color },
          bgColor: { argb: color}
        }
        cell.border = { top: { style: 'thin' }, left: { style: 'thin' }, bottom: { style: 'thin' }, right: { style: 'thin' } };
      });

      data.listaResultado.forEach(ob =>{
        
        let fila = hoja.addRow([ob.grupo, ob.logroUnit, ob.metaUnit, ob.logroPorc, ob.faltaPorc]);
        let cell = fila.getCell(5);
        cell.numFmt = '0.00'
        let cellDecimal = fila.getCell(4);
        cellDecimal.numFmt = '0.00'
        let color = colores[index];
        cell.fill={
          type: 'pattern',
          pattern: 'solid',
          fgColor: {argb:  color}
        }
      });
      hoja.addRow([])
      hoja.addRow([])
    });

    this.generarTablaVentas(dataVenta, hoja);


    this.libro.xlsx.writeBuffer().then((b)=>{
      let blob = new Blob([b], {type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
      fs.saveAs(blob, 'protocolo'+sucursal+'.xlsx')
    })
  }

  generarTablaVentas( dataVenta: VentasColaborador[], hoja:Worksheet){
    let encabezados = ["Vendedor", "Ventas", "Monto Bruto", "Contribuciones Des Inc", "Margen Des Inc", "Productos Vendidos", "Unidades Totales Vendidas", "Unidades Con Incentivo", "Efectividad", "Promedio Unidad/Venta", "Monto Venta Promedio"];
    let encabezado = hoja.addRow(encabezados);

    encabezado.eachCell((cell, number)=>{
      let color = '4472C4';
      cell.fill = {
        type: 'pattern',
        pattern: 'solid',
        fgColor: { argb: color },
        bgColor: { argb: color}
      }
      cell.border = { top: { style: 'thin' }, left: { style: 'thin' }, bottom: { style: 'thin' }, right: { style: 'thin' } };
    });

    dataVenta.forEach((ob)=>{
      let fila = hoja.addRow([ob.nombreVendedor, ob.numeroVentas, ob.montoBrutoVentas, ob.contribucionVentasDescontandoInc, ob.margenVentasDescontandoInc, ob.numeroProductos, ob.unidadesTotalesVendidas, ob.productosIncentivos, ob.efectividad, ob.promedioUnidadVenta, ob.montoVentaPromedio]);
    });
  }
}

