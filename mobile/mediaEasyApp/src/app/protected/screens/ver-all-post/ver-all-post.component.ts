import { Component, OnInit, AfterViewInit, OnDestroy } from '@angular/core';
import { PopoverController, InfiniteScrollCustomEvent } from '@ionic/angular';
import { CreatePostInterface } from 'src/utils/interfaces';
import { GeneralComponent } from '../../components/shared/popovers/calendarios/general/general.component';
import { TranslateService } from '@ngx-translate/core';
import { PostsService } from '../../services/posts.service';
import { PostPayload } from '../../../../utils/interfaces';
import { Subscription, debounceTime, map } from 'rxjs';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-ver-all-post',
  templateUrl: './ver-all-post.component.html',
  styleUrls: ['./ver-all-post.component.scss'],
})
export class VerAllPostComponent implements OnInit, AfterViewInit, OnDestroy {

  public titleForm: FormGroup = this.fb.group({
    title: [null]
  })

  public allPostEntidad : Array<CreatePostInterface> = [];

  public cantidadPost : number = 0;
  public elementosPorPagina : number = 3 ;

  public dateTitle: string = '';

  // Objeto que posee la info para la peticion por defecto, page, len, usuario
  private defaultPostPayload : PostPayload =  {page: 1, len: 3};

  private subs: Subscription;

  constructor(
    private fb: FormBuilder,
    public popoverController: PopoverController,
    public translateService:TranslateService,
    private postsService:PostsService
  ) {
    this.subs = this.titleForm.valueChanges
      .pipe(
        debounceTime(1000)
      ).subscribe(data => {
        this.defaultPostPayload.title = data.title;
        this.cargarData(this.defaultPostPayload);
      })
  }

  ngOnInit() {

  }

  ngAfterViewInit(): void {
    this.cargarData(this.defaultPostPayload);
  }

  private cargarData(payload: PostPayload){
    this.postsService.verPosts(payload).pipe(
      map(
        data => {
          return data.body
        }
      )
    ).subscribe(
      response => {
        const posts: Array<any> = response.posts;
        this.cantidadPost = response.postsTotalCount;
        this.allPostEntidad = []
        posts.forEach(post => {
          this.allPostEntidad.push({
            title: post.title,
            content: post.content,
            usuario: post.username,
            fecha: post.creationDate
          })
        })
      }
    )
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
    if(data){
      this.dateTitle = data;
      this.defaultPostPayload.date = data;
      this.cargarData(this.defaultPostPayload);
    }
  }

  public cambioPagina(paginaActual: number) {
    this.defaultPostPayload.page = paginaActual;
    this.cargarData(this.defaultPostPayload);
  }

  ngOnDestroy(): void {
    this.subs?.unsubscribe();
  }

}
