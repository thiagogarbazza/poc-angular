import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExampleInputCodeEditorComponent } from './example-input-code-editor.component';

describe('ExampleInputCodeEditorComponent', () => {
  let component: ExampleInputCodeEditorComponent;
  let fixture: ComponentFixture<ExampleInputCodeEditorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExampleInputCodeEditorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExampleInputCodeEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
