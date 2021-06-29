import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastrarBairroComponent } from './cadastrar-bairro.component';

describe('CadastrarBairroComponent', () => {
  let component: CadastrarBairroComponent;
  let fixture: ComponentFixture<CadastrarBairroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CadastrarBairroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastrarBairroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
