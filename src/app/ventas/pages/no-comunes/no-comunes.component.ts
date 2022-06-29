import { Component } from '@angular/core';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styles: [
  ]
})
export class NoComunesComponent  {
  //i18nSelect
  nombre1: string = 'Emanuel';
  nombre2: string = 'Susana';
  generoM: string = 'masculino';
  generoF: string = 'femenino';

  invitacionMap = {
    'masculino': 'invitarlo',
    'femenino': 'invitarla'
  }

  instructorMap = {
    'masculino': 'instructor',
    'femenino': 'instructora'
  }

    //i18nPlural
    clientes: string[] = ['María', 'Eduardo', 'Juan'];

    clientesMap = {
      '=0': 'no tenemos ningún cliente esperando.',
      '=1': 'tenemos un cliente esperando.',
      '=2': 'tenemos dos clientes esperando.',
      'other': 'tenemos # clientes esperando.'
    }


    cambiarNombre(){
      if(this.nombre1 === 'Emanuel'){
        this.nombre1 = 'Susana';
        this.nombre2 = 'Emanuel';
        this.generoM = 'femenino';
        this.generoF = 'masculino';
      }
      else{
        this.nombre1 = 'Emanuel';
        this.nombre2 = 'Susana';
        this.generoM = 'masculino';
        this.generoF = 'femenino';
      }
    }

    borrarCliente(){
      this.clientes.pop();
    }
  
}
