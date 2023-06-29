import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExampleInputTextComponent } from './example-input-text.component';

describe('ExampleInputTextComponent', () => {
  let component: ExampleInputTextComponent;
  let fixture: ComponentFixture<ExampleInputTextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExampleInputTextComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExampleInputTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
