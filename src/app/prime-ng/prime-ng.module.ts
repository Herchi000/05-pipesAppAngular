import { NgModule } from '@angular/core';

import {ButtonModule} from 'primeng/button';
import {CardModule} from 'primeng/card';
import {FieldsetModule} from 'primeng/fieldset';
import {MenubarModule} from 'primeng/menubar';
import {MenuItem} from 'primeng/api';



@NgModule({
  declarations: [],
  exports:[
    ButtonModule,
    CardModule,
    FieldsetModule,
    MenubarModule
  ]
})
export class PrimeNgModule { }
