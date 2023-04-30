import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { acerca } from '../models/acerca.model';
import { Observable } from 'rxjs';
import { environment } from 'src/environment/environment';

@Injectable({
  providedIn: 'root'
})
export class AcercaService {

  Url = environment.Url + 'api/test/acerca/';

  constructor(private http: HttpClient) { }

  public getAcercaDe() : Observable<acerca>{
    return this.http.get<acerca>(this.Url+'traer/perfil');
  }

  public update(id:number, acr:acerca) : Observable<acerca>{
    return this.http.put<any>(this.Url+`modificar/${id}`, acr);
  }
 
}
