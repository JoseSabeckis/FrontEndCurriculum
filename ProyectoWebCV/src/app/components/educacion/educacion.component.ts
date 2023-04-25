import { Component } from '@angular/core';
import { educacion } from 'src/app/models/educacion.model';
import { EducacionService } from 'src/app/service/educacion/educacion.service';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent {

  educacion: educacion = new educacion("","","");

  constructor(public educacionServicio: EducacionService ){

  }

  ngOnInit(): void{
    this.educacionServicio.getEducacion().subscribe(data=> {this.educacion = data});
  } 

}
