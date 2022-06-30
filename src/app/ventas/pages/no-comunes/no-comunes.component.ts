import { Component } from '@angular/core';
import { interval } from 'rxjs';

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
    clientes: string[] = ['María', 'Eduardo', 'Juan', 'Rocio'];

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


    //keyValue Pipe
    persona = {
      nombre: 'Emanuel',
      edad: 25,
      direccion: 'Ottawa, Canadá'
    }

    //Json Pipe
    heroes = [
      {
        nombre: 'Superman',
        vuela: true
      },
      {
        nombre: 'Robin',
        vuela: false
      },
      {
        nombre: 'Aquaman',
        vuela: false
      }
    ]  


    //Async Pipe
    miObservable = interval(1000); 

    valorPromesa = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve('Tenemos data de promesa')
      }, 3500)
    })
}
