import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExampleInputTextEditorComponent } from './example-input-text-editor.component';

describe('ExampleInputTextEditorComponent', () => {
  let component: ExampleInputTextEditorComponent;
  let fixture: ComponentFixture<ExampleInputTextEditorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExampleInputTextEditorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExampleInputTextEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
