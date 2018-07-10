import { Paciente } from './../paciente.model';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { Component, OnInit, ViewContainerRef } from '@angular/core';

import { PacienteService } from './../paciente.service';
import { HttpErrorResponse } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';



@Component({
  selector: 'app-paciente-form',
  templateUrl: './paciente-form.component.html',
  styleUrls: ['./paciente-form.component.css'],
  providers: []
})
export class PacienteFormComponent implements OnInit {
  pacienteForm: FormGroup;
  paciente: Paciente;
  constructor(
    private fb: FormBuilder,
    private pacienteService: PacienteService,
    private route: ActivatedRoute,
    private toast: ToastrService,
    private router: Router

  ) {}

  ngOnInit() {
    this.pacienteForm = this.fb.group({
      idPaciente: [null],
      nome: [null, [Validators.required]],
      sobrenome: [null, [Validators.required]],
      dataNascimento: [null, [Validators.required]],
      cpf: [null, [Validators.required, Validators.minLength(11)]],
      sexo: [null, [Validators.required]],
      telefone: [null],
      celular: [null],
      email: [null],

      endereco: this.fb.group({
        idPaciente: [null],
        cep: [null, [Validators.required]],
        logradouro: [null, [Validators.required]],
        complemento: [null],
        numero: [null, [Validators.required]],
        bairro: [null, [Validators.required]],
        localidade: [null, [Validators.required]],
        uf: [null, [Validators.required]]
      })
    });

    this.popularFormulario();
  }

  setEndereco(dados) {
    this.pacienteForm.patchValue({
      endereco: {
        logradouro: dados.logradouro,
        cep: dados.cep.replace(/\^|~|\?|,|\*|\.|\-/g, ''),
        complemento: dados.complemento,
        bairro: dados.bairro,
        localidade: dados.localidade,
        uf: dados.uf
      }
    });
  }

  onCep() {
    const cep = this.pacienteForm.get('endereco.cep');
    if (cep !== undefined && cep.value !== '') {
      this.pacienteService.getEnderecoByCep(cep.value).subscribe(
        result => {
          if (result) {
            this.setEndereco(result);
          } else {
            this.toast.warning('Cep não encontrado!', 'Alerta');
          }
        },
        (response: HttpErrorResponse) => {
          this.toast.error('Encontrei problemas na busca pelo cep!', 'OOps!');
        }
      );
    }
  }

  isValidandTouched(field): boolean {
    const campo = this.pacienteForm.get(field);
    return this.pacienteService.isValidAndTouched(campo);
  }

  aplicaCssErro(field) {
    const campo = this.pacienteForm.get(field);
    return {
      'is-invalid': this.pacienteService.isValidAndTouched(campo)
    };
  }

  popularFormulario() {
    const id = this.route.snapshot.params['id'];
    if (id !== undefined) {
      this.pacienteService.getPacienteById(id).subscribe(p => this.setForm(p));
    }
  }

  setForm(dados) {
    this.pacienteForm.patchValue({
      idPaciente: dados.idPaciente,
      nome: dados.nome,
      sobrenome: dados.sobrenome,
      dataNascimento: dados.datanascimento,
      cpf: dados.cpf,
      sexo: dados.sexo,
      telefone: dados.telefone,
      celular: dados.celular,

      endereco: {
        idPaciente: dados.endereco.idPaciente,
        cep: dados.endereco.cep,
        logradouro: dados.endereco.logradouro,
        complemento: dados.endereco.complemento,
        numero: dados.endereco.numero,
        bairro: dados.endereco.bairro,
        localidade: dados.endereco.localidade,
        uf: dados.endereco.uf
      }
    });
  }

  onSubmit(paciente: Paciente) {
      this.pacienteService.SaveChanges(paciente)
      .subscribe(
        (id: number) => {
          const msg = `Paciente ${id} salvo com sucesso!`;
          this.toast.success(msg, 'Sucesso');

          setTimeout(() => {
            this.router.navigate(['paciente/lista']);
          }, 1000);
        },
        (response: HttpErrorResponse) =>
          this.toast.error(response.message, 'Oops!')
      );
  }
}
