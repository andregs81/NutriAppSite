import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-form-modal',
  templateUrl: './form-modal.component.html',
  styleUrls: ['./form-modal.component.css']
})
export class FormModalComponent implements OnInit {

@Input() title: string;
@Input() body: string;
@Input() labelButtonConfirmation: string;
@Input() actionButtonConfirmation: string;

  constructor() { }

  ngOnInit() {
  }

}
