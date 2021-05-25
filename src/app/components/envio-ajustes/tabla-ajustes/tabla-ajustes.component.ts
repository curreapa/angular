import { Component, OnInit, Input} from '@angular/core';
import { ResumenAjustesDTO } from 'src/app/models/ajustes/ResumenAjustesDTO';

@Component({
  selector: 'app-tabla-ajustes',
  templateUrl: './tabla-ajustes.component.html',
  styleUrls: ['./tabla-ajustes.component.css']
})
export class TablaAjustesComponent implements OnInit {

  @Input()data: any

  constructor() { }

  ngOnInit(): void {
    this.data as ResumenAjustesDTO
   
  }

}
