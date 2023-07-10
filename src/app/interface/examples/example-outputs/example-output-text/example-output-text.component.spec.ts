import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExampleOutputTextComponent } from './example-output-text.component';

describe('ExampleInputTextComponent', () => {
  let component: ExampleOutputTextComponent;
  let fixture: ComponentFixture<ExampleOutputTextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExampleOutputTextComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExampleOutputTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
