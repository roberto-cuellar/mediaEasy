import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpStatusService {

  // Se crea un Behavior subject
  private peticionActual$: BehaviorSubject<boolean>;
  //private peticionActual$: Observable<boolean>;


  constructor() {
    this.peticionActual$ = new BehaviorSubject(false);
  }

  // Metodo encargado de setear el valor del estado actual de la peticion
  // y emitir el valor a las suscripciones
  setHttpStatus(requestActiva: boolean){
    this.peticionActual$.next(requestActiva);
  }

  // Metodo encargado de generar un observable a partir del estado de la peticion
  // cuando este estado cambie, a partir de este observable, los suscritos podran
  // conocer el cambio
  getHttpStatus(): Observable<boolean>{
    return this.peticionActual$.asObservable();
  }

}
