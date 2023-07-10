import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExampleInputFileComponent } from './example-input-file.component';

describe('ExampleInputFileComponent', () => {
  let component: ExampleInputFileComponent;
  let fixture: ComponentFixture<ExampleInputFileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExampleInputFileComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExampleInputFileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
