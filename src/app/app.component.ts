import { Component, OnInit } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  nombre: string = 'emanuel FerNANdez';
  valor: number = 1000;
  obj = {
    name: "Emanuel"
  }

  mostrarNombre(){
    console.log(this.nombre);
    console.log(this.valor);
  }

  constructor(private primeNgConfig: PrimeNGConfig){

  }

  ngOnInit(): void {
    this.primeNgConfig.ripple = true;
  }

}
