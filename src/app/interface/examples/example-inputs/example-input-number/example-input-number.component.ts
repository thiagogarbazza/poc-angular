import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-example-input-number',
  templateUrl: './example-input-number.component.html',
  styleUrls: ['./example-input-number.component.scss']
})
export class ExampleInputNumberComponent implements OnInit {

  public formGroup: FormGroup;

  constructor (private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.formGroup = this.criarFormGroup();
  }

  private criarFormGroup() {
    return this.formBuilder.group({
      item: new FormControl(null, []),
      itemComValor: new FormControl(1235.98, []),
      itemComPlaceholder: new FormControl(null, []),
      itemDesabilitado: new FormControl({value: null, disabled: true}, []),
      itemReadonly: new FormControl(null, []),
      itemObrigatorio: new FormControl(null, [Validators.required]),
      itemComValorMinimo: new FormControl(null, [Validators.min(5)]),
      itemComValorMaximo: new FormControl(null, [Validators.max(10)]),
      itemComAjuda: new FormControl(null, []),
      itemComPrepend: new FormControl(null, []),
      itemComAppend: new FormControl(null, []),
    });
  }
}
