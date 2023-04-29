import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { persona } from 'src/app/models/persona.model';
import { enviroment } from 'src/enviroment/enviroment';

@Injectable({
  providedIn: 'root'
})
export class PersonaServicioService {

  Url = enviroment.Url + 'api/test/personas/';

  constructor(private http: HttpClient) { }

  public getPersona(): Observable<persona>{
    return this.http.get<persona>(this.Url+'traer/perfil');    
  }

  public UpdatePersona(id: number, persona: persona): Observable<any>{
    return this.http.put<any>(this.Url+`modificar/${id}`, persona);
  }

}
