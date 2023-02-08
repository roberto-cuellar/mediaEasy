import { Component, OnDestroy, OnInit, AfterViewInit, ChangeDetectorRef } from '@angular/core';
import { InfiniteScrollCustomEvent, PopoverController } from '@ionic/angular';
import { GeneralComponent } from '../../components/shared/popovers/calendarios/general/general.component';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CreatePostInterface } from 'src/utils/interfaces';
import { PostsService } from '../../services/posts.service';
import { map } from 'rxjs';
import { PostPayload } from '../../../../utils/interfaces';

@Component({
  selector: 'app-ver-mis-post',
  templateUrl: './ver-mis-post.component.html',
  styleUrls: ['./ver-mis-post.component.scss'],
})
export class VerMisPostComponent implements OnInit, AfterViewInit {

  // Formulario con input para el filtro de los mensajes del usuario actual
  public myPostForm: FormGroup = this.fb.group({
    date: [null],
  });

  public myPostEntidad : Array<CreatePostInterface> = [];

  public cantidadPost : number = 0;
  public elementosPorPagina : number = 3 ;

  public dateTitle: string = '';

  // Objeto que posee la info para la peticion por defecto, page, len, usuario
  private defaultPostPayload : PostPayload =  {page: 1, len: 3,userId: localStorage.getItem('userid') || undefined};

  constructor(
    private fb: FormBuilder,
    public popoverController: PopoverController,
    private postsService:PostsService,
    public cdRef: ChangeDetectorRef
  ) { }

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
        this.cdRef.markForCheck();
        this.myPostEntidad = []
        posts.forEach(post => {
          this.myPostEntidad.push({
            title: post.title,
            content: post.content,
            usuario: post.username,
            fecha: post.creationDate
          })
        })
        this.cdRef.markForCheck();
      }
    )
  }

  async presentPopover(e: Event) {
    const popover = await this.popoverController.create({
      component: GeneralComponent,
      event: e,
      backdropDismiss: true
    }
    );

    await popover.present();

    const { data } = await popover.onDidDismiss();
    if(data){
      this.dateTitle = data;
      // console.log('Data: ', data, 'se dispara la accion');
      this.defaultPostPayload.date = data;
      this.cargarData(this.defaultPostPayload);
    }
  }

  public cambioPagina(paginaActual: number) {
    this.defaultPostPayload.page = paginaActual;
    this.cargarData(this.defaultPostPayload);
  }

}
