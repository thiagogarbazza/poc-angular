import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExampleOutputCodeComponent } from './example-output-code.component';

describe('ExampleOutputCodeComponent', () => {
  let component: ExampleOutputCodeComponent;
  let fixture: ComponentFixture<ExampleOutputCodeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExampleOutputCodeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExampleOutputCodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
