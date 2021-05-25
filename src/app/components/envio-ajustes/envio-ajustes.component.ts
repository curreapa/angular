import { Component, OnInit } from '@angular/core';
import { AjustesDTO } from 'src/app/models/ajustes/AjustesDTO';
import { ResumenAjustesDTO } from 'src/app/models/ajustes/ResumenAjustesDTO';

@Component({
  selector: 'app-envio-ajustes',
  templateUrl: './envio-ajustes.component.html',
  styleUrls: ['./envio-ajustes.component.css']
})
export class EnvioAjustesComponent implements OnInit {

 
  ajustes: ResumenAjustesDTO[] = [];
  constructor() { }

  ngOnInit(): void {
    
  }

  obtenerAjustes(data: any[]){
    this.ajustes = [];
    data.forEach((value) =>{
      this.ajustes.push({
        unidades: value.unidades,
        valorizadoNeto: value.valorizadoNeto,
        promUnitario: value.promUnitario,
        tipo: value.tipo,
        detalle: value.detalle
      })
    })
  }

}
