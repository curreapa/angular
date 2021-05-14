import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Sucursal } from 'src/app/models/shared/Sucursal';
import {map} from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class UtilsService {

  constructor(private http:HttpClient) { }

  url = 'http://192.168.1.205:8085/api/sucursal';

  getSucursales(){
    return this.http.get(this.url+'/fetch')
  }
}
