import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  carros = [
    {nome: 'Chevette', marca: 'GM'},
    {nome: 'Argo', marca: 'Fiat'},
    {nome: 'Fiesta', marca: 'Ford'},
    {nome: 'HB20', marca: 'Hyunday'},
    {nome: 'Gol', marca: 'VW'}
  ];
}
