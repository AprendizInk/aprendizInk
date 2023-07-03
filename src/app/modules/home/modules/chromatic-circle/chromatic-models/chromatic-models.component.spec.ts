import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChromaticModelsComponent } from './chromatic-models.component';

describe('ChromaticModelsComponent', () => {
  let component: ChromaticModelsComponent;
  let fixture: ComponentFixture<ChromaticModelsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChromaticModelsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChromaticModelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
