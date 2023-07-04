import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExampleInputCheckboxComponent } from './example-input-checkbox.component';

describe('ExampleInputCheckboxComponent', () => {
  let component: ExampleInputCheckboxComponent;
  let fixture: ComponentFixture<ExampleInputCheckboxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExampleInputCheckboxComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExampleInputCheckboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
