import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Heroe } from '../interfaces/heroe.model';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environments.prod';

@Injectable({
    providedIn: 'root'
})
export class HeroesService {

  url: string=`${environment.baseUrl}/heroes`;

  listaHeroes: any[]=[];
  constructor(private http: HttpClient) { }

  getHeroes(): Observable<Heroe[]>{
    return this.http.get<Heroe[]>(this.url);
  }

  getHeroe(id: string): Observable<Heroe>{
    console.log("service", id);
    return this.http.get<Heroe>(`${this.url}/${id}`);
  }

  getSugerencias  (name: string): Observable<Heroe[]>{
    console.log("service", name);
    return this.http.get<Heroe[]>(`${this.url}?q=${name}&limit=5`);
  }

}
