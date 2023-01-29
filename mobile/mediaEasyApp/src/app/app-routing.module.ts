import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { ConstantesPath } from './constantes/paths';
import { ValidarTokenGuard } from './guards/validar-token.guard';


const routes: Routes = [
  {
    path: ConstantesPath.PATH_AUTH,
    loadChildren: () => import('./auth/auth.module').then( m => m.AuthModule)
  },
  {
    path: ConstantesPath.PATH_LANDING,
    loadChildren: () => import('./protected/protected.module').then( m => m.ProtectedModule),
    canActivate: [ValidarTokenGuard],
    canLoad: [ValidarTokenGuard],

  },
  {
    path: '**',
    redirectTo: 'auth',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
