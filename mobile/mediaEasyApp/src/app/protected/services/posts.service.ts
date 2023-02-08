import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpParams } from '@angular/common/http';
import { CommonResponse, PostPayload } from '../../../utils/interfaces';

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
  verPosts( payload: PostPayload ){
    const url = `${ this.baseUrl }/posts/view`;
    let params = new HttpParams()
      .set('page', String(payload.page))
      .set('len', String(payload.len))

    if(!!payload.userId){
      params = params.append('userId', payload.userId!);
    }
    if(!!payload.title){
      params = params.append('title', payload.title!);
    }
    if(!!payload.date){
      params = params.append('date', payload.date!);
    }

    return this.http.get<CommonResponse>(url,{params})
  }

}

