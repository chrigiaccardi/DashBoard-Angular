import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPersona } from './add-persona';

describe('AddPersona', () => {
  let component: AddPersona;
  let fixture: ComponentFixture<AddPersona>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddPersona]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddPersona);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
