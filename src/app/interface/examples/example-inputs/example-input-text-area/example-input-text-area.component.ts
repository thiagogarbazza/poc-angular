import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

const VALOR = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.\nProin at diam mi.\nInteger nec ullamcorper justo. Etiam vulputate laoreet tempus.\nPhasellus feugiat nisl dolor, eu fermentum sem maximus vitae.';

@Component({
  selector: 'app-example-input-text-area',
  templateUrl: './example-input-text-area.component.html',
  styleUrls: ['./example-input-text-area.component.scss']
})
export class ExampleInputTextAreaComponent implements OnInit {

  public formGroup: FormGroup;

  constructor (private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.formGroup = this.criarFormGroup();
  }

  private criarFormGroup() {
    return this.formBuilder.group({
      item: new FormControl(null, []),
      itemComValor: new FormControl(VALOR, []),
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
