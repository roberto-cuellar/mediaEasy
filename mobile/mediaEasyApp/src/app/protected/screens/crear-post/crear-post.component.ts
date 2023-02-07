import { Component, Inject, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CreatePostInterface } from 'src/utils/interfaces';
import { ModalesComponent } from '../../components/shared/modales/modales.component';
import { ModalController } from '@ionic/angular';
import { TiposModalesEnum } from '../../components/shared/modales/tiposModalesEnum';
import { HttpClient } from '@angular/common/http';
import { PostsService } from '../../services/posts.service';
import { AuthService } from '../../../auth/services/auth.service';

@Component({
  selector: 'app-crear-post',
  templateUrl: './crear-post.component.html',
  styleUrls: ['./crear-post.component.scss'],
})
export class CrearPostComponent implements OnInit {

  public createPostForm: FormGroup = this.fb.group({
    title: [null, Validators.required],
    content: [null, Validators.required],
  });

  public createPostPreviewObject: CreatePostInterface= {
    title: '',
    content: '',
    usuario: '',
    fecha: ''
  }

  public genericTitle: string = 'page.crearPost.cardEjemplo.title.placeholder';
  public genericContent: string = 'page.crearPost.cardEjemplo.contenido.placeholder';




  constructor(
    public translateService:TranslateService,
    private fb: FormBuilder,
    public modalController: ModalController,
    private postsService:PostsService,
    private authService:AuthService,
    private http: HttpClient
  ) { }

  ngOnInit() {
    this.actualizarPreview();
  }

  actualizarPreview() {
    // Se extraen los valores del formulario
    const {title,content} = this.createPostForm.value;

    // Se asignan al objeto de crear mensaje
    this.createPostPreviewObject.title = title? title: this.translateService.instant(this.genericTitle);
    this.createPostPreviewObject.content = content? content: this.translateService.instant(this.genericContent);
  }

   crearPost(){
    if(this.createPostForm.invalid){
      this.createPostForm.markAllAsTouched();
      return
    }
    const {title,content} = this.createPostForm.value;

    const username = localStorage.getItem('username');
    const userId = localStorage.getItem('userid');

    if(username && userId) {
      this.postsService.crearPost(title,content, username, userId).subscribe(response => {
        if(!response.error){
          this.mostraModal();
        }else{

        }
      })
    }else{
      this.authService.logout();
    }

  }

  async mostraModal(){
    const modal = await this.modalController.create({
      component: ModalesComponent,
      componentProps: {
        "tipoModal": TiposModalesEnum.exitoso,
        "contenido": "page.crearPost.modal.contenido.exitoso"
      }
    });
    modal.present();

    const { data } = await modal.onWillDismiss();

    if(data){}

  }



}
