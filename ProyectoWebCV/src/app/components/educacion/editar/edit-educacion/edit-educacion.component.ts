import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { educacion } from 'src/app/models/educacion.model';
import { EducacionService } from 'src/app/service/educacion/educacion.service';
import { TokenService } from 'src/app/service/token/token.service';

@Component({
  selector: 'app-edit-educacion',
  templateUrl: './edit-educacion.component.html',
  styleUrls: ['./edit-educacion.component.css']
})
export class EditEducacionComponent implements OnInit{

  isLogged = false;
  isLogginDail = false;
  roles!: string[];
  errMsj!: string;

  expModify: educacion = null;

  constructor(private activatedRoute: ActivatedRoute, private educacionService: EducacionService, private router: Router, private tokenService: TokenService){

  }

  ngOnInit(): void {
    if (this.tokenService.getToken()) {
      this.isLogged = true;
      this.isLogginDail = false;
      this.roles = this.tokenService.getAuthorities();
    }

    const id = this.activatedRoute.snapshot.params['id'];

    this.educacionService.detail(id).subscribe({
      next: data => { this.expModify = data },
      error: err => {
        alert("no se encontro la educacion");
        this.router.navigate(['']);
      }
    })

  }

  onModify(): void {

    const id = this.activatedRoute.snapshot.params['id'];

    this.educacionService.update(id, this.expModify).subscribe({
      next: data => { this.router.navigate(['']); }, error: err => {
        alert("error al modificar la educacion");
        this.router.navigate(['']);
      }
    })

  }



}
