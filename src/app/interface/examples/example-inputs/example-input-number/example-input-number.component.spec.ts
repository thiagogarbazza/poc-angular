import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExampleInputNumberComponent } from './example-input-number.component';

describe('ExampleInputTextComponent', () => {
  let component: ExampleInputNumberComponent;
  let fixture: ComponentFixture<ExampleInputNumberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExampleInputNumberComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExampleInputNumberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
