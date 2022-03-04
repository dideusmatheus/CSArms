import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaArmasComponent } from './lista-armas.component';

describe('ListaArmasComponent', () => {
  let component: ListaArmasComponent;
  let fixture: ComponentFixture<ListaArmasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaArmasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaArmasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
