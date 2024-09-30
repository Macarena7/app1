import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms'; //formulario
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent  implements OnInit {

  formularioLogin: FormGroup;   
  mensajeError: string = ""; // Variable para el mensaje de error

  constructor(public fb: FormBuilder, private router: Router) {  //public form esto es para el formulario

    this.formularioLogin = this.fb.group({                    //esto es para el formulario 
      'nombre': new FormControl("",Validators.required),
      'password': new FormControl("",Validators.required)
    })
  }

  ngOnInit() {}

  atras() {                       //volver atras
    this.router.navigate(['/home'],);
  }

  resta() {
    this.router.navigate(['/restablecer'],);
  }

  iniciodocente() {
    if (this.formularioLogin.valid) {
      const nombreUsuario = this.formularioLogin.get('nombre')?.value;
      this.mensajeError = ""; // Limpiar el mensaje de error si el formulario es válido
      // Navega a iniciodo con el nombre de usuario como parámetro
      this.router.navigate(['/iniciodo'], { queryParams: { nombre: nombreUsuario } });
    } else {
      this.formularioLogin.markAllAsTouched();
      this.mensajeError = "Por favor, complete todos los campos de nombre de usuario y contraseña.";
    }
  }
}
