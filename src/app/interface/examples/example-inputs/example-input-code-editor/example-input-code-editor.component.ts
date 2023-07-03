import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-example-input-code-editor',
  templateUrl: './example-input-code-editor.component.html',
  styleUrls: ['./example-input-code-editor.component.scss']
})
export class ExampleInputCodeEditorComponent implements OnInit {

  public formGroup: FormGroup;

  constructor (private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.formGroup = this.criarFormGroup();
  }

  private criarFormGroup() {
    return this.formBuilder.group({
      item: new FormControl(null, []),
      itemComValor: new FormControl('function x() {\n  console.log("Hello world!");\n}', []),
      itemComPlaceholder: new FormControl(null, []),
      itemDesabilitado: new FormControl({value: null, disabled: true}, []),
      itemReadonly: new FormControl(null, []),
      itemObrigatorio: new FormControl(null, [Validators.required]),
      itemComTamanhoMinimo: new FormControl(null, [Validators.minLength(5)]),
      itemComTamanhoMaximo: new FormControl(null, [Validators.maxLength(10)]),
      itemComAjuda: new FormControl(null, []),
    });
  }
}
