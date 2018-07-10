export class Avaliacao {
  constructor(
    public idpaciente: number,
    public dataAvaliacao: Date,
    public peso: number,
    public estatura: number,
    public dc: DC,
    public perimetros: Perimetros,
    public pressaoArterial: string,
    public bioimpedancia: number,
    public batimentoCardiaco: number,
    public iimc: number,
    public percRealizadoDieta: number,
    public percRealizadoTreino: number
  ) {}
}

class DC {
  constructor(
    public triceps: number,
    public escapular: number,
    public suprailiaca: number,
    public abdominal: number,
  ) {}
}

class Perimetros {
  constructor(
    public bracoDireito: number,
    public cintura: number,
    public abdominal: number,
    public quadril: number,
    public coxaDireita: number,
    public panturrilhaDireita: number,
    public torax: number,
    public bracoEsquerdo: number,
    public pulso: number,
    public coxaEsquerda: number,
    public panturrilhaEsquerda: number
) { }
}

