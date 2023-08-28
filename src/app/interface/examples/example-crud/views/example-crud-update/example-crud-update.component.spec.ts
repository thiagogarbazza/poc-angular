import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExampleCRUDUpdateComponent } from './example-crud-update.component';

describe('ExampleCRUDUpdateComponent', () => {
  let component: ExampleCRUDUpdateComponent;
  let fixture: ComponentFixture<ExampleCRUDUpdateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExampleCRUDUpdateComponent]
    });
    fixture = TestBed.createComponent(ExampleCRUDUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
