import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckmodusComponent } from './checkmodus.component';

describe('CheckmodusComponent', () => {
  let component: CheckmodusComponent;
  let fixture: ComponentFixture<CheckmodusComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CheckmodusComponent]
    });
    fixture = TestBed.createComponent(CheckmodusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
