import { Component, OnInit } from '@angular/core';
import { ConversaPrimerMensaje } from 'src/utils/interfaces';

@Component({
  selector: 'app-mensajes-popover',
  templateUrl: './mensajes-popover.component.html',
  styleUrls: ['./mensajes-popover.component.scss'],
})
export class MensajesPopoverComponent implements OnInit {

  public conversas: Array<ConversaPrimerMensaje> = [
    {
      id: 1,
      autor: 'Antonio cuellar',
      lastMesagge: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent purus justo, commodo a rhoncus porttitor, convallis vitae neque. Donec iaculis turpis ac mauris auctor, condimentum pretium turpis lacinia. Suspendisse elementum diam ac vehicula convallis. Sed vitae massa ac lorem molestie blandit.',
      leido: false,

    },
    {
      id: 2,
      autor: 'camila andrade',
      lastMesagge: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent purus justo, commodo a rhoncus porttitor, convallis vitae neque. Donec iaculis turpis ac mauris auctor, condimentum pretium turpis lacinia. Suspendisse elementum diam ac vehicula convallis. Sed vitae massa ac lorem molestie blandit.',
      leido: false,
    },
    {
      id: 3,
      autor: 'andrea paez',
      lastMesagge: '',
      leido: true,
    },
    {
      id: 4,
      autor: 'Antonio cuellar',
      lastMesagge: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent purus justo, commodo a rhoncus porttitor, convallis vitae neque. Donec iaculis turpis ac mauris auctor, condimentum pretium turpis lacinia. Suspendisse elementum diam ac vehicula convallis. Sed vitae massa ac lorem molestie blandit.',
      leido: true,

    },
    {
      id: 5,
      autor: 'Antonio cuellar',
      lastMesagge: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent purus justo, commodo a rhoncus porttitor, convallis vitae neque. Donec iaculis turpis ac mauris auctor, condimentum pretium turpis lacinia. Suspendisse elementum diam ac vehicula convallis. Sed vitae massa ac lorem molestie blandit.',
      leido: true,

    },
    {
      id: 6,
      autor: 'Antonio cuellar',
      lastMesagge: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent purus justo, commodo a rhoncus porttitor, convallis vitae neque. Donec iaculis turpis ac mauris auctor, condimentum pretium turpis lacinia. Suspendisse elementum diam ac vehicula convallis. Sed vitae massa ac lorem molestie blandit.',
      leido: true,

    },
    {
      id: 7,
      autor: 'Antonio cuellar',
      lastMesagge: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent purus justo, commodo a rhoncus porttitor, convallis vitae neque. Donec iaculis turpis ac mauris auctor, condimentum pretium turpis lacinia. Suspendisse elementum diam ac vehicula convallis. Sed vitae massa ac lorem molestie blandit.',
      leido: true,

    },
    {
      id: 8,
      autor: 'Antonio cuellar',
      lastMesagge: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent purus justo, commodo a rhoncus porttitor, convallis vitae neque. Donec iaculis turpis ac mauris auctor, condimentum pretium turpis lacinia. Suspendisse elementum diam ac vehicula convallis. Sed vitae massa ac lorem molestie blandit.',
      leido: true,

    },

  ];

  constructor() { }

  ngOnInit() {
    if(this.conversas.length>0){
      if(this.conversas.length>3){
        this.conversas = this.conversas.splice(0,3);
      }
    }
  }

}
