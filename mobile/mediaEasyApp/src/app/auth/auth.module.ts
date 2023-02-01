import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { AuthRoutingModule } from './auth-routing.module';
import { CrearCuentaComponent } from './screens/crear-cuenta/crear-cuenta.component';
import { IniciarSesionComponent } from './screens/iniciar-sesion/iniciar-sesion.component';
import { LandingComponent } from './screens/landing/landing.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    LandingComponent,
    CrearCuentaComponent,
    IniciarSesionComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    IonicModule,
    ReactiveFormsModule,
    SharedModule,
    HttpClientModule
  ]
})
export class AuthModule {



}
