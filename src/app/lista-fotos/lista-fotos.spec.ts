import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaFotos } from './lista-fotos';

describe('ListaFotos', () => {
  let component: ListaFotos;
  let fixture: ComponentFixture<ListaFotos>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListaFotos]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaFotos);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
