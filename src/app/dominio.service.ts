import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class DominioService {

  dominioUrl  ='http://localhost:50192/api/dominios/';
  constructor(private http:HttpClient) { }

  obterDominio(){
    return this.http.get<any[]>(`${this.dominioUrl}`);
  }
}
