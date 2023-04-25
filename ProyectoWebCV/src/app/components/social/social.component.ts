import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TokenService } from 'src/app/service/token/token.service';

@Component({
  selector: 'app-social',
  templateUrl: './social.component.html',
  styleUrls: ['./social.component.css']
})
export class SocialComponent implements OnInit{

  isLogged=false;

  constructor(private router: Router, private tokeService: TokenService){

  }

  ngOnInit(): void {
    if(this.tokeService.getToken()){
      this.isLogged=true;
    }
    else{
      this.isLogged=false;
    }
  }

  onLogOut():void{
    this.tokeService.LogOut();
    window.location.reload();
  }

  login(){
    this.router.navigate(['/login']);
  }

}
