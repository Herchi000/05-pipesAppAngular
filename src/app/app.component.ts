import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nombre: string = 'emanuel FerNANdez';
  valor: number = 1000;
  obj = {
    name: "Emanuel"
  }

  mostrarNombre(){
    console.log(this.nombre);
    console.log(this.valor);
  }
}
