import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccessibilityBarComponent } from './accessibility-bar.component';

describe('AccessibilityBarComponent', () => {
  let component: AccessibilityBarComponent;
  let fixture: ComponentFixture<AccessibilityBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccessibilityBarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccessibilityBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
