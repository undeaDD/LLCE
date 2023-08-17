import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExammodusComponent } from './exammodus.component';

describe('ExammodusComponent', () => {
  let component: ExammodusComponent;
  let fixture: ComponentFixture<ExammodusComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExammodusComponent]
    });
    fixture = TestBed.createComponent(ExammodusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
