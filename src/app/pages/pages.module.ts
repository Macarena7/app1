import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { LoginalumComponent } from './loginalum/loginalum.component';
import { IonicModule, IonContent } from '@ionic/angular';
import { ReactiveFormsModule } from '@angular/forms';
import { RestablecerComponent } from './restablecer/restablecer.component';
import { IniciodoComponent } from './iniciodo/iniciodo.component';
import { InicioalComponent } from './inicioal/inicioal.component';
import { AsignalumnoComponent } from './asignalumno/asignalumno.component';
import { AsigndocenteComponent } from './asigndocente/asigndocente.component';



@NgModule({
  declarations: [HomeComponent, 
    LoginComponent, 
    LoginalumComponent,
    RestablecerComponent,
    IniciodoComponent,
    InicioalComponent,
    AsignalumnoComponent,
    AsigndocenteComponent

  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    IonicModule,
    ReactiveFormsModule  /*agregue*/
  ]
})
export class PagesModule { }
