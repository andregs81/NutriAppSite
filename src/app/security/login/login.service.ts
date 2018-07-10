import { Router } from '@angular/router';
import { HttpClient, HttpHeaders, HttpHeaderResponse, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';

import { NUTRI_API } from './../../app';
import { User } from './../user/user.model';
import { EventEmitter } from 'events';
import { ToastrService } from 'ngx-toastr';



@Injectable()
export class LoginService {
user: User;
isLoggedIn = false;
showMenuEmmiter = new EventEmitter<boolean>();

  constructor(private http: HttpClient, private router: Router, private toast: ToastrService) { }

/*
  login(user: User): Observable<any> {
    console.log(`${NUTRI_API}/login`);
    return this.http.post(`${NUTRI_API}/login`, user)
    .map((header: HttpHeaderResponse) => header);
  }
*/


login(user: User) {
  console.log(`${NUTRI_API}/login`);
  this.http.post(`${NUTRI_API}/login`, user)
  .subscribe((header: any) => {
    if (header.authenticated)  {
      this.toast.info(`Bem vindo, ${user.UserID}`);
      this.isLoggedIn = true;
      this.showMenuEmmiter.emit(true);
      this.router.navigate(['paciente/lista']);
    }
  }, (erro: HttpErrorResponse) =>
        this.toast.error(erro.message, 'Erro de autenticação'));
}

userIsLoggedIn(): boolean {
  return this.isLoggedIn;
}

}
