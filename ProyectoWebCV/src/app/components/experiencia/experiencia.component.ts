import { Component, OnInit } from '@angular/core';
import { experiencia } from 'src/app/models/experiencia.model';
import { ExperienciaService } from 'src/app/service/exp/experiencia.service';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit{
  
  experiencia: experiencia = new experiencia("","","");

  constructor(public experienciaServicio: ExperienciaService ){

  }

  ngOnInit(): void{
    this.experienciaServicio.getExperiencia().subscribe(data=> {this.experiencia = data});
  } 

}
