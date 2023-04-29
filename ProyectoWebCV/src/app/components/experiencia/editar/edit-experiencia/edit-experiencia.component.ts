import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { experiencia } from 'src/app/models/experiencia.model';
import { ExperienciaService } from 'src/app/service/exp/experiencia.service';
import { TokenService } from 'src/app/service/token/token.service';

@Component({
  selector: 'app-edit-experiencia',
  templateUrl: './edit-experiencia.component.html',
  styleUrls: ['./edit-experiencia.component.css']
})
export class EditExperienciaComponent implements OnInit {

  isLogged = false;
  isLogginDail = false;
  roles!: string[];
  errMsj!: string;

  expModify: experiencia = null; 

  constructor(private activatedRoute: ActivatedRoute, private experienciaService: ExperienciaService, private router: Router, private tokenService: TokenService) { }

  ngOnInit(): void {
    
    if (this.tokenService.getToken()) {
      this.isLogged = true;
      this.isLogginDail = false;
      this.roles = this.tokenService.getAuthorities();
    }
    
    const id = this.activatedRoute.snapshot.params['id'];

    this.experienciaService.detail(id).subscribe({
      next: data => { this.expModify = data },
      error: err => {
        alert("no se encontro la experiencia");
        this.router.navigate(['']);
      }
    })

  }

  onModify(): void {

    const id = this.activatedRoute.snapshot.params['id'];

    this.experienciaService.update(id, this.expModify).subscribe({
      next: data => { this.router.navigate(['']); }, error: err => {
        alert("error al modificar experiencia"); 
        this.router.navigate(['']);
      }
    })

  }


}
