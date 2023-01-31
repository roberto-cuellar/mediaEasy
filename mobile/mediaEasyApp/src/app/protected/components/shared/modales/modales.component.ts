import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { TiposModalesEnum } from './tiposModalesEnum';
import { ModalController, NavParams } from '@ionic/angular';
import { Animation, AnimationController } from '@ionic/angular';

@Component({
  selector: 'app-modales',
  templateUrl: './modales.component.html',
  styleUrls: ['./modales.component.scss'],
  animations: []
})
export class ModalesComponent implements OnInit {

  public iconMostrar: string = '';
  public titleMostrar: string = '';
  public tipoModal: string = '';
  public contenido: string = '';
  public colorIcono: string = '';
  public mostrarBtnOk: boolean = false;

  constructor(
    public modalController: ModalController,
    private navParams: NavParams,
    private animationCtrl: AnimationController
    ) {

    }

  ngOnInit() {
    // Se extaen los valores del tipo de modal y el contenido a mostrar
    this.tipoModal = this.navParams.data['tipoModal'];
    this.contenido = this.navParams.data['contenido'];

    // Se setea el tipo de modal, iconos y contenido
    this.setData(this.tipoModal);
  }

  ngAfterViewInit() {

    const animation: Animation =this.animationCtrl.create()
      .addElement(document.querySelector('.icono-animado')!)
      .duration(200)
      .fromTo('transform', 'scale(0.5)', 'scale(1.7)')
      .fromTo('opacity','0','0.5')
      .fromTo('filter','blur(4px)','blur(2px)')
      .duration(150)
      .fromTo('transform', 'scale(1.7)', 'scale(1)')
      .fromTo('opacity','0.5','1')
      .fromTo('filter','blur(2px)','blur(0)')

      animation.play()
  }

  public setData(tipoModal: string) {

    // Se establece si se muestra el btn ok o los btn's de confirmar
    if(tipoModal === TiposModalesEnum.confirmar){
      this.mostrarBtnOk = false;
    }else{
      this.mostrarBtnOk = true;
    }

    // Se identifica que labels e iconos deben ir en el modal
    switch (tipoModal) {
      case TiposModalesEnum.exitoso:
        this.titleMostrar = 'MODAL.exitoso.title';
        this.iconMostrar = 'checkmark-circle-outline';
        this.colorIcono = 'success';
        break;

      case TiposModalesEnum.confirmar:
        this.titleMostrar = 'MODAL.confirmar.title';
        this.iconMostrar = 'help-circle-outline';
        this.colorIcono = 'primary';
      break;

      case TiposModalesEnum.error:
        this.titleMostrar = 'MODAL.error.title';
        this.iconMostrar = 'alert-circle-outline';
        this.colorIcono = 'danger';
      break;

      case TiposModalesEnum.advertencia:
        this.titleMostrar = 'MODAL.advertencia.title';
        this.iconMostrar = 'warning-outline';
        this.colorIcono = 'warning';
      break;

      default:
        break;
    }

  }

  // Metodo encargado de responder false en el modal (unicamente para el modal de confirmar)
  cancel() {
    return this.modalController.dismiss(false);
  }

  // Metodo encargado de responder true en el modal (aplica para todos los modales)
  confirm() {
    return this.modalController.dismiss(true);
  }

}
