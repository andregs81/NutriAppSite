import { Observable } from 'rxjs/Observable';
import { Paciente, Endereco } from './paciente.model';
import { AbstractControl } from '@angular/forms';
export interface IPacienteService {

  isValidAndTouched(field: AbstractControl): boolean;

  getEnderecoByCep(cep: string): Observable<Endereco>;

  emailIsValid(email: AbstractControl): boolean;

  getAll():  Observable<Paciente[]>;

  SaveChanges(obj: Paciente): Observable<any>;

  Delete(id: number): Observable<Paciente>;

}
