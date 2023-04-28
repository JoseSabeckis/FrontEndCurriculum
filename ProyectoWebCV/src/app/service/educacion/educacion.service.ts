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

  public getEducacion() : Observable<educacion[]>{
    return this.http.get<educacion[]>(this.Url+'traer');
  }

  public detail(id: number) : Observable<educacion>{
    return this.http.get<educacion>(this.Url + `traer/${id}`);
  }

  public save(exp:educacion) : Observable<educacion>{
    return this.http.post<any>(this.Url + 'crear', exp);
  }

  public update(id:number, exp:educacion) : Observable<educacion>{
    return this.http.put<any>(this.Url + `modificar/${id}`, exp);
  }

  public delete(id:number) : Observable<educacion>{
    return this.http.delete<any>(this.Url + `eliminar/${id}`);
  }

}
