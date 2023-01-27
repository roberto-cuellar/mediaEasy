import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
export class TranslatePageService {

  constructor(private translateService: TranslateService) { }


  /**
   *
   * @param lang Lenguaje a utilizar
   */
  translate(lang:string){
    this.translateService.use(lang);
  }
}
