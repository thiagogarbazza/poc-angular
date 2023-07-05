import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

const VALOR = '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p><ol><li>Proin at diam mi <sub>1</sub>.</li><li>Proin at diam mi <sup>2</sup>.</li></ol><p>Integer nec <em>ullamcorper </em><strong>justo</strong>. <u>Etiam </u><s>vulputate </s>laoreet tempus.</p><blockquote><span style=\"color: rgb(0, 0, 0);\">Nulla malesuada a ligula consequat vehicula.</span></blockquote><p>Phasellus feugiat nisl dolor, eu fermentum sem <span style=\"color: rgb(230, 0, 0);\">maximus </span><span style=\"background-color: rgb(255, 235, 204);\">vitae</span>.</p>';

@Component({
  selector: 'app-example-input-text-editor',
  templateUrl: './example-input-text-editor.component.html',
  styleUrls: ['./example-input-text-editor.component.scss']
})
export class ExampleInputTextEditorComponent implements OnInit {

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
