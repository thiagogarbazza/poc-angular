import { Component, OnInit } from '@angular/core';

const VALOR = 'function x() {\n  console.log("Hello world!");\n}';

@Component({
  selector: 'app-example-output-code',
  templateUrl: './example-output-code.component.html',
  styleUrls: ['./example-output-code.component.scss']
})
export class ExampleOutputCodeComponent implements OnInit {

  public item = {
    valor: 'function x() {\n  console.log("Hello world!");\n}',
    valorComQuebraDeLinha: VALOR,
    valorComAjuda: 'function x() {\n  console.log("Hello world!");\n}',
  };

  constructor () {}

  ngOnInit(): void {

  }
}
