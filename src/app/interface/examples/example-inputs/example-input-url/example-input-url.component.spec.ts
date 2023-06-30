import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExampleInputUrlComponent } from './example-input-url.component';

describe('ExampleInputUrlComponent', () => {
  let component: ExampleInputUrlComponent;
  let fixture: ComponentFixture<ExampleInputUrlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExampleInputUrlComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExampleInputUrlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
