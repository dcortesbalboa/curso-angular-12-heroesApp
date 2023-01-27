import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { HeroesService } from '../../services/heroes.service';
import { Heroe } from '../../interfaces/heroe.model';
import { switchMap } from 'rxjs';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

  heroe!: Heroe;
  constructor(private activatedRoute: ActivatedRoute,
      private heroesService: HeroesService
    ){

  }
  ngOnInit(): void {
    this.activatedRoute.paramMap.pipe(
      switchMap( paramsMap => {
        let id=paramsMap.get('id') ?? '';
        return this.heroesService.getHeroe(id);
        }
      
    ))
    .subscribe( heroe => this.heroe=heroe)

  }
}
