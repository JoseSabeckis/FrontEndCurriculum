import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { educacion } from 'src/app/models/educacion.model';

@Injectable({
  providedIn: 'root'
})
export class EducacionService {

  Url = 'http://localhost:8080/api/test/educacion/';

  constructor(private http: HttpClient) { }

  public getEducacion() : Observable<educacion>{
    return this.http.get<educacion>(this.Url+'traer/principal');
  }

}
