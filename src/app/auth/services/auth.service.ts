import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environments';
import { Auth } from '../interfaces/auth.interface';
import { Observable, of, tap, switchMap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _usuario!: Auth | undefined;
  private baseUrl: string=environment.baseUrl;
  constructor(private http: HttpClient) { }

  login(){
    return this.http.get<Auth>(`${this.baseUrl}/usuarios/1`)
      .pipe(
        tap(resp=> this._usuario=resp),  
        tap(resp=> localStorage.setItem('token', resp.id))
      )
  }

  logout(){
    this._usuario=undefined;
  }

  get auth(): Auth{
    return {...this._usuario!};
  }

  verificarUsuario(): Observable<boolean>{
    if(!localStorage.getItem('token')){
      return of(false);
    }
    return this.http.get<Auth>(`${this.baseUrl}/usuarios/1`).pipe(
      switchMap(auth=>{
        console.log('map', auth);
        this._usuario=auth;
        return of(true);
      })
    )
  }
}