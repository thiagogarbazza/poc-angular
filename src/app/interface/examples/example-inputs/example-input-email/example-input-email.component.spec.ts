import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExampleInputEmailComponent } from './example-input-email.component';

describe('ExampleInputEmailComponent', () => {
  let component: ExampleInputEmailComponent;
  let fixture: ComponentFixture<ExampleInputEmailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExampleInputEmailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExampleInputEmailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
