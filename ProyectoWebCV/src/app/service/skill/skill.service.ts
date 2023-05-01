import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { skill } from 'src/app/models/skill.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SkillService {

  Url = environment.firebase.Url + 'api/test/hys/';

  constructor(private http: HttpClient) { }

  public getSkills() : Observable<skill[]>{
    return this.http.get<skill[]>(this.Url+'traer');
  }

  public detail(id: number) : Observable<skill>{
    return this.http.get<skill>(this.Url + `traer/${id}`);
  }

  public save(hys:skill) : Observable<skill>{
    return this.http.post<any>(this.Url + 'crear', hys);
  }

  public update(id:number, hys:skill) : Observable<skill>{
    return this.http.put<any>(this.Url + `modificar/${id}`, hys);
  }

  public delete(id:number) : Observable<skill>{
    return this.http.delete<any>(this.Url + `eliminar/${id}`);
  }

}
