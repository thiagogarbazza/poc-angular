import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

import { Converters } from '@app-core/utils/converters';

@Component({
  selector: 'app-example-input-date',
  templateUrl: './example-input-date.component.html',
  styleUrls: ['./example-input-date.component.scss']
})
export class ExampleInputDateComponent implements OnInit {

  public formGroup: FormGroup;

  constructor (private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.formGroup = this.criarFormGroup();
  }

  private criarFormGroup() {
    return this.formBuilder.group({
      item: new FormControl(null, []),
      itemComValor: new FormControl(Converters.dateToString('2023-01-31'), []),
      itemComPlaceholder: new FormControl(null, []),
      itemDesabilitado: new FormControl({value: null, disabled: true}, []),
      itemReadonly: new FormControl(null, []),
      itemObrigatorio: new FormControl(null, [Validators.required]),
      itemComTamanhoMinimo: new FormControl(null, [Validators.minLength(5)]),
      itemComTamanhoMaximo: new FormControl(null, [Validators.maxLength(10)]),
      itemComAjuda: new FormControl(null, []),
      itemComPrepend: new FormControl(null, []),
      itemComAppend: new FormControl(null, []),
    });
  }
}
