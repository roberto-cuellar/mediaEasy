import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-mensaje-popover-card',
  templateUrl: './mensaje-popover-card.component.html',
  styleUrls: ['./mensaje-popover-card.component.scss'],
})
export class MensajePopoverCardComponent implements OnInit {

  @Input('autor') public autor:string = '';
  @Input('mensaje') public mensaje:string = '';
  @Input('leido') public leido:boolean = false;


  constructor() { }

  ngOnInit() {

    // Recortar el mensaje en caso de ser necesario
    this.recortarMensaje();

  }

  // Metodo encargado de recortar los mensajes al maximo permitido
  recortarMensaje(){
    if(!!this.mensaje){
      if(this.mensaje.length>20){
        this.mensaje = this.mensaje.slice(0,20)+' ...';
      }
    }else{
        this.mensaje = 'Mensaje eliminado';
    }
  }

}
