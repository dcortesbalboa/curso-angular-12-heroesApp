import { Component, Input, OnInit } from '@angular/core';
import { Heroe, Publisher } from '../../interfaces/heroe.model';
import { HeroesService } from '../../services/heroes.service';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { of, switchMap } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmarComponent } from '../../components/confirmar/confirmar.component';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  ngOnInit(): void {

    if(!this.router.url.includes('add')){
      this.activatedRoute.params
      .pipe(
        switchMap(({id})=>this.heroesService.getHeroe(id))
      )
      .subscribe(resp=>this.heroe=resp);
    }
    
      
  }

  constructor(private heroesService: HeroesService,
      private activatedRoute: ActivatedRoute,
      private router: Router,
      private _snackBar: MatSnackBar,
      public dialog: MatDialog){

  }

  publishers= [{
    id: 'DC Comics',
    name: 'DC - Comics'
  },{
    id: 'Marvel Comics',
    name: 'Marvel - Comics'
  }]

  heroe: Heroe={
    id:'',
    alter_ego:'',
   characters: '',
   first_appearance: '',
   publisher: Publisher.DCComics,
   superhero: '',
   alt_img:''
  };

  guardar(){
    if(this.heroe.superhero.trim().length===0){
      return;
    }
    console.log(this.heroe);
    if(this.heroe.id?.trim().length === 0){
          this.heroesService.addHeroe(this.heroe)
      .subscribe(res=> {
        this.mostrarSnack("registro creado");
        this.router.navigate(['/heroes/edit',res.id])
      });
    }else{
      this.heroesService.editHeroe(this.heroe)
      .subscribe(res=> {
        this.heroe=res;
        this.mostrarSnack("registro modificado");
      });
    }

  }

  borrar(){

    const dialog=this.dialog.open(ConfirmarComponent,
      {width: '250px',
      data: {...this.heroe}});
      
      dialog.afterClosed().pipe(
        switchMap(resp=>{
          if(resp){
            return this.heroesService.deleteHeroe(this.heroe)
          }
          return of({});
        })
      ).subscribe(resp=>{
              this.router.navigate(['/heroes']);
            })


        dialog.afterClosed().subscribe(resp=>{
          if(resp){
          this.heroesService.deleteHeroe(this.heroe)
            .subscribe(resp=>{
              this.router.navigate(['/heroes']);
            })
        }
      })

  }

  mostrarSnack(mensaje: string): void{
    this._snackBar.open(mensaje, 'close', {
      duration: 2500
    });
  }

}
