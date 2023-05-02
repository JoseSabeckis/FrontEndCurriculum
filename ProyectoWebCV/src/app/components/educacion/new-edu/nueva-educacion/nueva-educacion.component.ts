import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { educacion } from 'src/app/models/educacion.model';
import { EducacionService } from 'src/app/service/educacion/educacion.service';
import { TokenService } from 'src/app/service/token/token.service';

@Component({
  selector: 'app-nueva-educacion',
  templateUrl: './nueva-educacion.component.html',
  styleUrls: ['./nueva-educacion.component.css']
})
export class NuevaEducacionComponent implements OnInit{

  isLogged=false;
  isLogginDail=false;
  roles!:string[];
  errMsj!:string;

  titulo!: string;
  descripcion!: string;
  years!: string;
  
  constructor(private educacionService: EducacionService, private router: Router, private tokeService:TokenService){

  }

  ngOnInit(): void {
    if(this.tokeService.getToken()){
      this.isLogged = true;
      this.isLogginDail = false;
      this.roles = this.tokeService.getAuthorities();
    }
  }

  onCreate(): void {
    const exp = new educacion(this.descripcion,this.years, this.titulo);

    this.educacionService.save(exp).subscribe({
      next: data => {
        alert("educacion creada");
        this.router.navigate(['']);
      }, error: err => {
        alert("Fallo al crearla verifique datos");
        this.router.navigate([''])
      }
    }
    );
  }

}
