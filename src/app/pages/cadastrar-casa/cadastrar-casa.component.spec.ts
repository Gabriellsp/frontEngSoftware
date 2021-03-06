import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastrarCasaComponent } from './cadastrar-casa.component';

describe('CadastrarCasaComponent', () => {
  let component: CadastrarCasaComponent;
  let fixture: ComponentFixture<CadastrarCasaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CadastrarCasaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastrarCasaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
