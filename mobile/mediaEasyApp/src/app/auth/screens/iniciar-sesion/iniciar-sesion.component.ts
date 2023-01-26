import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConstantesPath } from 'src/app/constantes/paths';


@Component({
  selector: 'app-iniciar-sesion',
  templateUrl: './iniciar-sesion.component.html',
  styleUrls: ['./iniciar-sesion.component.scss'],
})
export class IniciarSesionComponent implements OnInit {

  constructor(
    private router: Router,
  ) { }

  ngOnInit() {}


  public irCrearCuenta(){
    this.router.navigate([ConstantesPath.PATH_AUTH,ConstantesPath.PATH_REGISTRO]);
  }


}
