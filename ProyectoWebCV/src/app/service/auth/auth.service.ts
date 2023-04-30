import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { JwtDto } from 'src/app/models/jwt-dto.model';
import { LoginUsuario } from 'src/app/models/login-usuario.model';
import { NuevoUsuario } from 'src/app/models/nuevo-usuario';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  authURL = environment.Url + 'api/auth/';

  constructor(private httpClient: HttpClient) { }

  public nuevo(nuevoUsuario: NuevoUsuario): Observable<any>{
    return this.httpClient.post<any>(this.authURL+'registrarse', nuevoUsuario);
  }

  public login(loginUsuario: LoginUsuario): Observable<any>{
    return this.httpClient.post<JwtDto>(this.authURL +'logearse', loginUsuario);
  }

}
