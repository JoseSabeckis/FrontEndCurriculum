import { Injectable } from '@angular/core';
import { TokenService } from '../token/token.service';
import { HTTP_INTERCEPTORS, HttpClientXsrfModule, HttpEvent, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InterceptorService {

  constructor(private tokeService:TokenService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>{
    let intReq = req;

    const token = this.tokeService.getToken();

    if(token != null){
      intReq = req.clone({
        headers: req.headers.set('Authorization', 'Bearer'+token)
      });
    }
    return next.handle(intReq);

  }
}

export const interceptorProvider = [{
    provide: HTTP_INTERCEPTORS,
    useClass: InterceptorService,
    multi: true
}];
