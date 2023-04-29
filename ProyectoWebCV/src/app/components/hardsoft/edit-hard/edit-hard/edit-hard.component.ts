import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { skill } from 'src/app/models/skill.model';
import { SkillService } from 'src/app/service/skill/skill.service';
import { TokenService } from 'src/app/service/token/token.service';

@Component({
  selector: 'app-edit-hard',
  templateUrl: './edit-hard.component.html',
  styleUrls: ['./edit-hard.component.css']
})
export class EditHardComponent implements OnInit{

  isLogged = false;
  isLogginDail = false;
  roles!: string[];
  errMsj!: string;

  skillModify: skill = null; 

  constructor(private activatedRoute: ActivatedRoute, private skillService: SkillService, private router: Router, private tokenService: TokenService){

  }

  ngOnInit(): void {
    if (this.tokenService.getToken()) {
      this.isLogged = true;
      this.isLogginDail = false;
      this.roles = this.tokenService.getAuthorities();
    }
    
    const id = this.activatedRoute.snapshot.params['id'];

    this.skillService.detail(id).subscribe({
      next: data => { this.skillModify = data },
      error: err => {
        alert("no se encontro la skill");
        this.router.navigate(['']);
      }
    })
  }

  onModify(): void {

    const id = this.activatedRoute.snapshot.params['id'];

    this.skillService.update(id, this.skillModify).subscribe({
      next: data => { this.router.navigate(['']); }, error: err => {
        alert("error al modificar la skill");
        this.router.navigate(['']);
      }
    })

  }

}
