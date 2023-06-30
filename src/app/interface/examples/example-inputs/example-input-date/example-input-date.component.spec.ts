import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExampleInputDateComponent } from './example-input-date.component';

describe('ExampleInputDateComponent', () => {
  let component: ExampleInputDateComponent;
  let fixture: ComponentFixture<ExampleInputDateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExampleInputDateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExampleInputDateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
