import { Component, OnInit } from '@angular/core';
import { skill } from 'src/app/models/skill.model';
import { SkillService } from 'src/app/service/skill/skill.service';
import { TokenService } from 'src/app/service/token/token.service';

@Component({
  selector: 'app-hardsoft',
  templateUrl: './hardsoft.component.html',
  styleUrls: ['./hardsoft.component.css']
})
export class HardsoftComponent implements OnInit{

  skills:skill[] = [];
  isLogged = false;

  constructor(public skillServicio: SkillService, private tokenServicio: TokenService){

  }

  ngOnInit(): void {
    this.cargarSoftSkills();

    if(this.tokenServicio.getToken()){
      this.isLogged = true;
    }
    else{
      this.isLogged = false;
    }
  }

  cargarSoftSkills() : void{
    this.skillServicio.getSkills().subscribe(data => {this.skills = data;})
  }

  delete(id?:number): void{
    if(id != undefined){
      this.skillServicio.delete(id).subscribe({
        next: data=> {
          this.cargarSoftSkills(); 
        }, error: err => {
          alert("no se pudo borrar la skill");
        }
      })
    }
  }

}
