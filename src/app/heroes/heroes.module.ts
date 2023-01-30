import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';

import { HeroesRoutingModule } from './heroes-routing.module';
import { MaterialModule } from '../material/material.module';

import { AddComponent } from './pages/add/add.component';
import { SearchComponent } from './pages/search/search.component';
import { ViewComponent } from './pages/view/view.component';
import { HeroesHomeComponent } from './pages/heroes-home/heroes-home.component';
import { ListComponent } from './pages/list/list.component';
import { CardComponent } from './components/card/card.component';
import { ImagenPipe } from './pipes/imagen.pipe';
import { ConfirmarComponent } from './components/confirmar/confirmar.component';


@NgModule({
  declarations: [
    AddComponent,
    SearchComponent,
    ViewComponent,
    HeroesHomeComponent,
    ListComponent,
    CardComponent,
    ImagenPipe,
    ConfirmarComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FlexLayoutModule, 
    FormsModule,
    HeroesRoutingModule,
    
  ],
  exports:[
    HeroesRoutingModule
  ]
})
export class HeroesModule { }
