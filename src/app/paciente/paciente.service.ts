import { Paciente, Endereco } from './paciente.model';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpHeaders, HttpHeaderResponse, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup, AbstractControl } from '@angular/forms';
import 'rxjs/add/operator/map';

import { IPacienteService } from './IPacienteService';
import { NUTRI_API } from '../app';


@Injectable()
export class PacienteService implements IPacienteService {

paciente: Paciente;
  //#region Moq Pacientes
  /*
  private listaPacientes: Paciente[] = [
    {
      idPaciente: 1,
      nome: 'André',
      sobrenome: 'Gomes da Silva',
      cpf: '29397649809',
      sexo: 'M',
      telefone: 1732246489,
      celular: 17988183666,
      datanascimento: new Date(1981, 11, 10),
      endereco: {
        cep: '15060140',
        logradouro: 'Av. Dr. José da Silva Sé',
        numero: '205',
        complemento: 'casa 66',
        localidade: 'São josé do Rio Preto',
        uf: 'SP',
        bairro: 'Parque da Liberdade 3'
      }
    },
    {idPaciente: 2, nome: 'Viviane', sobrenome: 'Pereira Rodrigues', cpf:'32182544852', sexo: 'F', telefone: 1732254109, celular: 17988103932, datanascimento: new Date(1985, 1, 9),
    endereco: {
      cep: '15056750',
      logradouro: 'Av. Dr. José da Silva Sé',
      numero: '205',
      complemento: 'casa 66',
      localidade: 'São josé do Rio Preto',
      uf: 'SP',
      bairro: 'Parque da Liberdade 3'
    }
  },
  {idPaciente: 3, nome: 'João', sobrenome: 'José de Castro', cpf:'32182544999', sexo: 'M', telefone: 1132218989, celular: 11988363524, datanascimento: new Date(1973, 9, 30),
  endereco: {
    cep: '15060141',
    logradouro: 'Rua Pontes',
    numero: '1000',
    complemento: '',
    localidade: 'São Paulo',
    uf: 'SP',
    bairro: 'Morumbi'
  }
}
];
*/
//#endregion Moq Pacientes

   constructor(
              private http: HttpClient
            ) { }

  isValidAndTouched(field: AbstractControl): boolean {
    return (!field.valid &&
              (field.touched || field.dirty)
           );
  }

  getEnderecoByCep(cep: string): Observable<Endereco> {
    // Nova variável "cep" somente com dígitos.
    cep = cep.replace(/\D/g, '');

    if (cep !== '') {
      // Expressão regular para validar o CEP.
      const validacep = /^[0-9]{8}$/;

      // Valida o formato do CEP.
      if (validacep.test(cep)) {
        return this.http.get<Endereco>(`//viacep.com.br/ws/${cep}/json`);
      }
    }
  }

  emailIsValid(email: AbstractControl): boolean {
    if (email.errors)  {
      return !(email.errors['email'] && email.touched);
    } else {
      return true;
    }
  }


  getPacienteById(id: number): Observable<Paciente> {
    //return this.listaPacientes.find(e => e.idPaciente == id);
    return this.http.get<Paciente>(`${NUTRI_API}/Paciente/${id}`);
  }

  getAll(): Observable<Paciente[]> {
    return this.http.get<Paciente[]>(`${NUTRI_API}/Paciente`);
  }

  Add(paciente: Paciente): Observable<number> {
    return this.http.post<Paciente>(`${NUTRI_API}/Paciente`, paciente)
        .map(result => result.idPaciente);
  }

  Update(paciente: Paciente): Observable<number> {
    return this.http.put<Paciente>(`${NUTRI_API}/Paciente/${paciente.idPaciente}`, paciente)
        .map(result => result.idPaciente);
  }

  Delete(id: number): Observable<Paciente> {
    return this.http.delete<Paciente>(`${NUTRI_API}/Paciente/${id}`)
      .map(result => result);
  }

  SaveChanges(paciente: Paciente) {
    if (paciente.idPaciente !== undefined && paciente.idPaciente !== null) {
      return this.Update(paciente);
    } else {
      return this.Add(paciente);
    }
  }

}
