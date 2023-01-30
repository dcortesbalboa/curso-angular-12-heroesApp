import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private router: Router,
      private authService: AuthService){

  }
  login(){
    //Ir al backedn para onfirmar al usuario y devolver que el usuario existe
    this.authService.login()
      .subscribe(resp=>{
        console.log(resp);
        if(resp.id){
          
          this.router.navigate(['/']);
        }

    });

    //almacenamos el usuario en un servicio

    //
  }
}
