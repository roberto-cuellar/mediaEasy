import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-post',
  templateUrl: './card-post.component.html',
  styleUrls: ['./card-post.component.scss'],
})
export class CardPostComponent implements OnInit {

  @Input('title') title: string = '' ;
  @Input('contenido') contenido: string = '';
  @Input('fecha') fecha: string = '';
  @Input('usuario') usuario: string = '';

  constructor() { }

  ngOnInit() {}

}
