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
import { ReactiveFormsModule } from '@angular/forms';
import { ModalesComponent } from './components/shared/modales/modales.component';
import { FormsModule } from '@angular/forms';
import { GeneralComponent } from './components/shared/popovers/calendarios/general/general.component';
import { GeneralDateComponent } from './components/shared/calendarios/general-date/general-date.component';
import { CardPostComponent } from './components/shared/cards/card-post/card-post.component';
import { MensajesPopoverComponent } from './components/shared/popovers/mensajes-popover/mensajes-popover.component';
import { MensajePopoverCardComponent } from './components/shared/mensaje-popover-card/mensaje-popover-card.component';

@NgModule({
  declarations: [
    ProtectedLandingComponent,
    MenuComponent,
    ToolbarComponent,
    CrearPostComponent,
    VerAllPostComponent,
    VerMisPostComponent,
    ModalesComponent,
    GeneralComponent,
    GeneralDateComponent,
    CardPostComponent,
    MensajesPopoverComponent,
    MensajePopoverCardComponent
  ],
  imports: [
    CommonModule,
    ProtectedRoutingModule,
    SharedModule,
    IonicModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class ProtectedModule { }
