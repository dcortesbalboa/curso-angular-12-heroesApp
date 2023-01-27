import { Pipe, PipeTransform } from '@angular/core';
import { Heroe } from '../interfaces/heroe.model';

@Pipe({
  name: 'imagen'
})
export class ImagenPipe implements PipeTransform {

  transform(value: Heroe, ...args: unknown[]): string {
    if(value && value.id){
      return `/assets/heroes/${value.id}.jpg`;
    }
    return `/assets/no-image.png`;
  }

}
