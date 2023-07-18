import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputSelectItemComponent } from './input-select-item.component';

describe('InputSelectItemComponent', () => {
  let component: InputSelectItemComponent;
  let fixture: ComponentFixture<InputSelectItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputSelectItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InputSelectItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
