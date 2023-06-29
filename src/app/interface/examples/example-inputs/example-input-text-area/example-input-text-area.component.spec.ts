import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExampleInputTextAreaComponent } from './example-input-text-area.component';

describe('ExampleInputTextAreaComponent', () => {
  let component: ExampleInputTextAreaComponent;
  let fixture: ComponentFixture<ExampleInputTextAreaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExampleInputTextAreaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExampleInputTextAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
