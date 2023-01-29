import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProtectedLandingComponent } from './screens/protected-landing/protected-landing.component';
import { ConstantesPath } from 'src/app/constantes/paths';
import { CrearPostComponent } from './screens/crear-post/crear-post.component';
import { VerMisPostComponent } from './screens/ver-mis-post/ver-mis-post.component';
import { VerAllPostComponent } from './screens/ver-all-post/ver-all-post.component';

const routes: Routes = [
  {path: '', component:ProtectedLandingComponent,
  children: [
    { path: ConstantesPath.PATH_CREAR_POST, component: CrearPostComponent },
    { path: ConstantesPath.PATH_VER_POSTS, component: VerMisPostComponent },
    { path: ConstantesPath.PATH_VER_ALL_POSTS, component: VerAllPostComponent },
    { path: '**', redirectTo: ConstantesPath.PATH_CREAR_POST }
  ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProtectedRoutingModule { }
