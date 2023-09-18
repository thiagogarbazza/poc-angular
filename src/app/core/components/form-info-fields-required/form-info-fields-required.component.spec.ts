import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormInfoFieldsRequiredComponent } from './form-info-fields-required.component';

describe('FormInfoFieldsRequiredComponent', () => {
  let component: FormInfoFieldsRequiredComponent;
  let fixture: ComponentFixture<FormInfoFieldsRequiredComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormInfoFieldsRequiredComponent]
    });
    fixture = TestBed.createComponent(FormInfoFieldsRequiredComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
