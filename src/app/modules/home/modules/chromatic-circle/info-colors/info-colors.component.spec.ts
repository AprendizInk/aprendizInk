import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoColorsComponent } from './info-colors.component';

describe('InfoColorsComponent', () => {
  let component: InfoColorsComponent;
  let fixture: ComponentFixture<InfoColorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfoColorsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InfoColorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
