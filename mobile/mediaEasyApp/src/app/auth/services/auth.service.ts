import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthResponse } from 'src/utils/interfaces';
import { tap, map, catchError, of, Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  // Variable encargada de extraer la url del servicio base
  private baseUrl: string = environment.baseUrl;

  constructor(
    private http: HttpClient,
    private router: Router
  ) { }

  // Metodo encargado del registro del usuario
  registro( name: string, email: string, password: string ) {

    const url  = `${ this.baseUrl }/auth/new`;
    const body = { email, password, name };

    return this.http.post<AuthResponse>( url, body )
      .pipe(
        tap( ({ error, body }) => {
          if ( !error ) {
            localStorage.setItem('token', body.token );
            localStorage.setItem('username', body.username || '');
            localStorage.setItem('userid', body.userid || '');
          }
        }),
        map( (resp: any) => resp.error ),
        catchError( (err:any) => {
          return of(err.error)
        })
      );

  }


  // Metodo encargado del login del usuario
  login( email: string, password: string ) {
    const url  = `${ this.baseUrl }/auth/login`;
    const body = { email, password };
    return this.http.post<AuthResponse>( url, body )
      .pipe(
        tap( resp => {
          if ( !resp.error ) {
            localStorage.setItem('token', resp.body.token! );
            localStorage.setItem('username', resp.body.username || '');
            localStorage.setItem('userid', resp.body.userid || '');
          }
        }),
        map( resp => resp.error ),
        catchError( err => of(err))
      );
  }

  // Metodo encargado de validar el token del usuario
  validarToken(): Observable<boolean> {

    const url = `${ this.baseUrl }/auth/renew`;
    const headers = new HttpHeaders()
      .set('x-token', localStorage.getItem('token') || '' );

    return this.http.get<AuthResponse>( url, { headers } )
        .pipe(
          map( resp => {
            localStorage.setItem('token', resp.body.token );
            localStorage.setItem('username', resp.body.username || '');
            localStorage.setItem('userid', resp.body.userid || '');
            return !resp.error;
          }),
          catchError( err => of(false) )
        );

  }

  // Metodo encargado de sacar al usuario de la aplicacion
  logout(){
    localStorage.clear();
    this.router.navigateByUrl('/');
    window.location.reload();
  }


}
