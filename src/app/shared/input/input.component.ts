import { AfterContentInit, Component, ContentChild, OnInit, Input } from '@angular/core';
import { FormControlName } from '@angular/forms';



@Component({
  selector: 'app-input-container',
  templateUrl: './input.component.html'
})
export class InputComponent implements OnInit, AfterContentInit {

  @Input() label: string;
  @Input() errorMessage: string;
  @Input() showTipo: boolean = true;

  @ContentChild(FormControlName) control: FormControlName;

  constructor() { }

  ngOnInit() {
  }


    ngAfterContentInit() {
      if(this.control === undefined) {
        throw new Error('Esse componente precisa ser usado com uma diretiva formControlName');
      }
    }

    hasSuccess():boolean {
      return this.control.valid && (this.control.dirty || this.control.touched);
    }

    hasError():boolean {
      return this.control.invalid && (this.control.dirty || this.control.touched);
    }

}
