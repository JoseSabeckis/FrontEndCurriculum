import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { acerca } from '../models/acerca.model';
import { Observable } from 'rxjs';
import { enviroment } from 'src/enviroment/enviroment';

@Injectable({
  providedIn: 'root'
})
export class AcercaService {

  Url = enviroment.Url + 'api/test/acerca/';

  constructor(private http: HttpClient) { }

  public getAcercaDe() : Observable<acerca>{
    return this.http.get<acerca>(this.Url+'traer/perfil');
  }

  public update(id:number, acr:acerca) : Observable<acerca>{
    return this.http.put<any>(this.Url+`modificar/${1}`, acr);
  }
 
}
