import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { acerca } from 'src/app/models/acerca.model';
import { AcercaService } from 'src/app/service/acerca.service';
import { TokenService } from 'src/app/service/token/token.service';
import { enviroment } from 'src/enviroment/enviroment';

@Component({
  selector: 'app-edit-acerca',
  templateUrl: './edit-acerca.component.html',
  styleUrls: ['./edit-acerca.component.css']
})
export class EditAcercaComponent implements OnInit{

  isLogged = false;
  isLogginDail = false;
  roles!: string[];
  errMsj!: string;

  acerca: acerca = null;

  constructor(public acercaService: AcercaService, private tokenServicio: TokenService, private route: Router, private activatedRoute: ActivatedRoute){

  }

  ngOnInit(): void {
    if (this.tokenServicio.getToken()) {
      this.isLogged = true;
      this.isLogginDail = false;
      this.roles = this.tokenServicio.getAuthorities();
    }

    this.acercaService.getAcercaDe().subscribe({
      next: data => { this.acerca = data },
      error: err => {
        alert("no se encontro nad acerca de mi");
        this.route.navigate(['']);
      }
    })

  }

  onModify(): void {

    const id = this.activatedRoute.snapshot.params['id'];

    this.acercaService.update(id, this.acerca).subscribe({
        next: data => { this.route.navigate(['']); }, 
        error: err => {
        alert("error al modificar acerca de mi");
        this.route.navigate(['']);
      }
    })

  }

}
