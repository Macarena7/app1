import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-asignalumno',
  templateUrl: './asignalumno.component.html',
  styleUrls: ['./asignalumno.component.scss'],
})
export class AsignalumnoComponent  implements OnInit {

  mostrarCamaraQR = false; // Variable para controlar la visibilidad del QR

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {

  }

  mostrarcamara() {
    this.mostrarCamaraQR = true; // Muestra el QR cuando se haga clic
  }

  cerrarSesion() {
    // Redirige a la página de home
    this.router.navigate(['/home']);
  }

}
