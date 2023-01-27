import { Component, OnInit } from '@angular/core';
import { Heroe } from '../../interfaces/heroe.model';
import { HeroesService } from '../../services/heroes.service';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  heroes: Heroe[]=[]

  termino: string="";

  heroeSeleccionado!: Heroe | undefined;

  constructor(private heroesService: HeroesService){
  
  }

  ngOnInit(): void {
    
  }

  buscando(){
    this.heroesService.getSugerencias(this.termino)
      .subscribe((resp)=>{
        this.heroes=resp;
      })
  }

  opcionSeleccionada(event: MatAutocompleteSelectedEvent ){
    if(event.option.value===''){
      this.heroeSeleccionado=undefined;
      return;
    }
    const heroe: Heroe=event.option.value;
    this.termino=heroe.superhero;
    this.heroesService.getHeroe(heroe.id!)
      .subscribe(heroe=>this.heroeSeleccionado=heroe);
  }
}
