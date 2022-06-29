import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRouterModule } from './app-router.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { AppComponent } from './app.component';
import { PrimeNgModule } from './prime-ng/prime-ng.module';
import { SharedModule } from './shared/shared.module';
import { VentasModule } from './ventas/ventas.module';

//Cambiar locale de la app
import localeEs from '@angular/common/locales/es-AR';
import localeFr from '@angular/common/locales/fr'; //frances
import { registerLocaleData } from '@angular/common';
registerLocaleData(localeEs);
registerLocaleData(localeFr);


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    PrimeNgModule,
    AppRouterModule,
    SharedModule,
    VentasModule
  ],
  providers: [
    {provide: LOCALE_ID, useValue: 'es-AR'} //Cambiando locale de la app
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
