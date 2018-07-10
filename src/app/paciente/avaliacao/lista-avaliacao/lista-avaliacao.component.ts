import { Router, Route, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista-avaliacao',
  templateUrl: './lista-avaliacao.component.html',
  styleUrls: ['./lista-avaliacao.component.css']
})
export class ListaAvaliacaoComponent implements OnInit {
pacienteId: number;
  ultimasAvaliacoes = [
    {avaliacaoId: 3, pacienteId: 1, atingioMeta: 'Não', data: new Date(2018, 0, 23)},
    {avaliacaoId: 1, pacienteId: 1, atingioMeta: 'Sim', data: new Date(2017, 10, 23)},
    {avaliacaoId: 2, pacienteId: 1, atingioMeta: 'Não', data: new Date(2017, 11, 23)},
    {avaliacaoId: 4, pacienteId: 1, atingioMeta: 'Sim', data: new Date(2018, 1, 23)}
  ];

  constructor(private activateRoute: ActivatedRoute) { }

  ngOnInit() {
    this.pacienteId = this.activateRoute.snapshot.params['id'];
    console.log(this.pacienteId);
    this.ultimasAvaliacoes = this.ultimasAvaliacoes.sort((a, b) => +a.data - +b.data);

  }

}
