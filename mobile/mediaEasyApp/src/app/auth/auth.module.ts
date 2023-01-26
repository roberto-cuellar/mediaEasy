import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { AuthRoutingModule } from './auth-routing.module';
import { CrearCuentaComponent } from './screens/crear-cuenta/crear-cuenta.component';
import { IniciarSesionComponent } from './screens/iniciar-sesion/iniciar-sesion.component';
import { LandingComponent } from './screens/landing/landing.component';


@NgModule({
  declarations: [
    LandingComponent,
    CrearCuentaComponent,
    IniciarSesionComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    IonicModule
  ]
})
export class AuthModule { }
