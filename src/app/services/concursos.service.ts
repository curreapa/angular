import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ConcursosService {

  constructor(private http:HttpClient) { }

  url = 'http://192.168.1.205:8085/api/';


  getConcursos(data: any){
    let formData: FormData = new FormData();
    formData.append('idSucursal', data.idSucursal);
    formData.append('dateIn', data.dateIn);
    formData.append('dateOut', data.dateOut);
    return this.http.post(this.url+'abastecimiento/concursos', formData)
  }

  getVentasConcursoPorColaborador(data:any){
    let formData: FormData = new FormData();
    formData.append('idSucursal', data.idSucursal);
    formData.append('dateIn', data.dateIn);
    formData.append('dateOut', data.dateOut);
    return this.http.post(this.url+'ventas/porvendedor', formData)
  }

}
