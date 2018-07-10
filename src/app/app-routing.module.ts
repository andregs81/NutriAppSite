import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './security/login/login.component';
import { AuthGuard } from './security/guards/auth.guard';

const routes: Routes = [
  {path: 'login', component: LoginComponent },
  {path: 'paciente', loadChildren: 'app/paciente/paciente.module#PacienteModule',
    /*canActivate: [AuthGuard]*/},
    { path: '', pathMatch: 'full', redirectTo: 'login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
