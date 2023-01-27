import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { HttpClientModule } from '@angular/common/http';
import { IonicModule } from '@ionic/angular';


@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    TranslateModule,
    HttpClientModule,
    IonicModule.forRoot(),
  ],
  exports:[
    TranslateModule,
    HttpClientModule
  ]
})
export class SharedModule { }
