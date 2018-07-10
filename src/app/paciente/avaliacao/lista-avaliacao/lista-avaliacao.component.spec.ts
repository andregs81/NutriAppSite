import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaAvaliacaoComponent } from './lista-avaliacao.component';

describe('ListaAvaliacaoComponent', () => {
  let component: ListaAvaliacaoComponent;
  let fixture: ComponentFixture<ListaAvaliacaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaAvaliacaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaAvaliacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
