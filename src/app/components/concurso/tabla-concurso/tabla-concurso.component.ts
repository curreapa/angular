import { Component, OnInit, ElementRef, Injector, Input } from '@angular/core';
import { ConcursoDTO } from 'src/app/models/concursos/ConcursoDTO';
import { ResultadoConcursoDTO } from 'src/app/models/concursos/ResultadoConcursoDTO';
import { ConcursosService } from 'src/app/services/concursos.service';

@Component({
  selector: 'app-tabla-concurso',
  templateUrl: './tabla-concurso.component.html',
  styleUrls: ['./tabla-concurso.component.css']
})
export class TablaConcursoComponent implements OnInit {

  @Input()data: any
  theme: string = " "
  title: string = " "
  resultados: ResultadoConcursoDTO[] = []

  constructor () { 
  
  }

  ngOnInit(): void {
    this.data as ConcursoDTO
    this.title = this.data.descripcion
    this.theme = this.data.theme
    this.resultados = this.data.listaResultado
  }

  formatearDecimal(valor: any){
    return isNaN(valor)? valor:parseFloat(valor).toFixed(2)
  }
}
