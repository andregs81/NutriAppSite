import { ActivatedRoute } from '@angular/router';
import { PacienteService } from './../paciente.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Avaliacao } from './avaliacao.model';

@Component({
  selector: 'app-avaliacao',
  templateUrl: './avaliacao.component.html',
  styleUrls: ['./avaliacao.component.css']
})
export class AvaliacaoComponent implements OnInit {

  avaliacaoForm: FormGroup;
  avaliacao: Avaliacao;
  dataAtual = Date.now();

  percGordura = 0;
  percLivreGord = 0;
  percGordSobra = 0;
  percIdealGord = 12;
  pesoGordura = 0;
  pesoMagro = 0;
  pesoIdeal = 0;

  constructor(
    private fb: FormBuilder,
    private pacienteService: PacienteService,
    private route: ActivatedRoute) { }

  ngOnInit() {



    this.avaliacaoForm = this.fb.group({
      idpaciente: [null],
      dataAvaliacao: [this.obterDataAtual()],
      peso: [null, [Validators.required]],
      estatura: [null, [Validators.required]],
      pressaoArterial: [null],
      bioimpedancia: [null],
      batimentoCardiaco: [null],
      iimc: [null],
      percRealizadoDieta: [null],
      percRealizadoTreino: [null],
      observacoes: [null],
      DC: this.fb.group({
                          triceps: [null, [Validators.required]],
                          escapular: [null, [Validators.required]],
                          suprailiaca: [null, [Validators.required]],
                          abdominal: [null, [Validators.required]]
      }),
      Perimetros: this.fb.group({
                                  bracoDireito: [null],
                                  cintura: [null],
                                  abdominal: [null],
                                  quadril: [null],
                                  coxaDireita: [null],
                                  panturrilhaDireita: [null],
                                  torax: [null],
                                  bracoEsquerdo: [null],
                                  pulso: [null],
                                  coxaEsquerda: [null],
                                  panturrilhaEsquerda: [null]
      })
    });
  }

  isValidandTouched(field): boolean {
    const campo = this.avaliacaoForm.get(field);
    return this.pacienteService.isValidAndTouched(campo);
  }

  aplicaCssErro(field) {
    const campo = this.avaliacaoForm.get(field);
    return {
      'is-invalid': this.pacienteService.isValidAndTouched(campo)
    };
  }

  obterDataAtual() {
    let data = new Date();

    let dataFormatada = data.getDate() < 10 ? `0${data.getDate()}` : data.getDate().toString();

    let mes = data.getMonth() + 1;
    dataFormatada += mes < 10 ? `0${mes}` : mes.toString();
    return dataFormatada += data.getFullYear().toString();
  }

  calcEquacaoFaulkner() {
    const dc = this.avaliacaoForm.get('DC').value;
    this.percGordura = ((dc.triceps + dc.escapular + dc.suprailiaca + dc.abdominal) * 0.153 + 5.783);
    this.percLivreGord = (100 - this.percGordura);
    this.percGordSobra = this.percGordura - this.percIdealGord;

    this.calcPesoIdeal();
  }

  calcPesoIdeal() {
    const peso = this.avaliacaoForm.get('peso').value;
    this.pesoGordura = peso * (this.percGordura / 100);
    this.pesoMagro = peso * (this.percLivreGord / 100);
    this.pesoIdeal = (this.pesoMagro / (100 - this.percIdealGord)) * 100;
  }

}
