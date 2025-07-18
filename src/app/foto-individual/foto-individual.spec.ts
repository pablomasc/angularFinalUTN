import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FotoIndividual } from './foto-individual';

describe('FotoIndividual', () => {
  let component: FotoIndividual;
  let fixture: ComponentFixture<FotoIndividual>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FotoIndividual]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FotoIndividual);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
