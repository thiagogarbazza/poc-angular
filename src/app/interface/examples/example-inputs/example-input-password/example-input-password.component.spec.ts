import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExampleInputPasswordComponent } from './example-input-password.component';

describe('ExampleInputTextComponent', () => {
  let component: ExampleInputPasswordComponent;
  let fixture: ComponentFixture<ExampleInputPasswordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExampleInputPasswordComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExampleInputPasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
