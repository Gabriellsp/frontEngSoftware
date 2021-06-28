import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastrarApartamentoComponent } from './cadastrar-apartamento.component';

describe('CadastrarApartamentoComponent', () => {
  let component: CadastrarApartamentoComponent;
  let fixture: ComponentFixture<CadastrarApartamentoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CadastrarApartamentoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastrarApartamentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
