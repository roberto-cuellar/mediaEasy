import { Component, OnInit } from '@angular/core';
import { PopoverController, InfiniteScrollCustomEvent } from '@ionic/angular';
import { CreatePostInterface } from 'src/utils/interfaces';
import { GeneralComponent } from '../../components/shared/popovers/calendarios/general/general.component';
import { TranslateService } from '@ngx-translate/core';
import { PostsService } from '../../services/posts.service';

@Component({
  selector: 'app-ver-all-post',
  templateUrl: './ver-all-post.component.html',
  styleUrls: ['./ver-all-post.component.scss'],
})
export class VerAllPostComponent implements OnInit {

  public allPostEntidad : Array<CreatePostInterface> = [
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
    public popoverController: PopoverController,
    public translateService:TranslateService,
    private postsService:PostsService
  ) { }

  ngOnInit() {
    this.postsService.verPosts(
      '',1,3
    ).subscribe(response => {
      console.log('Response : ', response);
    })
  }


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
      this.allPostEntidad.push(
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
