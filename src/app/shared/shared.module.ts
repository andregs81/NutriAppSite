import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MaskDirective } from '../directives/mask.directives';
import { ControlErrorComponent } from './control-error/control-error.component';
import { InputComponent } from '../shared/input/input.component';
import { DateUsDirective } from './Directives/date-us.directive';
import { CpfMaskPipe } from './custom-pipes/cpf-mask.pipe';
import { FormModalComponent } from './form-modal/form-modal.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';


@NgModule({
  declarations: [
                  MaskDirective,
                  ControlErrorComponent,
                  InputComponent,
                  DateUsDirective,
                  CpfMaskPipe,
                  FormModalComponent,
                  NavBarComponent,
              ],
  imports: [
              FormsModule,
              ReactiveFormsModule,
              CommonModule,

          ],
  exports: [
            FormsModule,
            ReactiveFormsModule,
            MaskDirective,
            ControlErrorComponent,
            InputComponent,
            DateUsDirective,
            CpfMaskPipe,
            FormModalComponent,
            NavBarComponent

          ]

})

export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: []
    };
  }
}
