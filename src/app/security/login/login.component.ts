import { Router } from '@angular/router';
import { User } from './../user/user.model';
import { LoginService } from './login.service';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import { HttpHeaderResponse, HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  usuario: User = {
    UserID: null,
    AccessKey: null
  };
  isLoggedIn = false;

  constructor(
    private loginService: LoginService,
    private router: Router,
    private toast: ToastrService
  ) {}

  ngOnInit() {}

  onSubmit(user: User) {
    this.loginService.login(user);
/*      .subscribe((r) => {
        if (r.authenticated) {
          this.toast.success('Usuário Logado!');
          this.isLoggedIn = true;
          this.router.navigate(['paciente/lista']);
        }  else {
          this.toast.error('Usuário ou senha inválidos', 'Falha');
        }
      },
      (erro: HttpErrorResponse) =>
        this.toast.error(erro.message, 'Erro de autenticação')
    );*/
  }
}
