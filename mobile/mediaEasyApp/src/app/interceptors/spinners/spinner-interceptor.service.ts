import { Injectable } from '@angular/core';
import { HttpRequest, HttpInterceptor, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable, finalize, map } from 'rxjs';
import { HttpStatusService } from './http-status.service';


@Injectable({
  providedIn: 'root'
})
export class SpinnerInterceptorService implements HttpInterceptor  {

  constructor(
    private httpStatusService: HttpStatusService
  ) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    return next.handle(req).pipe(
      map(event => {
        this.httpStatusService.setHttpStatus(true);
        return event
      }),
      finalize(()=> {
        this.httpStatusService.setHttpStatus(false);
      })
    )
  }
}
