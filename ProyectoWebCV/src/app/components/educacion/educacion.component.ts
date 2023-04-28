import { Component } from '@angular/core';
import { educacion } from 'src/app/models/educacion.model';
import { EducacionService } from 'src/app/service/educacion/educacion.service';
import { TokenService } from 'src/app/service/token/token.service';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent {

  educacion: educacion[] = [];

  isLogged = false;

  constructor(private educacionServicio: EducacionService, private tokenService: TokenService){

  }

  ngOnInit(): void{
    this.educacionServicio.getEducacion().subscribe(data=> {this.educacion = data});
    this.cargarEducacion();

    if(this.tokenService.getToken()){
      this.isLogged = true;
    }
    else{
      this.isLogged = false;
    }
  } 

  cargarEducacion() : void{
    this.educacionServicio.getEducacion().subscribe(data => {this.educacion = data;})
  }

  delete(id?:number): void{
    if(id != undefined){
      this.educacionServicio.delete(id).subscribe({
        next: data=> {
          this.cargarEducacion();
        }, error: err => {
          alert("no se pudo borrar la educacion");
        }
      })
    }
  }

}
