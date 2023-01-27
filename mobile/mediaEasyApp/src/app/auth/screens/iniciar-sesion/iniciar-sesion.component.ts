import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConstantesPath } from 'src/app/constantes/paths';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-iniciar-sesion',
  templateUrl: './iniciar-sesion.component.html',
  styleUrls: ['./iniciar-sesion.component.scss'],
})
export class IniciarSesionComponent implements OnInit {

  public loginForm: FormGroup = this.fb.group({
    email: [null, [Validators.required,Validators.email]],
    password: [null, Validators.required]
  })

  constructor(
    private router: Router,
    private fb: FormBuilder
  ) { }

  ngOnInit() {}


  public irCrearCuenta(){
    this.router.navigate([ConstantesPath.PATH_AUTH,ConstantesPath.PATH_REGISTRO]);
  }


}
