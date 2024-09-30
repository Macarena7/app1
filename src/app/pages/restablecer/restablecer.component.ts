import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; 
import { AlertController } from '@ionic/angular'; // Para mostrar la alerta
import { Location } from '@angular/common';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms'; // Importa el FormBuilder y Validators

@Component({
  selector: 'app-restablecer',
  templateUrl: './restablecer.component.html',
  styleUrls: ['./restablecer.component.scss'],
})
export class RestablecerComponent implements OnInit {

  formularioRestablecer: FormGroup; 

  constructor(
    private router: Router, // Para la navegación
    private alertController: AlertController, // Para mostrar la alerta
    private location: Location,
    private fb: FormBuilder,  
  ) { 
      // Inicializar el formulario con validaciones
      this.formularioRestablecer = this.fb.group({
        'nombre': new FormControl('', Validators.required),
        'correo': new FormControl('', [Validators.required, Validators.email]) // Valida que sea un email
    });
  }

  atras() {                    
    this.location.back();
  }
  ngOnInit() {}

  async restablecerContrasena() {
    if (this.formularioRestablecer.valid) {
      // Si el formulario es válido, mostrar el mensaje de éxito
      const alert = await this.alertController.create({
        header: 'Solicitud enviada',
        message: 'Se ha enviado una solicitud a su correo electrónico.',
        buttons: [
          {
            text: 'OK',
            handler: () => {
              this.router.navigate(['/home']); // Redirige a la página de home
            }
          }
        ]
      });

      await alert.present();
    } else {
      // Si los campos no están llenos, mostrar un mensaje de error
      const alert = await this.alertController.create({
        header: 'Error',
        message: 'Por favor, complete todos los campos antes de continuar.',
        buttons: ['OK']
      });

      await alert.present();
    }
  }
}