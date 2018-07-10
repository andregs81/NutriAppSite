import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { PacienteService } from './../paciente.service';
import { Paciente } from './../paciente.model';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-lista-paciente',
  templateUrl: './lista-paciente.component.html',
  styleUrls: ['./lista-paciente.component.css']
})
export class ListaPacienteComponent implements OnInit {
  pacientes: Paciente[] = [];
  filtro: string;
  selectedForDelete = false;
  @Input() paciente: Paciente;

  constructor(private pacienteService: PacienteService, private toast: ToastrService, private router: Router) { }

  ngOnInit() {
    this.pacienteService.getAll().subscribe(result => this.pacientes = result);
  }

  obterPaciente(): Paciente[] {
    if (this.pacientes.length === 0 || this.filtro === undefined || this.filtro.trim() === '') {
      return this.pacientes;
    }

    return this.pacientes.filter((v) => {
      if (v.nome.toLowerCase().indexOf(this.filtro.toLowerCase()) >= 0) {
        return true;
      }
      return false;
    });
  }

  Delete(id: number) {
    let elementModal: HTMLElement = document.getElementById('closeModal') as HTMLElement;
    this.pacienteService.Delete(id)
    .subscribe(
      (p: Paciente) => {
      const msg = `Paciente id: ${p.idPaciente} nome: ${p.nome} ${p.sobrenome}, removido com sucesso!`;
      this.toast.success(msg);

      this.ngOnInit();
    },
    (error: HttpErrorResponse) => {
      this.toast.error(error.message, 'Erro na Exclusão');
    },
  () => {
    elementModal.click();
  });
  }

  onSelect(paciente: Paciente) {
    this.paciente = paciente;
    this.selectedForDelete = true;
  }
}
