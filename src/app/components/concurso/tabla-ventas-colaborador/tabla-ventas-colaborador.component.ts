import { Component, OnInit, Input } from '@angular/core';
import { VentasColaborador } from 'src/app/models/ventas/ventasColaborador';

@Component({
  selector: 'app-tabla-ventas-colaborador',
  templateUrl: './tabla-ventas-colaborador.component.html',
  styleUrls: ['./tabla-ventas-colaborador.component.css']
})
export class TablaVentasColaboradorComponent implements OnInit {
  @Input()data: any;
  ventas: VentasColaborador[]=[]

  constructor() { }

  ngOnInit(): void {
    this.data as VentasColaborador
    this.ventas = this.data
    console.log(this.data)
  }
  formatearDecimal(valor: any, n:number){
    return isNaN(valor)? valor:parseFloat(valor).toFixed(n)
  }
  redondearValor(valor: any){
    return Math.round(valor)
  }
}
