import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { GeneralComponent } from '../../components/shared/popovers/calendarios/general/general.component';

@Component({
  selector: 'app-ver-mis-post',
  templateUrl: './ver-mis-post.component.html',
  styleUrls: ['./ver-mis-post.component.scss'],
})
export class VerMisPostComponent implements OnInit {

  constructor(
    public popoverController: PopoverController
  ) { }

  ngOnInit() {}

  async presentPopover(e: Event) {
    const popover = await this.popoverController.create({
      component: GeneralComponent,
      event: e,
      backdropDismiss: false
    }
    );

    await popover.present();

    const { data } = await popover.onDidDismiss();
    console.log('Data: ', data);

  }

}
