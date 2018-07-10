import { AuthGuard } from './../guards/auth.guard';
import { LoginService } from './login.service';
import { FormsModule } from '@angular/forms';
import { NgModule, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [],
  providers: [LoginService, AuthGuard]
})
export class LoginModule {
}
