import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListCasaComponent } from './list-casa.component';

describe('ListCasaComponent', () => {
  let component: ListCasaComponent;
  let fixture: ComponentFixture<ListCasaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListCasaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListCasaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
