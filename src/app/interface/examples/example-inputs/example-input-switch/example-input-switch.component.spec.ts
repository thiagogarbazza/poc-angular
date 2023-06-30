import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExampleInputSwitchComponent } from './example-input-switch.component';

describe('ExampleInputSwitchComponent', () => {
  let component: ExampleInputSwitchComponent;
  let fixture: ComponentFixture<ExampleInputSwitchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExampleInputSwitchComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExampleInputSwitchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
