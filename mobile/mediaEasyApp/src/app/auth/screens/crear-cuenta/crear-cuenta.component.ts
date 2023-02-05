import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { ConstantesPath } from 'src/app/constantes/paths';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-crear-cuenta',
  templateUrl: './crear-cuenta.component.html',
  styleUrls: ['./crear-cuenta.component.scss'],
})
export class CrearCuentaComponent implements OnInit {

  public registerForm: FormGroup = this.fb.group({
    name: [null, [Validators.required,  Validators.pattern('^[a-zA-Z ]*')]],
    email: [null, [Validators.required,Validators.email]],
    password: [null, Validators.required],
    confirmPassword: [null, Validators.required],
  })

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private http: HttpClient,
    private authService: AuthService
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

    // Se obtienen los valores para realizar el login
    const {email,password,name} = this.registerForm.value;

    this.authService.registro( name, email, password ).subscribe(error =>{
      if(!error){
        this.router.navigateByUrl('/landing');
      }else{
        console.error('No se pudo realizar el registro');

      }
    })


  }



}

