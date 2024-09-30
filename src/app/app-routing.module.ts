import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { LoginalumComponent } from './pages/loginalum/loginalum.component';
import { RestablecerComponent } from './pages/restablecer/restablecer.component';
import { IniciodoComponent } from './pages/iniciodo/iniciodo.component';
import { InicioalComponent } from './pages/inicioal/inicioal.component'
import { AsignalumnoComponent } from './pages/asignalumno/asignalumno.component';
import { AsigndocenteComponent } from './pages/asigndocente/asigndocente.component';


const routes: Routes = [

  {
    path: 'home',
    loadChildren: () => import('./pages/pages.module').then( m => m.PagesModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'loginalum',
    component: LoginalumComponent 
  },
  {
    path: 'restablecer',
    component: RestablecerComponent
  },
  {
    path: 'iniciodo',
    component: IniciodoComponent
  },
  {
    path: 'inicioal',
    component: InicioalComponent
  },
  {
    path: 'asignalumno',
    component: AsignalumnoComponent
  },
  {
    path: 'asigndocente',
    component: AsigndocenteComponent
  }


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
