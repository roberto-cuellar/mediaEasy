import { Injectable } from '@angular/core';
import { CanActivate, CanLoad, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ValidarTokenGuard implements CanActivate, CanLoad {

  constructor(
    private router: Router
  ){}

  canActivate(): Observable<boolean> | boolean {
    return true;
  }


  canLoad(): Observable<boolean> | boolean {
    return true;
  }

}
