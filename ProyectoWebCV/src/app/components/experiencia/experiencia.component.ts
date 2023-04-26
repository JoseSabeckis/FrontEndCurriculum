import { Component, OnInit } from '@angular/core';
import { experiencia } from 'src/app/models/experiencia.model';
import { ExperienciaService } from 'src/app/service/exp/experiencia.service';
import { TokenService } from 'src/app/service/token/token.service';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit{
  
  experiencia: experiencia[] = [];

  constructor(public experienciaServicio: ExperienciaService, private tokenServicio: TokenService ){ }

  isLogged = false;

  ngOnInit(): void{
    
    this.cargarExperiencia();

    if(this.tokenServicio.getToken()){
      this.isLogged = true;
    }
    else{
      this.isLogged = false;
    }
    //this.experienciaServicio.getExperiencia().subscribe(data=> {this.experiencia = data});
  } 

  cargarExperiencia() : void{
    this.experienciaServicio.getExperiencias().subscribe(data => {this.experiencia = data;})
  }

}
