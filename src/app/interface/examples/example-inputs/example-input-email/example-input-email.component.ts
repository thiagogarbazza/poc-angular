import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-example-input-email',
  templateUrl: './example-input-email.component.html',
  styleUrls: ['./example-input-email.component.scss']
})
export class ExampleInputEmailComponent implements OnInit {

  public formGroup: FormGroup;

  constructor (private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.formGroup = this.criarFormGroup();
  }

  private criarFormGroup() {
    return this.formBuilder.group({
      item: new FormControl(null, []),
      itemComValor: new FormControl('contato@github.com', []),
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
