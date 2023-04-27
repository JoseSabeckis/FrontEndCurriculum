import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { experiencia } from 'src/app/models/experiencia.model';
import { ExperienciaService } from 'src/app/service/exp/experiencia.service';
import { TokenService } from 'src/app/service/token/token.service';

@Component({
  selector: 'app-upd-experiencia',
  templateUrl: './upd-experiencia.component.html',
  styleUrls: ['./upd-experiencia.component.css']
})
export class UpdExperienciaComponent implements OnInit {

  isLogged=false;
  isLogginDail=false;
  roles!:string[];
  errMsj!:string;

  titulo!: string;
  descripcion!: string;
  years!: string;

  constructor(private experienciaService: ExperienciaService, private router: Router, private tokeService:TokenService) {

  }

  ngOnInit(): void {
    if(this.tokeService.getToken()){
      this.isLogged = true;
      this.isLogginDail = false;
      this.roles = this.tokeService.getAuthorities();
    }
  }

  onCreate(): void {
    const exp = new experiencia(this.titulo, this.years, this.descripcion);

    this.experienciaService.save(exp).subscribe({
      next: data => {
        alert("experiencia creada");
        this.router.navigate(['']);
      }, error: err => {
        alert("Fallo");
        this.router.navigate([''])
      }
    }
    );
  }

}
