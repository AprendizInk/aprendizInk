import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChromaticStoryComponent } from './chromatic-story.component';

describe('ChromaticStoryComponent', () => {
  let component: ChromaticStoryComponent;
  let fixture: ComponentFixture<ChromaticStoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChromaticStoryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChromaticStoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
