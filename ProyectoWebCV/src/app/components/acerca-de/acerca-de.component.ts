import { Component, OnInit } from '@angular/core';
import { acerca } from 'src/app/models/acerca.model';
import { persona } from 'src/app/models/persona.model';
import { AcercaService } from 'src/app/service/acerca.service';
import { PersonaServicioService } from 'src/app/service/persona/persona-servicio.service';

@Component({
  selector: 'app-acerca-de',
  templateUrl: './acerca-de.component.html',
  styleUrls: ['./acerca-de.component.css']
})
export class AcercaDeComponent implements OnInit {
  persona: persona = new persona("","","","");
  acerca: acerca = new acerca("");

  constructor(public personaService: PersonaServicioService, public acercaService: AcercaService){
    
  }

  ngOnInit(): void{
    this.personaService.getPersona().subscribe(data => {this.persona = data});
    this.acercaService.getAcercaDe().subscribe(data => {this.acerca = data});
  }

}
