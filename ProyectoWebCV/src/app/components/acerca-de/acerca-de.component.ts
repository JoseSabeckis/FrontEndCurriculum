import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { acerca } from 'src/app/models/acerca.model';
import { persona } from 'src/app/models/persona.model';
import { AcercaService } from 'src/app/service/acerca.service';
import { ImageService } from 'src/app/service/img/image.service';
import { PersonaServicioService } from 'src/app/service/persona/persona-servicio.service';
import { TokenService } from 'src/app/service/token/token.service';

@Component({
  selector: 'app-acerca-de',
  templateUrl: './acerca-de.component.html',
  styleUrls: ['./acerca-de.component.css']
})
export class AcercaDeComponent implements OnInit {
  persona: persona = new persona("","","","");
  acerca: acerca = new acerca("");

  isLogged = false;

  constructor(public personaService: PersonaServicioService, public acercaService: AcercaService, private tokenServicio: TokenService, private activatedRoute: ActivatedRoute,
    public imageService: ImageService){
    
  }

  ngOnInit(): void{
    this.personaService.getPersona().subscribe(data => {this.persona = data});
    this.acercaService.getAcercaDe().subscribe(data => {this.acerca = data});

    if(this.tokenServicio.getToken()){
      this.isLogged = true;
    }
    else{
      this.isLogged = false;
    }
  }

}
