import { Component, Input } from '@angular/core';
import { Heroe } from '../../interfaces/heroe.model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  @Input() heroe!: Heroe;

}
