import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { LoginalumComponent } from './loginalum/loginalum.component';
import { RestablecerComponent } from './restablecer/restablecer.component';
import { IniciodoComponent } from './iniciodo/iniciodo.component';
import { InicioalComponent } from './inicioal/inicioal.component'
import { AsignalumnoComponent } from './asignalumno/asignalumno.component';
import { AsigndocenteComponent } from './asigndocente/asigndocente.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'home', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'loginalum', component: LoginalumComponent},
  {path: 'restablecer', component: RestablecerComponent},
  {path: 'iniciodo', component: IniciodoComponent},
  {path: 'inicioal', component: InicioalComponent},
  {path: 'asignalumno', component: AsignalumnoComponent},
  {path: 'asigndocente', component: AsigndocenteComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
