import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { ConstantesPath } from 'src/app/constantes/paths';

@Component({
  selector: 'app-protected-landing',
  templateUrl: './protected-landing.component.html',
  styleUrls: ['./protected-landing.component.scss'],
})
export class ProtectedLandingComponent implements OnInit {

  constructor(
    private router: Router,
    private activateRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    // Se redirecciona a la pantalla principal que seria crear post
    this.router.navigate([ConstantesPath.PATH_CREAR_POST], { relativeTo: this.activateRoute });
  }

}
