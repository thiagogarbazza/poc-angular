import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputCodeEditorComponent } from './input-code-editor.component';

describe('InputCodeEditorComponent', () => {
  let component: InputCodeEditorComponent;
  let fixture: ComponentFixture<InputCodeEditorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputCodeEditorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InputCodeEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
