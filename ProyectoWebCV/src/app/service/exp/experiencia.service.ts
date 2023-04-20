import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { experiencia } from 'src/app/models/experiencia.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExperienciaService {

  Url = 'http://localhost:8080/experiencia/'; 

  constructor(private http: HttpClient) { }

  public getExperiencia() : Observable<experiencia>{
    return this.http.get<experiencia>(this.Url+'traer/principal');
  }

}
