import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExampleCRUDCreateComponent } from './example-crud-create.component';

describe('ExampleCRUDCreateComponent', () => {
  let component: ExampleCRUDCreateComponent;
  let fixture: ComponentFixture<ExampleCRUDCreateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExampleCRUDCreateComponent]
    });
    fixture = TestBed.createComponent(ExampleCRUDCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
