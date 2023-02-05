import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConstantesPath } from 'src/app/constantes/paths';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';


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
    private fb: FormBuilder,
    private authService: AuthService
  ) { }

  ngOnInit() {}


  public irCrearCuenta(){
    this.router.navigate([ConstantesPath.PATH_AUTH,ConstantesPath.PATH_REGISTRO]);
  }

  // Metodo encargado de realizar el posteo de la informacion de usuario para realizar el login
  public login(){

    // Se valida si el formulario es valido
    if(this.loginForm.invalid){
      this.loginForm.markAllAsTouched();
      console.log('Formulario invalido');
      return
    }

    // Se obtienen los valores para realizar el login y su validacion
    const {email,password} = this.loginForm.value;

    this.authService.login( email, password )
      .subscribe( resp => {

        if ( !resp.error === true ) {
          this.router.navigateByUrl('/landing');
        } else {
          console.log('No se pudo completar el login');
        }
      });


  }


}
