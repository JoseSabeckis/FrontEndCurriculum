import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { persona } from 'src/app/models/persona.model';

@Injectable({
  providedIn: 'root'
})
export class PersonaServicioService {

  Url = 'http://localhost:8080/api/test/personas/';

  constructor(private http: HttpClient) { }

  public getPersona(): Observable<persona>{
    return this.http.get<persona>(this.Url+'traer/perfil');    
  }

}
