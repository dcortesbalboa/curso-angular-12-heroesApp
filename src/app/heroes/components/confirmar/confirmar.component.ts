import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Heroe } from '../../interfaces/heroe.model';


@Component({
  selector: 'app-confirmar',
  templateUrl: './confirmar.component.html',
  styleUrls: ['./confirmar.component.css']
})
export class ConfirmarComponent {

  heroe!:Heroe;
  constructor(private dialogRef: MatDialogRef<ConfirmarComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Heroe,){
    this.heroe=data;
  }

  cerrar(){
    this.dialogRef.close()
  }

  confirmar(){
    this.dialogRef.close(true)

  }
}
