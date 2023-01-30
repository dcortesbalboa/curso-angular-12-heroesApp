import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../auth/services/auth.service';
import { Auth } from '../../../auth/interfaces/auth.interface';

@Component({
  selector: 'app-heroes-home',
  templateUrl: './heroes-home.component.html',
  styleUrls: ['./heroes-home.component.css']
})
export class HeroesHomeComponent {

  constructor(private router: Router,
      private authService: AuthService){
    
  }
  logOut(){
    this.router.navigate(['/auth/login']);
  }

  get auth(): Auth{
    return this.authService.auth;
  }
}
