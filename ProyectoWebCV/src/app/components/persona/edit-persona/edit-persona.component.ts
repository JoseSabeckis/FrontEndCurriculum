import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { persona } from 'src/app/models/persona.model';
import { PersonaServicioService } from 'src/app/service/persona/persona-servicio.service';
import { TokenService } from 'src/app/service/token/token.service';

@Component({
  selector: 'app-edit-persona',
  templateUrl: './edit-persona.component.html',
  styleUrls: ['./edit-persona.component.css']
})
export class EditPersonaComponent implements OnInit{

  isLogged = false;
  isLogginDail = false;
  roles!: string[];
  errMsj!: string;

  persona:persona = null;

  constructor(private activatedRoute: ActivatedRoute, private personaService: PersonaServicioService, private router: Router, private tokenService: TokenService){

  }

  ngOnInit(): void {
    if (this.tokenService.getToken()) {
      this.isLogged = true;
      this.isLogginDail = false;
      this.roles = this.tokenService.getAuthorities();
    }

    this.personaService.getPersona().subscribe({
      next: data => { this.persona = data },
      error: err => {
        alert("no se encontro la persona");
        this.router.navigate(['']);
      }
    })

  }

  Modify(): void {

    const id = 1;

    this.personaService.UpdatePersona(id, this.persona).subscribe({
      next: data => { this.router.navigate(['']); }, error: err => {
        alert("error al modificar experiencia"); 
        this.router.navigate(['']);
      }
    })

  }

  cargarImage($event:any): void{

  }

}
