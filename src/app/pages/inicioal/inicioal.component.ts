import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inicioal',
  templateUrl: './inicioal.component.html',
  styleUrls: ['./inicioal.component.scss'],
})
export class InicioalComponent  implements OnInit {

  nombreUsuario: string | null = '';

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    // Obtener el nombre de usuario desde los queryParams
    this.route.queryParams.subscribe(params => {
    this.nombreUsuario = params['nombre'] || 'Usuario';
    });
  }

  asignaalum() {
    this.router.navigate(['/asignalumno']);
  }

  cerrarSesion() {
    // Redirige a la página de home
    this.router.navigate(['/home']);
  }

}
