import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { experiencia } from 'src/app/models/experiencia.model';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ExperienciaService {

  Url = environment.firebase.Url + 'api/test/experiencia/'; 

  constructor(private http: HttpClient) { }

  public getExperiencias() : Observable<experiencia[]>{
    return this.http.get<experiencia[]>(this.Url+'traer');
  }

  public detail(id: number) : Observable<experiencia>{
    return this.http.get<experiencia>(this.Url + `traer/${id}`);
  }

  public save(exp:experiencia) : Observable<experiencia>{
    return this.http.post<any>(this.Url + 'crear', exp);
  }

  public update(id:number, exp:experiencia) : Observable<experiencia>{
    return this.http.put<any>(this.Url + `modificar/${id}`, exp);
  }

  public delete(id:number) : Observable<experiencia>{
    return this.http.delete<any>(this.Url + `eliminar/${id}`);
  }

}
