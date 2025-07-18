import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FotoDetalle } from './foto-detalle';

describe('FotoDetalle', () => {
  let component: FotoDetalle;
  let fixture: ComponentFixture<FotoDetalle>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FotoDetalle]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FotoDetalle);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
