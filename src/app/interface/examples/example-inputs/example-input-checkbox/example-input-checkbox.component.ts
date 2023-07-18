import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

import SelectableItem from '@app-core/service/selectable-item';

@Component({
  selector: 'app-example-input-checkbox',
  templateUrl: './example-input-checkbox.component.html',
  styleUrls: ['./example-input-checkbox.component.scss']
})
export class ExampleInputCheckboxComponent implements OnInit {

  public formGroup: FormGroup;
  public items: Array<SelectableItem<string>> = [
    { id: '1', description: '1 - description', tooltip: 'tooltip for id 1' },
    { id: '2', description: '2 - description', tooltip: 'tooltip for id 2' },
    { id: '3', description: '3 - description', tooltip: 'tooltip for id 3' },
    { id: '4', description: '4 - description', tooltip: 'tooltip for id 4' },
    { id: '5', description: '5 - description', tooltip: 'tooltip for id 5' }
  ];

  constructor (private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.formGroup = this.criarFormGroup();
  }

  private criarFormGroup() {
    return this.formBuilder.group({
      item: new FormControl(null, []),
      itemComValor: new FormControl([this.items[1]], []),
      itemDesabilitado: new FormControl({value: null, disabled: true}, []),
      itemReadonly: new FormControl(null, []),
      itemObrigatorio: new FormControl(null, [Validators.required]),
      itemInline: new FormControl(null, []),
      itemReverse: new FormControl(null, []),
      itemComAjuda: new FormControl(null, [])
    });
  }
}
