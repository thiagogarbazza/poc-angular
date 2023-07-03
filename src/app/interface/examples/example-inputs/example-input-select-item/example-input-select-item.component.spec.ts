import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExampleInputSelectItemComponent } from './example-input-select-item.component';

describe('ExampleInputSelectItemComponent', () => {
  let component: ExampleInputSelectItemComponent;
  let fixture: ComponentFixture<ExampleInputSelectItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExampleInputSelectItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExampleInputSelectItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
