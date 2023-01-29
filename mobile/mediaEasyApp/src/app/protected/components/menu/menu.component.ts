import { Component, OnInit } from '@angular/core';
import { MenuPrincipal } from 'src/utils/interfaces';
import { TranslateService } from '@ngx-translate/core';
import { ConstantesPath } from 'src/app/constantes/paths';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {

  public menuArray: MenuPrincipal[] = [];

  constructor(
    public translateService:TranslateService,
    private router: Router
  ) { }

  ngOnInit() {
    // Construir el menú
    this.construirMenu();
  }

  // Metodo encargado de construir el menu
  construirMenu(){
    // Se establece un array para la config inicial del menú
    // a futuro, estos items estarán en bd para la escabilidad de la app
    const menuItems: MenuPrincipal[]= [
      {
        label: this.translateService.instant('menuPrincipal.itemlabel.crearPost'),
        icon: 'create-outline',
        url: ConstantesPath.PATH_CREAR_POST
      },
      {
        label: this.translateService.instant('menuPrincipal.itemlabel.misPost'),
        icon: 'bookmark-outline',
        url: ConstantesPath.PATH_VER_POSTS
      },
      {
        label: this.translateService.instant('menuPrincipal.itemlabel.allPost'),
        icon: 'bookmarks-outline',
        url: ConstantesPath.PATH_VER_ALL_POSTS
      }
    ]
    this.menuArray = [...menuItems];
  }

  // Metodo encargado de enrutar a la screen correspondiente
  irScreen(url:string){
    this.router.navigate([ConstantesPath.PATH_LANDING,url]);
  }

}
