import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChromaticForTattoosComponent } from './chromatic-for-tattoos.component';

describe('ChromaticForTattoosComponent', () => {
  let component: ChromaticForTattoosComponent;
  let fixture: ComponentFixture<ChromaticForTattoosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChromaticForTattoosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChromaticForTattoosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
