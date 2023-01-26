import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConstantesPath } from 'src/app/constantes/paths';

@Component({
  selector: 'app-crear-cuenta',
  templateUrl: './crear-cuenta.component.html',
  styleUrls: ['./crear-cuenta.component.scss'],
})
export class CrearCuentaComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit() {}

  public irIniciarSesion(){
    this.router.navigate([ConstantesPath.PATH_AUTH,ConstantesPath.PATH_LOGIN]);
  }

}
