import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListApartamentoComponent } from './list-apartamento.component';

describe('ListApartamentoComponent', () => {
  let component: ListApartamentoComponent;
  let fixture: ComponentFixture<ListApartamentoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListApartamentoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListApartamentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
