import { Component, OnInit } from '@angular/core';
import { InfiniteScrollCustomEvent, PopoverController } from '@ionic/angular';
import { GeneralComponent } from '../../components/shared/popovers/calendarios/general/general.component';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CreatePostInterface } from 'src/utils/interfaces';

@Component({
  selector: 'app-ver-mis-post',
  templateUrl: './ver-mis-post.component.html',
  styleUrls: ['./ver-mis-post.component.scss'],
})
export class VerMisPostComponent implements OnInit {

  // Formulario con input para el filtro de los mensajes del usuario actual
  public myPostForm: FormGroup = this.fb.group({
    date: [null],
  });

  public myPostEntidad : Array<CreatePostInterface> = [
    {
      title: 'Do you want to make a living by giving your sports predictions',
      content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a ga.',
      usuario: 'roberto cuellar',
      fecha: '10:25 am 20/11/22'
    },
    {
      title: 'What is e-sports',
      content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a g.',
      usuario: 'roberto cuellar',
      fecha: '10:25 am 21/11/22'
    },
    {
      title: 'What is e-sports',
      content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a g.',
      usuario: 'roberto cuellar',
      fecha: '10:25 am 21/11/22'
    },
    {
      title: 'What is e-sports',
      content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a g.',
      usuario: 'roberto cuellar',
      fecha: '10:25 am 21/11/22'
    },
    {
      title: 'What is e-sports',
      content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a g.',
      usuario: 'roberto cuellar',
      fecha: '10:25 am 21/11/22'
    },
    {
      title: 'What is e-sports',
      content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a g.',
      usuario: 'roberto cuellar',
      fecha: '10:25 am 21/11/22'
    },
    {
      title: 'What is e-sports',
      content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a g.',
      usuario: 'roberto cuellar',
      fecha: '10:25 am 21/11/22'
    },
    {
      title: 'What is e-sports',
      content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a g.',
      usuario: 'roberto cuellar',
      fecha: '10:25 am 21/11/22'
    },
  ];

  constructor(
    private fb: FormBuilder,
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
    console.log('Data: ', data, 'se dispara la accion');

  }

  private generateItems() {
    for (let i = 0; i < 2; i++) {
      this.myPostEntidad.push(
        {
          title: 'Do you want to make a living by giving your sports predictions',
          content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a ga.',
          usuario: 'roberto cuellar',
          fecha: '10:25 am 20/11/22'
        }
      );
    }
  }


  onIonInfinite(ev:any) {
    this.generateItems();
    setTimeout(() => {
      (ev as InfiniteScrollCustomEvent).target.complete();
    }, 500);
  }

}
