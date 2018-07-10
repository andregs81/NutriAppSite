import { ListaAvaliacaoComponent } from './avaliacao/lista-avaliacao/lista-avaliacao.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PacienteComponent } from './paciente.component';
import { AvaliacaoComponent } from './../paciente/avaliacao/avaliacao.component';
import { ListaPacienteComponent } from './lista-paciente/lista-paciente.component';
import { PacienteFormComponent } from './paciente-form/paciente-form.component';

const pacienteRoutes: Routes = [
  { path: '', component: PacienteComponent, children: [
    {path: 'novo', component: PacienteFormComponent},
    {path: 'lista', component: ListaPacienteComponent},
    {path: 'lista/editar/:id', component: PacienteFormComponent},
    {path: 'lista/novo', component: PacienteFormComponent},
    {path: 'editar/:id', component: PacienteFormComponent},
    {path: 'avaliacoesdopaciente/:id', component: ListaAvaliacaoComponent},
    {path: 'avaliacao/nova/:id', component: AvaliacaoComponent}
  ] }
];

@NgModule({
  imports: [
    RouterModule.forChild(pacienteRoutes)
  ],
  exports: [RouterModule]
})
export class PacienteRoutingModule {

}
