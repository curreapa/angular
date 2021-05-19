import { Component, OnInit } from '@angular/core';
import { ConcursoDTO } from 'src/app/models/concursos/ConcursoDTO';
import { ResultadoConcursoDTO } from 'src/app/models/concursos/ResultadoConcursoDTO';
import { VentasColaborador } from 'src/app/models/ventas/ventasColaborador';
import { ExcelConcursosService } from 'src/app/services/exportables/excel-concursos.service';

@Component({
  selector: 'app-concurso',
  templateUrl: './concurso.component.html',
  styleUrls: ['./concurso.component.css']
})
export class ConcursoComponent implements OnInit {
  
  theme = [ "bg-warning", "bg-success", "bg-primary", "bg-danger"]
  concursos: ConcursoDTO[] = [];
  ventas: VentasColaborador[] = [];


  constructor(private excelService: ExcelConcursosService) { }

  
  ngOnInit(): void {
    this.concursos = this.excelService.concursos
  }

  obtenerConcursos(data: any[]){

    this.concursos = []
    data.forEach((value, index) =>{
      this.concursos.push({
        idConcurso: value.idConcurso,
        descripcion: value.descripcion,
        theme: this.theme[index],
        listaResultado: value.resultadOS
      })
    })
    
    this.excelService.concursos = this.concursos
  }
  obtenerVentas(data: any[]){

    this.ventas = []
    data.forEach((value) =>{
      this.ventas.push({
        nombreVendedor: value.nombreVendedor,
        numeroVentas: value.numeroVentas,
        montoBrutoVentas: value.montoBrutoVentas,
        contribucionVentasDescontandoInc: value.contribucionVentasDescontandoInc,
        margenVentasDescontandoInc: value.margenVentasDescontandoInc,
        numeroProductos: value.numeroProductos,
        unidadesTotalesVendidas: value.unidadesTotalesVendidas,
        productosIncentivos: value.productosIncentivos,
        efectividad: value.efectividad,
        promedioUnidadVenta: value.promedioUnidadVenta,
        montoVentaPromedio: value.montoVentaPromedio
      })
    })
  
  }

  exportarExcel(){
    this.excelService.generateExcelConcurso(this.concursos, this.ventas,"Concursos","Sucusal");
  }

}
