import { Component } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent {
  nombreLower: string = 'emanuel'
  nombreUpper: string = 'EMANUEL'
  nombreCammel: string = 'eManuEL'
 
  fecha: Date = new Date();

}
