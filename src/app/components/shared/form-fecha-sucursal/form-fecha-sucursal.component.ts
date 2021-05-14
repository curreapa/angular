import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormBuilder  } from '@angular/forms';
import { Sucursal } from 'src/app/models/shared/Sucursal';
import { ConcursosService } from 'src/app/services/concursos.service';
import { UtilsService } from 'src/app/services/utils.service';

@Component({
  selector: 'app-form-fecha-sucursal',
  templateUrl: './form-fecha-sucursal.component.html',
  styleUrls: ['./form-fecha-sucursal.component.css']
})
export class FormFechaSucursalComponent implements OnInit {

  @Output() enviarConcursos = new EventEmitter<any>();
  @Output() enviarVentas = new EventEmitter<any>();
  @Input() vista: string = " ";

  sucursales: Sucursal[] = []
  sucursalForm = this.fb.group({
    selectSucursal: [' '],
    fechaDesde: [' '],
    fechaHasta: [' ']
  })
  constructor(private fb:FormBuilder ,private utilService: UtilsService, private concursoService: ConcursosService) {
     
  }

  ngOnInit(): void {
      this.utilService.getSucursales().subscribe((data: any)=>{
        for(const d of data.listaResponse){
         this.sucursales.push({
          idSucursal: d.idSucursal,
          descripcion: d.descripcion  
        })
        }
      })
  }

  buscar(){

    let data = {
        idSucursal: this.sucursalForm.value.selectSucursal,
        dateIn: this.sucursalForm.value.fechaDesde,
        dateOut: this.sucursalForm.value.fechaHasta
    }
    
    switch (this.vista) {
      case "concursos":
        this.concursoService.getConcursos(data).subscribe((data: any )=>{
          this.enviarConcursos.emit(data.listaResponse)
        });
        this.concursoService.getVentasConcursoPorColaborador(data).subscribe((data: any)=>{
          this.enviarVentas.emit(data.listaResponse)
        })
        break;
    
      default:
        break;
    }
    
  }

}
