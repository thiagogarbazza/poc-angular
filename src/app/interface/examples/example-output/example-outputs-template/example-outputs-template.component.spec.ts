import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExampleOutputsTemplateComponent } from './example-outputs-template.component';

describe('ExampleOutputsTemplateComponent', () => {
  let component: ExampleOutputsTemplateComponent;
  let fixture: ComponentFixture<ExampleOutputsTemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExampleOutputsTemplateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExampleOutputsTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
