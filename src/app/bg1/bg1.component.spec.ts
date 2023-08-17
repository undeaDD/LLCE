import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Bg1Component } from './bg1.component';

describe('Bg1Component', () => {
  let component: Bg1Component;
  let fixture: ComponentFixture<Bg1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Bg1Component]
    });
    fixture = TestBed.createComponent(Bg1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
