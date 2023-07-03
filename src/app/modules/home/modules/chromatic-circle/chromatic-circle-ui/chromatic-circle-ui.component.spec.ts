import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChromaticCircleUiComponent } from './chromatic-circle-ui.component';

describe('ChromaticCircleUiComponent', () => {
  let component: ChromaticCircleUiComponent;
  let fixture: ComponentFixture<ChromaticCircleUiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChromaticCircleUiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChromaticCircleUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
