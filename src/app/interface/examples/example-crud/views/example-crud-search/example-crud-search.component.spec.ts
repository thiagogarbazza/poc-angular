import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExampleCRUDSearchComponent } from './example-crud-search.component';

describe('ExampleCRUDSearchComponent', () => {
  let component: ExampleCRUDSearchComponent;
  let fixture: ComponentFixture<ExampleCRUDSearchComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExampleCRUDSearchComponent]
    });
    fixture = TestBed.createComponent(ExampleCRUDSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
