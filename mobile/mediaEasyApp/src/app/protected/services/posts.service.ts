import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpParams } from '@angular/common/http';
import { CommonResponse } from '../../../utils/interfaces';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  // Variable encargada de extraer la url del servicio base
  private baseUrl: string = environment.baseUrl;

  constructor(private http: HttpClient) { }


  // Metodo encargado de crear un post
  crearPost(title: string, content: string, username: string, userId: string){
    const url = `${ this.baseUrl }/posts/add`;
    const payload = { title, content, username, userId };
    return this.http.post<CommonResponse>(url,payload)
  }

  // Metodo encargado de traer los post
  verPosts(userId: string, page: Number, len: Number){
    const url = `${ this.baseUrl }/posts/view`;
    const params = new HttpParams()
      .set('userId', userId)
      .set('page', String(page))
      .set('len', String(len))
    return this.http.get<CommonResponse>(url,{params})
  }

}
