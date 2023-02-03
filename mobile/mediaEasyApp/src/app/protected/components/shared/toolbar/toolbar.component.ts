import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { MensajesPopoverComponent } from '../popovers/mensajes-popover/mensajes-popover.component';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
})
export class ToolbarComponent implements OnInit {

  constructor(
    public popoverController: PopoverController
  ) { }

  ngOnInit() {}

  // Metodo encargado de activar el popover de los mensajes
  async verMensajes(e: Event){

    const popover = await this.popoverController.create({
      component: MensajesPopoverComponent,
      event: e,
      cssClass: 'popover-mensajes',
      translucent: true
    }
    );

    await popover.present();
  }



}
