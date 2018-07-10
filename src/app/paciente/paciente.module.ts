import { PacienteService } from './paciente.service';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { PacienteComponent } from './paciente.component';
import { PacienteFormComponent } from './paciente-form/paciente-form.component';
import { PacienteRoutingModule } from './paciente-routing.module';
import { SharedModule } from '../shared/shared.module';
import { ListaPacienteComponent } from './lista-paciente/lista-paciente.component';
import { AvaliacaoComponent } from './avaliacao/avaliacao.component';
import { ListaAvaliacaoComponent } from './avaliacao/lista-avaliacao/lista-avaliacao.component';


@NgModule({
  imports: [
       CommonModule,
       FormsModule,
       ReactiveFormsModule,
       PacienteRoutingModule,
       SharedModule

  ],
  declarations: [
    PacienteComponent,
    PacienteFormComponent,
    ListaPacienteComponent,
    AvaliacaoComponent,
    ListaAvaliacaoComponent,
  ],
  providers: [PacienteService]
  })
export class PacienteModule {  }
