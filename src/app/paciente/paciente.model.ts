export class Paciente {
  constructor(
    public idPaciente: number,
    public nome: string,
    public sobrenome: string,
    public cpf: string,
    public datanascimento: Date,
    public sexo: string,
    public telefone: number,
    public celular: number,
    public endereco: Endereco
    ) {}
  }

    export class Endereco {
      constructor(
          public idPaciente: number,
          public cep: string,
          public logradouro: string,
          public complemento: string,
          public numero: string,
          public bairro: string,
          public localidade: string,
          public uf: string
          ) {}
    }

