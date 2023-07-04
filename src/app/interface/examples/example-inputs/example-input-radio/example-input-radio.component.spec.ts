import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExampleInputRadioComponent } from './example-input-radio.component';

describe('ExampleInputRadioComponent', () => {
  let component: ExampleInputRadioComponent;
  let fixture: ComponentFixture<ExampleInputRadioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExampleInputRadioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExampleInputRadioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
