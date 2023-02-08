import { Component, OnInit, Input, Output, EventEmitter, AfterViewInit, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-version-paginator-one',
  templateUrl: './version-one.component.html',
  styleUrls: ['./version-one.component.scss'],
})
export class VersionOnePaginatorComponent implements OnInit, AfterViewInit, OnChanges {

  @Input('totalRegitros') totalRegistros: number = 10;
  @Input('elementosPagina') elementosPagina: number = 3;

  public paginaActual: number = 1;

  public numPaginas: number = 0;

  @Output() cambioPagina = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
    // Se inicializa el paginador

  }

  ngAfterViewInit(): void {
    this.numPaginas = Math.ceil(this.totalRegistros/this.elementosPagina);
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.actualizar(changes['totalRegistros'].currentValue);
  }

  actualizar(totalElementos: any){
    this.numPaginas = Math.ceil(this.totalRegistros/this.elementosPagina);
  }

  // Metodo encargado de setear la siguiente pagina en caso de que sea permitido
  public avanzar(){

    if(this.paginaActual < this.numPaginas){
      this.paginaActual++;
      this.cambioPagina.emit(this.paginaActual);
    }
  }

  // Metodo encargado de setear la pagina anterior en caso de que sea permitido
  public retroceder(){
    if(this.paginaActual>1){
      this.paginaActual--;
      this.cambioPagina.emit(this.paginaActual);
    }
  }

}
