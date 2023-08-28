import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExampleCRUDDetailComponent } from './example-crud-detail.component';

describe('ExampleCRUDDetailComponent', () => {
  let component: ExampleCRUDDetailComponent;
  let fixture: ComponentFixture<ExampleCRUDDetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExampleCRUDDetailComponent]
    });
    fixture = TestBed.createComponent(ExampleCRUDDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
