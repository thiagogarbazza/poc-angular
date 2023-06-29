import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExampleInputsTemplateComponent } from './example-inputs-template.component';

describe('ExampleInputsTemplateComponent', () => {
  let component: ExampleInputsTemplateComponent;
  let fixture: ComponentFixture<ExampleInputsTemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExampleInputsTemplateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExampleInputsTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
