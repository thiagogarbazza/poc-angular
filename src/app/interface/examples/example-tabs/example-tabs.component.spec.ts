import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExampleTabsComponent } from './example-tabs.component';

describe('ExampleTabsComponent', () => {
  let component: ExampleTabsComponent;
  let fixture: ComponentFixture<ExampleTabsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExampleTabsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExampleTabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
