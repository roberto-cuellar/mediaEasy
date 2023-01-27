import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { ConstantesPath } from 'src/app/constantes/paths';

@Component({
  selector: 'app-crear-cuenta',
  templateUrl: './crear-cuenta.component.html',
  styleUrls: ['./crear-cuenta.component.scss'],
})
export class CrearCuentaComponent implements OnInit {

  public registerForm: FormGroup = this.fb.group({
    nombre: [null, [Validators.required,  Validators.pattern('^[a-zA-Z ]*')]],
    email: [null, [Validators.required,Validators.email]],
    password: [null, Validators.required],
    confirmPassword: [null, Validators.required],
  })

  constructor(
    private fb: FormBuilder,
    private router: Router
  ) { }

  ngOnInit() {}

  // Metodo encargado de redirigir a la vista del inicio sesion
  public irIniciarSesion(){
    this.router.navigate([ConstantesPath.PATH_AUTH,ConstantesPath.PATH_LOGIN]);
  }

  // Metodo encargado de crear una cuenta tras obtener los valores del formulario
  public crearCuenta(){
    if(this.registerForm.invalid){
      this.registerForm.markAllAsTouched();
      return
    }


  }



}

