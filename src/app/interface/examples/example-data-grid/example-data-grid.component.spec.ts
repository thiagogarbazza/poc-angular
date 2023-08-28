import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExampleDataGridComponent } from './example-data-grid.component';

describe('ExampleDataGridComponent', () => {
  let component: ExampleDataGridComponent;
  let fixture: ComponentFixture<ExampleDataGridComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExampleDataGridComponent]
    });
    fixture = TestBed.createComponent(ExampleDataGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
