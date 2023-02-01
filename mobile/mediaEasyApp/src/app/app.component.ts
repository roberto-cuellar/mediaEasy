import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { HttpStatusService } from './interceptors/spinners/http-status.service';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  selectedLanguage = 'es';

  public peticionActiva: boolean = false;

  constructor(
    private translateService: TranslateService,
    private httpStatusService: HttpStatusService
    ){
    this.translateService.setDefaultLang(this.selectedLanguage);
    this.translateService.use(this.selectedLanguage);

    // Se realiza la suscripción al observable responsable de validar
    // el estado de las peticiones http

    this.httpStatusService.getHttpStatus().subscribe((peticionActiva:boolean) => {
      this.peticionActiva = peticionActiva;
    })

  }

}
