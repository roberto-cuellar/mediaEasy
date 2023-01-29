import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProtectedRoutingModule } from './protected-routing.module';
import { ProtectedLandingComponent } from './screens/protected-landing/protected-landing.component';
import { MenuComponent } from './components/menu/menu.component';
import { ToolbarComponent } from './components/shared/toolbar/toolbar.component';
import { CrearPostComponent } from './screens/crear-post/crear-post.component';
import { VerAllPostComponent } from './screens/ver-all-post/ver-all-post.component';
import { VerMisPostComponent } from './screens/ver-mis-post/ver-mis-post.component';
import { SharedModule } from '../shared/shared.module';
import { IonicModule } from '@ionic/angular';


@NgModule({
  declarations: [
    ProtectedLandingComponent,
    MenuComponent,
    ToolbarComponent,
    CrearPostComponent,
    VerAllPostComponent,
    VerMisPostComponent
  ],
  imports: [
    CommonModule,
    ProtectedRoutingModule,
    SharedModule,
    IonicModule
  ]
})
export class ProtectedModule { }
