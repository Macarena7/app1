import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';   //formulario
import { Router } from '@angular/router';

@Component({
  selector: 'app-loginalum',
  templateUrl: './loginalum.component.html',
  styleUrls: ['./loginalum.component.scss'],
})
export class LoginalumComponent  implements OnInit {

  formularioLogin: FormGroup;   
  mensajeError: string = ""; // Variable para el mensaje de error

  constructor(public fb: FormBuilder, private router: Router) {   //lo del form es para el formulario 
    this.formularioLogin = this.fb.group({             //formulario
      'nombre': new FormControl("",Validators.required),
      'password': new FormControl("",Validators.required)
    })
  }

  ngOnInit() {}

  atras() {                    //para volver atras
    this.router.navigate(['/home'],);
  }

  resta() {                      //metodo para ir al componente restablecer
    this.router.navigate(['/restablecer'],);
  }

  inicioalumno() {
    if (this.formularioLogin.valid) {
      const nombreUsuario = this.formularioLogin.get('nombre')?.value;
      this.mensajeError = ""; // Limpiar el mensaje de error si el formulario es válido
      // Navega a inicioalu con el nombre de usuario como parámetro
      this.router.navigate(['/inicioal'], { queryParams: { nombre: nombreUsuario } });
    } else {
      this.formularioLogin.markAllAsTouched();
      this.mensajeError = "Por favor, complete todos los campos de nombre de usuario y contraseña.";
    }
  }

}
