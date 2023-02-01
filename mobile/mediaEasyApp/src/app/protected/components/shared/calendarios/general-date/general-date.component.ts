import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-general-date',
  templateUrl: './general-date.component.html',
  styleUrls: ['./general-date.component.scss'],
})
export class GeneralDateComponent implements OnInit {

  @Input('controlName') controlName: string = ''

  constructor() { }

  ngOnInit() {}

}
