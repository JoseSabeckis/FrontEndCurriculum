import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { acerca } from '../models/acerca.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AcercaService {

  Url = 'http://localhost:8080/acerca/'; 

  constructor(private http: HttpClient) { }

  public getAcercaDe() : Observable<acerca>{
    return this.http.get<acerca>(this.Url+'traer/perfil');
  }

}
