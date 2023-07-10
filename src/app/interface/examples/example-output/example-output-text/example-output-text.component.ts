import { Component, OnInit } from '@angular/core';

const VALOR = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.\nProin at diam mi.\nInteger nec ullamcorper justo. Etiam vulputate laoreet tempus.\nPhasellus feugiat nisl dolor, eu fermentum sem maximus vitae.';

@Component({
  selector: 'app-example-output-text',
  templateUrl: './example-output-text.component.html',
  styleUrls: ['./example-output-text.component.scss']
})
export class ExampleOutputTextComponent implements OnInit {

  public item = {
    valor: 'Valor preenchido',
    valorComQuebraDeLinha: VALOR,
    valorComAjuda: 'Valor com "ajuda preenchida"',
  };

  constructor () {}

  ngOnInit(): void {

  }
}
