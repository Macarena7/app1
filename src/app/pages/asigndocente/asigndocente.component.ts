import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-asigndocente',
  templateUrl: './asigndocente.component.html',
  styleUrls: ['./asigndocente.component.scss'],
})
export class AsigndocenteComponent  implements OnInit {

  mostrarCodigoQR = false; // Variable para controlar la visibilidad del QR

  constructor(private router: Router) { }

  ngOnInit() {}

  mostrarQR() {
    this.mostrarCodigoQR = true; // Muestra el QR cuando se haga clic
  }

  cerrarSesion() {
    // Redirige a la página de home
    this.router.navigate(['/home']);
  }

}
