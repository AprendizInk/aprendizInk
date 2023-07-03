import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChromaticApiComponent } from './chromatic-api.component';

describe('ChromaticApiComponent', () => {
  let component: ChromaticApiComponent;
  let fixture: ComponentFixture<ChromaticApiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChromaticApiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChromaticApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
