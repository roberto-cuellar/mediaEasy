import { Component, Input, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';


@Component({
  selector: 'app-general',
  templateUrl: './general.component.html',
  styleUrls: ['./general.component.scss'],
})
export class GeneralComponent implements OnInit {

  constructor(
    public popoverController: PopoverController
  ) { }

  ngOnInit() {}

  selected(event:any){
    let selectedDate = new Date(Date.parse(event.detail.value));
    const localDate = selectedDate.toLocaleString().split(",")[0];
    return this.popoverController.dismiss(localDate);
  }

}
