import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { skill } from 'src/app/models/skill.model';
import { ExperienciaService } from 'src/app/service/exp/experiencia.service';
import { SkillService } from 'src/app/service/skill/skill.service';
import { TokenService } from 'src/app/service/token/token.service';

@Component({
  selector: 'app-new-hardsoft',
  templateUrl: './new-hardsoft.component.html',
  styleUrls: ['./new-hardsoft.component.css']
})
export class NewHardsoftComponent implements OnInit{

  isLogged=false;
  isLogginDail=false;
  roles!:string[];
  errMsj!:string;

  nombre!: string;
  porcentaje!: number;

  constructor(private skillServicio: SkillService, private tokenServicio: TokenService, private router: Router){

  }

  ngOnInit(): void {
    if(this.tokenServicio.getToken()){
      this.isLogged = true;
      this.isLogginDail = false;
      this.roles = this.tokenServicio.getAuthorities();
    }
  }

  onCreate(): void {
    const hys = new skill(this.nombre, this.porcentaje);

    this.skillServicio.save(hys).subscribe({
      next: data => {
        alert("hard y soft skill creada");
        this.router.navigate(['']);
      }, error: err => {
        alert("Fallo, verificar datos");
        this.router.navigate([''])
      }
    });
  }

}
