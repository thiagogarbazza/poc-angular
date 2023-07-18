import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputTextEditorComponent } from './input-text-editor.component';

describe('InputTextEditorComponent', () => {
  let component: InputTextEditorComponent;
  let fixture: ComponentFixture<InputTextEditorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputTextEditorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InputTextEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
