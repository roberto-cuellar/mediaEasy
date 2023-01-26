import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IniciarSesionComponent } from './screens/iniciar-sesion/iniciar-sesion.component';
import { LandingComponent } from './screens/landing/landing.component';
import { CrearCuentaComponent } from './screens/crear-cuenta/crear-cuenta.component';
import { ConstantesPath } from '../constantes/paths';

const routes: Routes = [
  {
    path: '',
    component: LandingComponent,
    children: [
      {path: ConstantesPath.PATH_LOGIN, component: IniciarSesionComponent},
      {path:  ConstantesPath.PATH_REGISTRO, component: CrearCuentaComponent},
      {path: '**',redirectTo: ConstantesPath.PATH_LOGIN},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
