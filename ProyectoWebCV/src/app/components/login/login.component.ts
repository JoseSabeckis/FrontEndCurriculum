import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginUsuario } from 'src/app/models/login-usuario.model';
import { AuthService } from 'src/app/service/auth/auth.service';
import { TokenService } from 'src/app/service/token/token.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  isLogged=false;
  isLogginDail=false;

  loginUsuario!:LoginUsuario;
  username!:string;
  password!:string;
  roles!:string[];
  errMsj!:string;

  constructor(private tokeService:TokenService, private authService:AuthService, private router:Router) {

  }

  ngOnInit(): void {
    if(this.tokeService.getToken()){
      this.isLogged = true;
      this.isLogginDail = false;
      this.roles = this.tokeService.getAuthorities();
    }
  }

  onLogin(): void{
    this.loginUsuario = new LoginUsuario(this.username, this.password)

    this.authService.login(this.loginUsuario).subscribe(data=>{
      this.isLogged = true;
      this.isLogginDail = false;
      this.tokeService.setToken(data.token);//----------
      this.tokeService.setUserName(data.setUserName);//-------------------
      this.roles = data.authorities;
      this.router.navigate([''])
    }, err => {
      this.isLogged = false;
      this.isLogginDail = true;
      this.errMsj = err.error.mensaje;
      console.log(this.errMsj)   
    });

  }

}
