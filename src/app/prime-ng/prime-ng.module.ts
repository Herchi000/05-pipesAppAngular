import { NgModule } from '@angular/core';

import {ButtonModule} from 'primeng/button';
import {CardModule} from 'primeng/card';
import {FieldsetModule} from 'primeng/fieldset';
import {MenubarModule} from 'primeng/menubar';
import {ToolbarModule} from 'primeng/toolbar';




@NgModule({
  declarations: [],
  exports:[
    ButtonModule,
    CardModule,
    FieldsetModule,
    MenubarModule,
    ToolbarModule
  ]
})
export class PrimeNgModule { }
